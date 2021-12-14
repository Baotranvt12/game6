var blazewarriorsstatusgame = false;
var music;

class scene3 extends Phaser.Scene{
	constructor(){
		super('nextGame1');
	}
	preload(){
		
		this.load.image('k2','assets/k2.png');
		this.load.image('input','assets/input.png');
		this.load.image('check', 'assets/check.png');
		this.load.image('k2d1', 'assets/k2d1.png');
		this.load.image('k2d2', 'assets/k2d2.png');
		this.load.image('k2d3', 'assets/k2d3.png');
		this.load.image('k2d4', 'assets/k2d4.png');
	}
	create(){
	
		this.add.image(610, 350, 'k2');
		this.add.image(600, 100, 'k2d1').setScale(0.9);
		this.add.image(600, 150, 'k2d2').setScale(0.9);
		this.add.image(600, 200, 'k2d3').setScale(0.9);
		this.add.image(600, 250, 'k2d4').setScale(0.9);
		this.add.image(620, 620, "input");
		
		this.add.image(1090, 620, "check");
	}
	update(){
		
		
	}
}