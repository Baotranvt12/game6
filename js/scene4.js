var blazewarriorsstatusgame = false;
var music;

class scene4 extends Phaser.Scene{
	constructor(){
		super('nextGame2');
	}
	preload(){
		
		this.load.image('k3','assets/k3.png');
		this.load.image('input','assets/input.png');
		this.load.image('check', 'assets/check.png');
		this.load.image('k3d1', 'assets/k3d1.png');
		this.load.image('k3d2', 'assets/k3d2.png');
		this.load.image('k3d3', 'assets/k3d3.png');
		this.load.image('k3d4', 'assets/k3d4.png');
	}
	create(){
	
		this.add.image(610, 350, 'k3');
		this.add.image(600, 100, 'k3d1').setScale(0.9);
		this.add.image(600, 150, 'k3d2').setScale(0.9);
		this.add.image(600, 200, 'k3d3').setScale(0.9);
		this.add.image(600, 250, 'k3d4').setScale(0.9);
		this.add.image(620, 620, "input");
		this.add.image(1090, 620, "check");
	}
	update(){
		
		
	}
}