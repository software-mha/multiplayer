import { Schema, type, MapSchema } from "@colyseus/schema";

export default class PlayerState extends Schema {
    @type("string") id: string;
    @type("string") customData: string = "{}"; // Empty JSON by default
}
