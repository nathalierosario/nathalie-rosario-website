export type BoardKey = "B" | "I" | "N" | "G" | "O";

export type BoardState = {
  [key: string]: boolean[];
};

export interface GameState {
  boardState: BoardState;
  gameStarted: boolean;
  availableNums: Set<number>;
  currentNum: number;
  previousCalls: number[];
  instructions: string[];
}

export interface Action {
  type: string;
  payload?: any;
}
