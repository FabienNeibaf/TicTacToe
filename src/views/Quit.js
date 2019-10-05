import { el } from '../utils';

const Quit = console => {
  const quit = el('section', { id: 'quit' });
  const confirm = el('main', null, [
    el('h3', null, 'quit game'),
    el('p', null, 'Are you sure?'),
    el('div', null, [
      el(
        'button',
        {
          onclick() {
            console.start();
          },
        },
        'YES'
      ),
      el(
        'button',
        {
          onclick() {
            quit.parentNode.removeChild(quit);
          },
        },
        'NO'
      ),
    ]),
  ]);
  quit.appendChild(confirm);
  return quit;
};

export default Quit;
