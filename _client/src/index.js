import Client from "./client/client";
import CustomRelayRoom from "./rooms/CustomRelayRoom/CustomRelayRoom";
import { RoomType } from "./client/data/RoomType";

const MultiClient = {
    Client,
    CustomRelayRoom,
    RoomType
};

Object.freeze(MultiClient);

window.MultiClient = MultiClient;

export default MultiClient;