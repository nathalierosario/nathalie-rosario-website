import { BoardState, BoardKey } from "../BingoTypes";

type LetterRanges = {
  [key in BoardKey]: [number, number];
};

const letterRanges: LetterRanges = {
  B: [1, 15],
  I: [16, 30],
  N: [31, 45],
  G: [46, 60],
  O: [61, 75],
};

// Utility functions for bingo game
export function calculateAvailNums(boardState: BoardState): Set<number> {
  let availableNums = new Set<number>();

  Object.entries(boardState).forEach(([letter, cells]) => {
    const [start, end] = letterRanges[letter as BoardKey];

    if (cells.some((cell) => cell)) {
      for (let i = start; i <= end; i++) {
        availableNums.add(i);
      }
    }
  });

  if (availableNums.size === 0) {
    for (let i = 1; i <= 75; i++) {
      availableNums.add(i);
    }
  }

  return availableNums;
}

export function getRandomNum(set: Set<number>): number {
  const items = Array.from(set);

  return items[Math.floor(Math.random() * items.length)];
}

export const getLetterForNumber = (number: number) => {
  const letters = ["B", "I", "N", "G", "O"];
  return letters[Math.floor((number - 1) / 15)];
};
