import { RoomType } from "../src/client/data/RoomType.js";
import MultiClient from "../src/index.js";

let client1 = new MultiClient.Client("http://localhost:2567", "1", "1");

client1.createRoom(RoomType.relayRoom,{"asd":"asd","123":"123"},{},{name:"hassan"});

console.log(client1);

window.client1 = client1;

