var blazewarriorsstatusgame = false;
var music;

class scene1 extends Phaser.Scene{
	constructor(){
		super('introGame');
	}
	preload(){
		this.load.image('bg','assets/bg.png');
		this.load.image('start','assets/play.png');
		
	}
	create(){
		this.add.image(610, 350, 'bg').setScale(0.8);
		var timedEvent = this.time.addEvent({ delay: 1000, callback: loops, callbackScope: this, loop: true });
		var start = this.add.sprite(600, 500, 'start').setScale(0.6).setInteractive();
        function loops()
		{
			zoomOut(start, 0.6, 1.1, 0.01, 10, this);
		}

		start.on('pointerdown', function(){
			this.scene.start('playGame');
		}, this);
	}
	update(){
		
		
	}
}