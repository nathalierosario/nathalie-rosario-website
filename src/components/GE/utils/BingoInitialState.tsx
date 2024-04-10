import { GameState } from "../BingoTypes";

export const initialState: GameState = {
  boardState: {
    B: Array(5).fill(false),
    I: Array(5).fill(false),
    N: Array(5).fill(false),
    G: Array(5).fill(false),
    O: Array(5).fill(false),
  },
  gameStarted: false,
  availableNums: new Set(),
  currentNum: 0,
  previousCalls: [],
  instructions: [],
};
