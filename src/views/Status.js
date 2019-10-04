import { el } from '../utils';

const Status = console => {
  const { game, subscribe } = console;
  const status = el(`Next Player: ${game.nextPlayer().name}`);
  subscribe(() => {
    status.textContent = game.status;
  });
  return el('h2', { id: 'status' }, status);
};

export default Status;
