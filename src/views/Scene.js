import Brand from './Brand';
import Status from './Status';
import Footer from './Footer';
import { el } from '../utils';
import Gameboard from './Gameboard';

const Player = (role, console) => {
  const player = console.game.players[role - 1];
  const score = el('p', null, player.score);
  console.subscribe(e => {
    if (e.type === 'winner' || e.type === 'restart') {
      score.innerHTML = player.score;
    }
  });
  return el('div', { class: 'player' }, [
    el('h3', null, `${player.role === 1 ? 'X' : 'O'}: ${player.name}`),
    score,
  ]);
};

const Main = console => {
  return el('main', null, [
    el('aside', { class: 'left' }, [
      el(
        'button',
        {
          onclick() {
            console.restart();
          },
        },
        'Restart',
      ),
      el(
        'button',
        {
          onclick() {
            console.replay();
          },
        },
        'Play again',
      ),
      el(
        'button',
        {
          onclick() {
            console.quit();
          },
        },
        'Quit',
      ),
    ]),
    el('main', { class: 'middle' }, [Status(console), Gameboard(console)]),
    el('aside', { class: 'right' }, [Player(1, console), Player(2, console)]),
  ]);
};

export const Scene = console => {
  return el('section', { id: 'scene' }, [Brand(), Main(console), Footer()]);
};

export default Scene;
