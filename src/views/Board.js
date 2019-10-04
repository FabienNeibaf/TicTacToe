import { el } from '../utils';

const Board = console => {
  const { game, makeMove } = console;
  const childNodes = game.state.map((move, i) =>
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
      game.winpos.forEach(i => childNodes[i - 1].classList.add('winpos'));
    } else if (e.type === 'replay' || e.type === 'restart') {
      childNodes.forEach(child => (child.innerHTML = ''));
      childNodes.forEach(child => child.classList.remove('winpos'));
    }
  });
  return el('div', { id: 'board' }, childNodes);
};

export default Board;
