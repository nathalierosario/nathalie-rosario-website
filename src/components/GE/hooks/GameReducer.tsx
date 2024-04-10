import { GameState, Action } from "../BingoTypes";
import { calculateAvailNums, getRandomNum } from "../utils/BingoUtils";
import { initialState } from "../utils/BingoInitialState";

export const TOGGLE_CELL = "TOGGLE_CELL";
export const START_GAME = "START_GAME";
export const CALL_NEXT_NUM = "CALL_NEXT_NUM";
export const CLEAR_BOARD = "CLEAR_BOARD";
export const ADD_INSTRUCTION = "ADD_INSTRUCTION";

interface ToggleCellPayload {
  letter: string;
  cellIndex: number;
}

export const GameReducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    case TOGGLE_CELL: {
      const { letter, cellIndex } = action.payload as ToggleCellPayload;
      const newLetterState = [...state.boardState[letter]];
      newLetterState[cellIndex] = !newLetterState[cellIndex];
      return {
        ...state,
        boardState: { ...state.boardState, [letter]: newLetterState },
      };
    }
    case START_GAME: {
      // This is when the user clicks the button to start the game initially
      const availableNums = calculateAvailNums(state.boardState);
      console.log("first nums" + availableNums.size);
      // Picks the first random number
      const firstNum = getRandomNum(availableNums);
      // Removes first number -> TODO: try to optimize ***
      availableNums.delete(firstNum);

      return {
        ...state,
        gameStarted: true,
        availableNums,
        currentNum: firstNum,
      };
    }
    case CALL_NEXT_NUM: {
      if (state.gameStarted && state.availableNums.size > 0) {
        console.log("next num " + state.availableNums.size);
        // Selects next random number
        const nextNum = getRandomNum(state.availableNums);
        const updatedAvailableNums = new Set(state.availableNums);
        updatedAvailableNums.delete(nextNum);

        const prevNums = [...state.previousCalls, state.currentNum];

        return {
          ...state,
          availableNums: updatedAvailableNums,
          currentNum: nextNum,
          previousCalls: prevNums,
        };
      }
      return state;
    }
    case ADD_INSTRUCTION: {
      const newInstruction = action.payload as string;
      const updatedInstructions = [...state.instructions, newInstruction];

      return {
        ...state,
        instructions: updatedInstructions,
      };
    }
    case CLEAR_BOARD: {
      return initialState;
    }

    default:
      return state;
  }
};
