import Brand from './Brand';
import Footer from './Footer';
import { el } from '../utils';

export const PlayersForm = console => {
  return el('section', { id: 'form' }, [
    Brand(),
    el(
      'form',
      {
        onsubmit(e) {
          e.preventDefault();
          console.startGame();
        },
      },
      [
        el('p', { class: 'row' }, [
          el('label', null, 'Player I'),
          el('input', { type: 'text', name: 'player1', autocomplete: 'off' }),
        ]),
        el('div', { class: 'separator' }),
        el('p', { class: 'row' }, [
          el('label', null, 'Player II'),
          el('input', { type: 'text', name: 'player2', autocomplete: 'off' }),
        ]),
        el('div', { class: 'separator' }),
        el('input', { type: 'submit', value: 'GO' }),
      ],
    ),
    Footer(),
  ]);
};

export default PlayersForm;
