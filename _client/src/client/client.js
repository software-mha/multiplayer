import * as Colyseus from "colyseus.js";
import { RoomType } from "./data/RoomType";
import CustomRelayRoom from "../rooms/CustomRelayRoom/CustomRelayRoom";

export default class Client {
    #client;
    #gameId;
    #version;
    #rooms = {};

    constructor(url, gameId, version) {
        this.#client = new Colyseus.Client(url);
        this.#gameId = gameId;
        this.#version = version;
    }

    onJoinRoom(room) {
    }

    async createRoom(type, roomData, roomSetting, playerData) {
        let self = this;
        let room = null;

        switch (type) {
            case RoomType.relayRoom:
                room = new CustomRelayRoom(
                    this.#client,
                    this.#gameId,
                    this.#version,
                    (room) => {
                        self.onJoinRoom(room);
                    }
                );
                break;
        }

        if (room == null)
            console.error("createRoom: Room type does not exist.");

        try {
            room = await room.createRoom(
                roomData,
                roomSetting,
                playerData
            );
        } catch (e) {
            console.error("createRoom: ", e);
        }

        this.#rooms[room.roomId] = room;

        return room;
    }

    async joinOrCreate(type) {
        let room = null;

        switch (type) {
            case RoomType.relayRoom:
                room = new CustomRelayRoom(
                    this.#client,
                    this.#gameId,
                    this.#version
                );
                break;
        }

        if (room == null)
            console.error("createRoom: Room type does not exist.");

        try {
            room = await room.createRoom(option);
        } catch (e) {
            console.error("createRoom: ", e);
        }

        this.#rooms[room.roomId] = room;

        return room;
    }

    async joinRoom(type, roomSetting, playerData) {
        let room = null;

        switch (type) {
            case RoomType.relayRoom:
                room = new CustomRelayRoom(
                    this.#client,
                    this.#gameId,
                    this.#version
                );
                break;
        }

        if (room == null) console.error("joinRoom: Room type does not exist.");

        try {
            room = await room.joinRoom(roomSetting, playerData);
        } catch (e) {
            console.error("joinRoom: ", e);
        }

        this.#rooms[room.roomId] = room;

        return room;
    }

    async joinLobby() {
        let room = null;

        switch (type) {
            case RoomType.relayRoom:
                room = new CustomRelayRoom(
                    this.#client,
                    this.#gameId,
                    this.#version
                );
                break;
        }

        if (room == null)
            console.error("createRoom: Room type does not exist.");

        try {
            room = await room.createRoom(option);
        } catch (e) {
            console.error("createRoom: ", e);
        }

        this.#rooms[room.roomId] = room;

        return room;
    }
}
