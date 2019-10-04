import Quit from '../views/Quit';
import Home from '../views/Home';
import Game from '../models/Game';
import Scene from '../views/Scene';
import { extract, mount } from '../utils';
import PlayersForm from '../views/PlayersForm';

const Console = (() => {
  let game;
  let form;
  const handlers = [];
  const root = document.getElementById('root');
  const fire = event => {
    handlers.forEach(handler => handler(event));
  };
  const replay = () => {
    game.replay();
    fire({ type: 'replay' });
  };
  const restart = () => {
    game.restart();
    fire({ type: 'restart' });
  };
  const makeMove = i => {
    const move = game.nextMove(i);
    const winner = game.winner;
    if (winner) {
      fire({ type: 'winner' });
    } else {
      fire({ type: 'move' });
    }
    return move;
  };
  const subscribe = handler => handlers.push(handler);
  return {
    replay,
    restart,
    makeMove,
    subscribe,
    get game() {
      return game;
    },
    quit() {
      root.appendChild(Quit(this));
    },
    start() {
      mount(root, Home(this));
    },
    initGame() {
      form = PlayersForm(this);
      mount(root, form);
    },
    startGame() {
      const { player1, player2 } = extract(['player1', 'player2'], form);
      game = Game(player1, player2);
      mount(root, Scene(this));
    },
  };
})();

export default Console;
