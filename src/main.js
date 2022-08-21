import Phaser from "phaser";
import { Dialog } from 'phaser3-rex-plugins/templates/ui/ui-components.js';
import TitleScreen from "./scenes/TitleScreen";
import Game from "./scenes/Game";

const config={
    width:800,
    heigth:500,
    type:Phaser.AUTO,
    backgroundColor:'#616161',
    physics:{
        default:'arcade',
        arcade:{
            gravity:{y:1}
        }
    }
}

const game = new Phaser.Game(config);

game.scene.add('titlescreen',TitleScreen)
game.scene.add('game',Game)
// game.scene.start('titlescreen')
game.scene.start('game')