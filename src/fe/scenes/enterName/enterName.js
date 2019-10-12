
import Phaser from 'phaser';
import introBG from 'Assets/img/utils/bg/Intro_Screen_background.png'
import gamConfigJson from '../../gameConfig.json'

export default class EnterName extends Phaser.Scene {
    constructor() {
        super({key: 'enterName', active: true})
    }
    preload() {
        this.load.image('introBG', introBG);
        this.load.json('gameConfig', gamConfigJson)

    }
    create() {
        this.gameConfig = this.cache.json.get('gameConfig').gameConfig
        this.bg = this.add.image(0, 0, 'introBG');
        this.key = this.input.keyboard.addKey('W')

    }
    update () {
        if (this.key.isDown) {
            this.scene.start('mainGame', {
                gamerData: {
                    username: 'hackerman',
                    lives: 39999
                },
                gameConfig :this.gameConfig

            });
        }

    }
}
