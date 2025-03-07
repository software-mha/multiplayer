import { ServerRoomType } from "../data/serverRoomType";
import { messageType } from "./data/data";

export default class CustomRelayRoom {
    #client;
    #gameId;
    #version;
    #room;
    #type;
    #callbackOnJoinRoom;
    #properties;

    constructor(client = "", gameId = "", version = "", callbackOnJoinRoom) {
        this.#client = client;
        this.#gameId = gameId;
        this.#version = version;
        this.#callbackOnJoinRoom = callbackOnJoinRoom;
        this.#type = ServerRoomType.customRelay;
    }

    async createRoom(roomSetting = {}, roomData = {}, playerData = {}) {
        this.#room = await this.#client.create(this.#type, {
            metadata: {
                gameId: this.#gameId,
                version: this.#version,
                type: this.#type,
                roomSetting,
            },
            roomData,
            playerData,
        });
        this.#addEvent();
        this.#callbackOnJoinRoom(this);
        return this.#room;
    }

    async createOrJoinRoom(roomSetting = {}, roomData = {}, playerData = {}) {
        this.#room = await this.#client.joinOrCreate(this.#type, {
            metadata: {
                gameId: this.#gameId,
                version: this.#version,
                type: this.#type,
                roomSetting,
            },
            roomData,
            playerData,
        });
        this.#addEvent();
        this.#callbackOnJoinRoom(this);
        return this.#room;
    }

    async joinRandomRoom(roomSetting = {}, playerData = {}) {
        this.#room = await this.#client.join(this.#type, {
            metadata: {
                gameId: this.#gameId,
                version: this.#version,
                type: this.#type,
                roomSetting,
            },
            playerData: playerData,
        });
        this.#addEvent();
        this.#callbackOnJoinRoom(this);
        return this.#room;
    }

    async joinRoomById(roomId = "", roomSetting = {}, playerData = {}) {
        this.#room = await this.#client.join(roomId, {
            metadata: {
                gameId: this.#gameId,
                version: this.#version,
                type: this.#type,
                roomSetting,
            },
            playerData: playerData,
        });
        this.#addEvent();
        this.#callbackOnJoinRoom(this);
        return this.#room;
    }

    onUpdateProperties() {}

    updateClientProperties(clients) {
        this.onUpdateClientProperty(this);
    }

    updateRoomProperties(room) {
        this.onUpdateRoomProperty(this);
    }

    onUpdateClientProperty() {}

    onUpdateRoomProperty() {}

    onLeaveRoom() {}

    forceUpdateProperties() {}

    onForceUpdateProperties() {}

    #addEvent() {
        let self = this;
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

        this.#room.onError(self.onError);
    }

    #send(type, data, options) {
        switch (type) {
            case messageType.send_to_other:
                console.log(type, {
                    data,
                });
                this.#room.send(type, {
                    data,
                });
                break;
            case messageType.send_to_all:
                this.#room.send(type, {
                    data,
                });
                break;
            case messageType.send_to_master:
                this.#room.send(type, {
                    data,
                });
                break;
            case messageType.send_to_specific:
                this.#room.send(type, {
                    data,
                    targetClients: options.targetClients,
                });
                break;
        }
    }

    onEvent(type, content, sender) {
        // For Client content
    }

    onError(code,payload){
        console.log(code," ",payload )
    }

    raiseEvent(type, content, options = {}) {
        let data = {
            type,
            data: content,
        };

        if (options.targetClients && options.targetClients.length) {
            this.#send(messageType.send_to_specific, data, options);
        } else if (options.receivers == messageType.send_to_all) {
            this.#send(messageType.send_to_all, data);
        } else if (options.receivers == messageType.send_to_master) {
            this.#send(messageType.send_to_master, data);
        } else if (options.receivers == messageType.send_to_other) {
            this.#send(messageType.send_to_other, data);
        } else {
            this.#send(messageType.send_to_other, data);
        }
    }

    get ping() {
        return this.#room.ping;
    }

    get room(){
        return this.#room;
    }
}
