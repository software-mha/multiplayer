import { Room, Client } from "@colyseus/core";

import PlayerState from "./schema/PlayerState";
import RelayRoomState from "./schema/RelayRoomState";

import { messageType } from "./data/data";

export class CustomRelayRoom extends Room<RelayRoomState> {
    async onCreate(options: any): Promise<void> {
        console.log("Relay Room Created:", this.roomId);
        console.log("Relay Room Created:", options);
        this.state = new RelayRoomState();
        this.maxClients = options.maxClients || 8;
        this.patchRate = 0;
        console.log("jaja");

        if (
            !options.metadata ||
            !options.metadata.gameId ||
            options.metadata.gameId.trim() === ""
        ) {
            console.error("Room creation failed: Missing or invalid gameId");
            this.autoDispose = true; // ✅ Prevent the room from being created
            return;
        }
        if (
            !options.metadata ||
            !options.metadata.version ||
            options.metadata.version.trim() === ""
        ) {
            console.error("Room creation failed: Missing or invalid version");
            this.autoDispose = true; // ✅ Prevent the room from being created
            return;
        }

        this.state.gameId = options.gameId;
        this.state.version = options.version;

        this.state.roomCustomData = options.roomData
            ? JSON.stringify(options.roomData)
            : "";

        this.setMetadata({
            gameId: options.gameId,
            version: options.version,
            type: options.type,
            roomSetting: options.roomSetting,
        });

        // 🔹 Handle all messages
        this.onMessage("*", (client, type, message) => {
            // let type = payload.type;
            // let message = { ...payload };
            // console.log(type);
            // console.log(message);
            // delete message.type;
            // console.log(client, " ", type, " ", message);
            // if (typeof type !== "number") {
            //     console.error(
            //         `Invalid message type from ${client.sessionId}:`,
            //         type
            //     );
            //     client.send("error", {
            //         message: "Message type must be a number",
            //     });
            //     return;
            // }
            this.handleMessage(client, type, message);
        });
    }

    

    handleMessage(client: Client, type: Number | String, message?: any) {
        switch (type) {
            // Updates
            case messageType.update_room_data:
                if (client.sessionId === this.state.masterClientId) {
                    this.state.roomCustomData = JSON.stringify(message);
                    // Notify all clients
                    this.broadcast(messageType.update_room_data, {
                        customData: message,
                    });
                }
                break;
            case messageType.update_player_data:
                const player = this.state.players.get(client.sessionId);
                if (player) {
                    player.customData = JSON.stringify(message);
                    // Notify all clients
                    this.broadcast(messageType.update_player_data, {
                        playerId: client.sessionId,
                        customData: message,
                    });
                }
                break;
            case messageType.update_master_client:
                this.state.masterClientId = message.clientId;
                this.broadcast(messageType.update_master_client, {
                    masterClientId: this.state.masterClientId,
                });
                break;

            // Get Request
            case messageType.get_room_data:
                client.send(
                    messageType.get_room_data,
                    this.state.roomCustomData
                );
                break;
            case messageType.get_player_data:
                client.send(
                    messageType.get_player_data,
                    this.state.players.get(message.clientId)
                );
                break;
            case messageType.get_all_player_data:
                client.send(
                    messageType.get_all_player_data,
                    this.state.players
                );
                break;
            case messageType.get_ping:
                client.send(messageType.get_ping, message);
                break;

            // Send Request
            case messageType.send_to_other:
                this.broadcast(messageType.send_to_other, message.data, {
                    except: client,
                });
                break;
            case messageType.send_to_all:
                this.broadcast(messageType.send_to_all, message.data);
                break;
            case messageType.send_to_master:
                let master =
                    this.clients.find(
                        (client) =>
                            client.sessionId === this.state.masterClientId
                    ) || null;
                if (master)
                    master.send(messageType.send_to_master, message.data);
                break;
            case messageType.send_to_specific:
                this.sendMessageToSpecific(
                    messageType.send_to_specific,
                    message.data,
                    message.targetClients
                );
                break;
            default:
                client.send("error", {
                    message: "Invalid message type.",
                });
        }
    }

    sendMessageToSpecific(
        type: number,
        data: any,
        targetClients: string[] = []
    ) {
        this.clients.forEach((client) => {
            if (
                targetClients.length > 0 &&
                !targetClients.includes(client.sessionId)
            )
                return;

            client.send(type.toString(), data);
        });
    }

    async onJoin(client: Client, options?: any): Promise<void> {
        console.log(`${client.sessionId} joined the relay room`, options);

        if (
            this.state.players.size == 0 &&
            (!options.metadata ||
                !options.metadata.gameId ||
                options.metadata.gameId.trim() === "")
        ) {
            console.log(`Rejecting ${client.sessionId}: Missing gameId`);
            client.send("error", {
                message: "Missing or invalid gameId. A gameId is required.",
            });
            client.leave();
            return;
        }

        if (
            this.state.players.size == 0 &&
            (!options.metadata ||
                !options.metadata.version ||
                options.metadata.version.trim() === "")
        ) {
            console.log(`Rejecting ${client.sessionId}: Missing version`);
            client.send("error", {
                message: "Missing or invalid version. A version is required.",
            });
            client.leave();
            return;
        }

        const player = new PlayerState();
        player.id = client.sessionId;
        player.customData = options.playerData
            ? JSON.stringify(options.playerData)
            : "";
        this.state.players.set(client.sessionId, player);
        this.state.playerCount++;

        if (!this.state.masterClientId) {
            this.state.masterClientId = client.sessionId;
        }

        // Notify all clients of room properties
        this.broadcast(messageType.update_room_properties, {
            masterClientId: this.state.masterClientId,
            playerCount: this.state.playerCount,
        });

        client.send(messageType.player_join);
        client.send(messageType.get_room_data, this.state.roomCustomData);
        client.send(messageType.get_all_player_data, this.state.players);
        this.broadcast(
            messageType.player_joined,
            this.state.players.get(client.sessionId),
            { except: [client] }
        );
    }

    async onLeave(client: Client, consented: boolean): Promise<void> {
        console.log(`${client.sessionId} left the relay room`);

        if (this.state.players.has(client.sessionId)) {
            this.state.players.delete(client.sessionId);
            this.state.playerCount--;
        }

        if (client.sessionId === this.state.masterClientId) {
            this.state.masterClientId =
                this.clients.length > 0 ? this.clients[0].sessionId : "";
        }

        this.broadcast(messageType.update_room_properties, {
            masterClientId: this.state.masterClientId,
            playerCount: this.state.playerCount,
        });

        this.broadcast(messageType.player_leave, client.sessionId);
    }

    onError(client: Client, error: any) {
        console.error(`Error from client ${client.sessionId}:`, error);
    }
}
