
import Phaser from 'phaser';

export default class GameOver extends Phaser.Scene {
    constructor() {
        super({key: 'gameOver', active: false})
    }
    init(data) {
        this.gamerData = data.gamerData;

    }
    preload() {

    }
    create() {
        console.log(this.gamerData)
        this.add.text(400, 400, `Your Score: ${this.gamerData.score}`, { fontFamily: '"Roboto Condensed"' });
        this.key = this.input.keyboard.addKey('W')

    }
    update () {
        if (this.key.isDown) {
            this.scene.scene.start('enterName', {});
        }
    }
}
