// Import Phaser
import Phaser from "phaser";
import MultiClient from '../../client/dist/multi-client.es';

// Game scene
class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    preload() {
        // Load player sprite (Replace with actual asset)
        this.load.image(
            "player",
            "https://labs.phaser.io/assets/sprites/phaser-dude.png"
        );
    }

    onJoinRoom(room) {
        console.log("outer onJoinRoom", room);
        this.room = room;
        window.room1 = room;
    }

    create() {
        // Create player
        this.player = this.physics.add.sprite(400, 300, "player");
        this.player.setCollideWorldBounds(true);

        // Setup keyboard input
        this.cursors = this.input.keyboard.createCursorKeys();

        let client1 = new MultiClient.Client("http://localhost:2567", "1", "1");
        client1.onJoinRoom = this.onJoinRoom;
        client1.createRoom(
            MultiClient.RoomType.relayRoom,
            {},
            { asd: "asd", 123: "123" },
            { name: "hassan" }
        );
        window.client1 = client1;
    }

    updatePosition() {}

    update() {
        // Movement logic
        let velocityX = 0;
        let velocityY = 0;

        if (this.cursors.left.isDown) {
            velocityX = -200;
        } else if (this.cursors.right.isDown) {
            velocityX = 200;
        }

        if (this.cursors.up.isDown) {
            velocityY = -200;
        } else if (this.cursors.down.isDown) {
            velocityY = 200;
        }

        this.player.setVelocity(velocityX, velocityY);
    }
}

// Game configuration
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: "arcade",
        arcade: { gravity: { y: 0 }, debug: false },
    },
    scene: MainScene,
};

// Initialize the game
new Phaser.Game(config);
