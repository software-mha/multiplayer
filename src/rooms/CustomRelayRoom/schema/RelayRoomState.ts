import { Schema, type, MapSchema } from "@colyseus/schema";

import PlayerState from "./PlayerState";

export default class RelayRoomState extends Schema {
    @type("string") masterClientId: string = "";
    @type("number") playerCount: number = 0;
    @type({ map: PlayerState }) players = new MapSchema<PlayerState>();
    @type("string") roomCustomData: string = "{}"; // Empty JSON by default
}
