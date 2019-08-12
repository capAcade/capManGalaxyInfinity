import Phaser from 'phaser';

export default class Hud {
    constructor(scene) {
        this.scene = scene

    }
    preLoad () {

    }
    create (gamerData) {
        this.scene.add.text(0, 0, 'Lives', { fontFamily: '"Roboto Condensed"' });
        this.scene.add.text(screen.width /2, 0, `Player: ${gamerData.userName}`, { fontFamily: '"Roboto Condensed"' });
        this.scene.add.text(screen.width -200, 0, 'Score', { fontFamily: '"Roboto Condensed"' });
    }

}