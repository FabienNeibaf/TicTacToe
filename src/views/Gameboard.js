import { el } from '../utils';

const Gameboard = console => {
  const { game, makeMove } = console;
  const gameboard = game.board.map((move, i) =>
    el(
      'span',
      {
        onclick(e) {
          const move = makeMove(i);
          if (move) e.target.innerHTML = move;
        },
      },
      move,
    ),
  );
  console.subscribe(e => {
    if (e.type === 'winner') {
      game.winpos.forEach(i => gameboard[i - 1].classList.add('winpos'));
    } else if (e.type === 'replay' || e.type === 'restart') {
      gameboard.forEach(child => (child.innerHTML = ''));
      gameboard.forEach(child => child.classList.remove('winpos'));
    }
  });
  return el('div', { id: 'board' }, gameboard);
};

export default Gameboard;
