const create = {
  room: {
    createdAtUtc: "2026-09-22T20:50:18.0593022+00:00",
    finishedAtUtc: null,
    id: "5742d363-62dd-45ca-8ad1-5f2a231f64fa",
    isLocked: true,
    maxPlayers: 1,
    minPlayers: 1,
    name: "defys nya nya singelrum",
    players: [
      {
        isHost: true,
        joinedAtUtc: "2026-09-22T20:50:18.0593034+00:00",
        name: "Love Bellinder",
        userId: "c1d3a6d6-70d3-4ee5-93d0-fad6ec627542",
      },
    ],
    roomCode: "255HSL",
    startedAtUtc: "2026-09-22T20:50:18.0627336+00:00",
    status: "Playing",
  },
  state: {
    currentDiceRoll: null,
    currentPlayerName: "Love Bellinder",
    currentPlayerUserId: "c1d3a6d6-70d3-4ee5-93d0-fad6ec627542",
    gameCode: "T532BU",
    isGameOver: false,
    isStarted: true,
    players: [
      {
        currentScore: 45,
        exitReason: null,
        hasLeft: false,
        hasLost: false,
        hasWon: false,
        isActive: true,
        isCurrentPlayer: true,
        isHost: true,
        name: "Love Bellinder",
        openNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        turnDeadlineUtc: null,
        userId: "c1d3a6d6-70d3-4ee5-93d0-fad6ec627542",
      },
    ],
    roomCode: "255HSL",
    rules: {
      isMultiplayer: false,
      hasTurnTimer: false,
      diceRollTimeSeconds: null,
      thinkTimeSeconds: null,
    },
    spectators: [],
    tiedWinners: false,
    updateReason: "GameStarted",
    validMoves: [],
  },
};

export default create;
