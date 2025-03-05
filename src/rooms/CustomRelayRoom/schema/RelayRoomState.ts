import { Schema, type, MapSchema } from "@colyseus/schema";

import PlayerState from "./PlayerState";

export default class RelayRoomState extends Schema {
    @type("string") gameId: string = "";
    @type("string") masterClientId: string = "";
    @type("string") version: string = "";
    @type("number") playerCount: number = 0;
    @type({ map: PlayerState }) players = new MapSchema<PlayerState>();
    @type("string") roomCustomData: string = "{}"; 
}
