import { csvals } from '../utils';
import Player from './Player';

const Game = (player1, player2) => {
  let moves = 0;
  let status = '';
  let winner = null;
  let winpos = null;
  let board = Array(9).fill(null);
  const WINPOS = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ];
  const players = [Player(1, player1), Player(2, player2)];
  const checkWinner = () => {
    const [player1, player2] = players;
    // eslint-disable-next-line no-restricted-syntax
    for (const pos of WINPOS) {
      if (csvals(pos, player1.moves)) {
        winpos = pos;
        return player1;
      }
      if (csvals(pos, player2.moves)) {
        winpos = pos;
        return player2;
      }
    }
    return null;
  };
  const nextPlayer = () => (moves % 2 === 0 ? players[0] : players[1]);
  const nextMove = i => {
    if (winner) return null;
    let move = board[i];
    if (move) return move;
    nextPlayer().addMove(i);
    move = moves % 2 === 0 ? 'X' : 'O';
    moves += 1;
    winner = checkWinner();
    if (winner) {
      winner.score += 1;
      status = `${winner.name} win the game`;
    } else if (moves === 9) {
      status = 'drawn game';
    } else {
      status = `Next Player: ${nextPlayer().name}`;
    }
    board[i] = move;
    return move;
  };
  const replay = () => {
    moves = 0;
    winner = null;
    board = Array(9).fill(null);
    status = `Next Player: ${nextPlayer().name}`;
    players.forEach(player => {
      player.moves = [];
    });
  };
  const restart = () => {
    replay();
    players.forEach(player => {
      player.score = 0;
    });
  };
  return {
    replay,
    restart,
    nextMove,
    nextPlayer,
    get board() {
      return board;
    },
    get status() {
      return status;
    },
    get winner() {
      return winner;
    },
    get winpos() {
      return winpos;
    },
    get players() {
      return players;
    },
  };
};

export default Game;
