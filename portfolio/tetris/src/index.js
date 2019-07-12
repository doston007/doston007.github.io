import Game from './game';
import View from './view';

const root = document.querySelector('#root');

const game = new Game();
const view = new View(root, 480, 640, 20, 10);

document.addEventListener('keydown', event => {
	switch (event.keyCode) {
		case 37: // LEFT ARROW
			game.movePieceLeft();
			view.render(game.getState());
			break;
		case 38: // UP ARROW
			game.rotatePiece();
			view.render(game.getState());
			break;
		case 39: // RIGHT ARROW
			game.movePieceRight();
			view.render(game.getState());
			break;
		case 40: // DOWN ARROW
			game.movePieceDown();
			view.render(game.getState());
			break;
	}
});