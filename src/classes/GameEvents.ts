export enum GAME_EVENTS {
	buttonClick = "buttonClick",
	gameStarted = "gameStarted",
	gameOver = "gameOver",

	//Crafting Events
	c_changeSelection = "c_changeSelection",
}

export default class GameEventEmitter extends Phaser.Events.EventEmitter {
	private static instance: GameEventEmitter;

	private constructor() {
		super();
	}

	public static getInstance(): GameEventEmitter {
		if (!GameEventEmitter.instance) {
			GameEventEmitter.instance = new GameEventEmitter();
		}
		return GameEventEmitter.instance;
	}

	clearEvents() {
		for (let key in GAME_EVENTS) {
			console.log("clearing event :" + key);
			this.removeAllListeners(key);
		}
	}

	clearEvent(key: string) {
		for (let event in GAME_EVENTS) {
			if (event === key) {
				this.removeAllListeners(event);
			}
		}
	}
}
