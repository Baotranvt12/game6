var blazewarriorsstatusgame = false;
var music;

class scene2 extends Phaser.Scene{
	constructor(){
		super('playGame');
	}
	preload(){
		
		this.load.image('k1','assets/k1.png');
		this.load.image('input','assets/input.png');
		this.load.image('check', 'assets/check.png');
		this.load.image('k1d1', 'assets/k1d1.png');
		this.load.image('k1d2', 'assets/k1d2.png');
		this.load.image('k1d3', 'assets/k1d3.png');
		this.load.image('k1d4', 'assets/k1d4.png');
		this.load.image('bee', 'assets/bee.png');
	}
	create(){
	
		this.add.image(610, 350, 'k1');
		this.add.image(600, 100, 'k1d1').setScale(0.9);
		this.add.image(600, 150, 'k1d2').setScale(0.9);
		this.add.image(600, 200, 'k1d3').setScale(0.9);
		this.add.image(600, 250, 'k1d4').setScale(0.9);
		this.add.image(620, 620, "input");
		this.add.image(750, 90, "bee");
		

		const validText = "Hoa con ngai ngu";
		const validText1 = "Ong da den roi";
		const validText2 = "Day mau di chu";
		const validText3 = "Kia ong mat troi";

		this.typedMessage = "";
		this.typedGameObject = this.add.text(230, 600, "Hello world", {
			color : "#000"
		}).setOrigin(0).setDepth(20);

		const keypressHandler = (e) => {
			this.typedMessage += e.key;
		}

		const keydownHandler = (e) => {
			if (e.key === "Backspace") {
				this.typedMessage = this.typedMessage.substr(0, this.typedMessage.length - 2)
			}
		}


		window.addEventListener("keypress", keypressHandler);

		window.addEventListener("keydown", keydownHandler);
		console.log(this.events)
		this.events.once("shutdown", () => {
			window.removeEventListener("keypress", keypressHandler);
			window.removeEventListener("keydown", keydownHandler);
		})
		
		const checkButton = this.add.image(1090, 620, "check").setInteractive();
		checkButton.on("pointerdown", () => {
			if (this.typedMessage === validText || this.typedMessage === validText1 || this.typedMessage === validText2 || this.typedMessage === validText3   ) {
				alert("It's the right text")
				
			} else {
				alert("You're wrong")
			}
		})
	}
	update(){
		this.typedGameObject.setText(this.typedMessage)
		
	}
}