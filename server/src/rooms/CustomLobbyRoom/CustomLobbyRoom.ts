import { LobbyRoom, Client } from "@colyseus/core";


let messageType = {
    "list_rooms":0,
    "available_rooms":1
}

export class CustomLobbyRoom extends LobbyRoom {
    gameId: string | null = null; // Unique identifier for this lobby

    async onCreate(options: any): Promise<void> {
        console.log("Lobby Room Created:", this.roomId);

        // Store the unique gameId for this lobby
        if (options?.gameId) {
            this.gameId = options.gameId;
        }

        this.onMessage(messageType.list_rooms, (client) => {
            // Send the list of rooms that match the same gameId
            this.listAvailableRooms(client);
        });
    }

    async onJoin(client: Client, options?: any): Promise<void> {
        console.log(`${client.sessionId} joined the lobby`);

        // Reject players if their gameId doesn't match
        if (options?.gameId !== this.gameId) {
            console.log(
                `Client ${client.sessionId} rejected: gameId mismatch.`
            );
            client.leave();
            return;
        }

        // Notify client that they have joined successfully
        client.send("lobby_joined", {
            message: "Welcome to the lobby!",
            gameId: this.gameId,
        });

        // Send the list of available rooms with the same gameId
        this.listAvailableRooms(client);
    }

    onLeave(client: Client): void {
        console.log(`${client.sessionId} left the lobby`);
    }

    private async listAvailableRooms(client: Client): Promise<void> {
        const rooms = await this.presence.hgetall("rooms");
        const filteredRooms = Object.entries(rooms)
            .map(([roomId, roomData]) => JSON.parse(roomData))
            .filter((room) => room.gameId === this.gameId); // Filter by gameId

        client.send(messageType.available_rooms, filteredRooms);
    }
}
