import { Schema, type } from "@colyseus/schema";

export default class PlayerState extends Schema {
    @type("string") id: string;
    @type("string") customData: string = "{}";
}
