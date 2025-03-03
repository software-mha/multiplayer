import { Room, Client } from "@colyseus/core";

import PlayerState from "./schema/PlayerState";
import RelayRoomState from "./schema/RelayRoomState";

export class CustomRelayRoom extends Room<RelayRoomState> {
    async onCreate(options: any): Promise<void> {
        console.log("Relay Room Created:", this.roomId);
        this.state = new RelayRoomState();
        this.maxClients = options.maxClients || 8;

        // 🔹 Handle all messages
        this.onMessage("*", (client, type, message) => {
            if (type === "update_player_data") {
                const player = this.state.players.get(client.sessionId);
                if (player) {
                    player.customData = JSON.stringify(message);
                    // Notify all clients
                    this.broadcast("player_data_updated", {
                        playerId: client.sessionId,
                        customData: message,
                    });
                }
            } else if (
                type === "update_room_data" &&
                client.sessionId === this.state.masterClientId
            ) {
                this.state.roomCustomData = JSON.stringify(message);
                // Notify all clients
                this.broadcast("room_data_updated", { customData: message });
            } else {
                // Relay everything else
                this.broadcast(type, message, { except: client });
            }
        });
    }

    async onJoin(client: Client, options?: any): Promise<void> {
        console.log(`${client.sessionId} joined the relay room`);

        // Create and store player state with empty JSON
        const player = new PlayerState();
        player.id = client.sessionId;
        this.state.players.set(client.sessionId, player);
        this.state.playerCount++;

        // Assign first player as Master Client
        if (!this.state.masterClientId) {
            this.state.masterClientId = client.sessionId;
        }

        // Notify all clients
        this.broadcast("state_update", {
            masterClientId: this.state.masterClientId,
            playerCount: this.state.playerCount,
        });

        // ✅ Send the player's initial state to them
        client.send("player_data_updated", {
            playerId: client.sessionId,
            customData: JSON.parse(player.customData),
        });
    }

    async onLeave(client: Client, consented: boolean): Promise<void> {
        console.log(`${client.sessionId} left the relay room`);

        // Remove player
        this.state.players.delete(client.sessionId);
        this.state.playerCount--;

        // Reassign master if needed
        if (client.sessionId === this.state.masterClientId) {
            this.state.masterClientId =
                this.clients.length > 0 ? this.clients[0].sessionId : "";
        }

        // Notify all clients
        this.broadcast("state_update", {
            masterClientId: this.state.masterClientId,
            playerCount: this.state.playerCount,
        });
    }
}
