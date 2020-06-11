import Phaser from 'phaser';
import TextBlink from '../game_components/TextBlink';

export default class Victory extends Phaser.Scene {
  constructor() {
    super('victory');
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    this.add
      .text(width * 0.5, height * 0.25, 'You escaped the Lich King!', {
        fontSize: 24,
        fontFamily: 'Metal Mania',
        color: '#f00',
      })
      .setOrigin(0.5);

    this.input.keyboard.once(
      'keydown-ENTER',
      () => {
        this.scene.start('intro');
      },
      this
    );
  }
}