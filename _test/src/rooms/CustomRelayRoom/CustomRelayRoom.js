import { ServerRoomType } from "../data/serverRoomType";
import { messageType } from "./data/data";

export default class CustomRelayRoom {
    #client;
    #gameId;
    #version;
    #room;
    #type;
    #properties;

    constructor(client, gameId, version) {
        this.#client = client;
        this.#gameId = gameId;
        this.#version = version;
        this.#type = ServerRoomType.customRelay
    }

    async createRoom(roomData, roomSetting, playerData) {
        this.#room = await this.#client.create(this.#type, {
            gameId: this.#gameId,
            version: this.#version,
            roomData,
            roomSetting,
            playerData,
        });
        this.#addConnections();
        return this.#room;
    }

    async joinRoom(roomSetting, playerData) {
        this.#room = await this.#client.join(this.#type, {
            metadata: {
                gameId: this.#gameId,
                version: this.#version,
                ...roomSetting,
            },
        });
        this.#addConnections();
        return this.#room;
    }

    #addConnections() {
        // 🔹 Triggered when successfully joined

        // 🔹 Listening for state updates
        this.#room.onStateChange((state) => {
            console.log("New State:", state);
        });

        // 🔹 Listening for messages
        this.#room.onMessage("*", (type, message) => {
            console.log(`Received message:`, type, message);
        });

        // 🔹 Listening for when a player leaves
        this.#room.onLeave((code) => {
            console.log("Left room with code:", code);
        });
    }

    sendMessage() {}
}
