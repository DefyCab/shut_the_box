const state = {
  gameCode: "D48VZ7",
  roomCode: "EDZH7Z",
  updateReason: "DiceRolled",
  currentDiceRoll: {
    die1: 1,
    die2: 2,
    diceCount: 2,
    total: 3,
  },
  validMoves: [[3], [1, 2]],
  rules: {
    isMultiplayer: false,
    hasTurnTimer: false,
    diceRollTimeSeconds: null,
    thinkTimeSeconds: null,
  },
  currentPlayerUserId: "c1d3a6d6-70d3-4ee5-93d0-fad6ec627542",
  currentPlayerName: "Love Bellinder",
  isStarted: true,
  isGameOver: false,
  tiedWinners: false,
  players: [
    {
      userId: "c1d3a6d6-70d3-4ee5-93d0-fad6ec627542",
      name: "Love Bellinder",
      isActive: true,
      isCurrentPlayer: true,
      isHost: true,
      hasWon: false,
      hasLost: false,
      hasLeft: false,
      exitReason: null,
      currentScore: 45,
      turnDeadlineUtc: null,
      openNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
  ],
  spectators: [],
};

export default state