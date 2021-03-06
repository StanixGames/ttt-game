import CellValue from '../types/CellValue';

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

interface GameStatus {
  gameEnd: boolean,
  winPattern: number[],
}

export function checkGameStatus(cells: CellValue[]): GameStatus {
  for (let i = 0; i < WIN_PATTERNS.length; i += 1) {
    const p = WIN_PATTERNS[i];

    if (cells[p[0]] !== CellValue.empty
      && cells[p[0]] === cells[p[1]]
      && cells[p[1]] === cells[p[2]]
    ) {
      return {
        gameEnd: true,
        winPattern: p,
      };
    }
  }

  const filledCells = cells.filter(
    (cell) => cell !== CellValue.empty
  );

  if (filledCells.length === cells.length) {
    return { gameEnd: true, winPattern: [] };
  }

  return { gameEnd: false, winPattern: [] };
}

export function generateEmptyCells() {
  return new Array(9).fill(CellValue.empty);
}