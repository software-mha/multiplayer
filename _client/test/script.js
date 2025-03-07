import { RoomType } from "../src/client/data/RoomType.js";
import MultiClient from "../src/index.js";

let client1 = new MultiClient.Client("http://localhost:2567", "1", "1");

client1.createRoom(
    RoomType.relayRoom,
    {},
    { asd: "asd", 123: "123" },
    { name: "hassan" }
);
window.room1 = null;
client1.onJoinRoom = (room) => {
    console.log("outer onJoinRoom");
    room1 = room;
    // room1.onError = (code,payload)=>{
    //     console.log(code," ",payload);
    // }
};
console.log(client1);

window.client1 = client1;
