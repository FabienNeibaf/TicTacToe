const Player = (role, name) => {
  return {
    name,
    role,
    score: 0,
    moves: [],
    addMove(i) {
      this.moves.push(i + 1);
    },
  };
};

export default Player;
