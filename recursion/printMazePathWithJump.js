export function printMazePathWithJump(
  sourceRow,
  sourceCol,
  destinationRow,
  destinationCol,
  result
) {
  // if (sourceRow > destinationRow && sourceCol > destinationCol) return;
  // if (sourceRow > destinationRow) return;
  // if (sourceCol > destinationCol) return;
  if (sourceRow === destinationRow && sourceCol === destinationCol) {
    console.log(result);
    return;
  }

  for (let i = 1; i <= destinationCol - sourceCol; i++) {
    printMazePathWithJump(
      sourceRow,
      sourceCol + i,
      destinationRow,
      destinationCol,
      result + "H" + i
    );
  }

  for (let i = 1; i <= destinationRow - sourceRow; i++) {
    printMazePathWithJump(
      sourceRow + i,
      sourceCol,
      destinationRow,
      destinationCol,
      result + "V" + i
    );
  }

  for (
    let i = 1;
    i <= destinationRow - sourceRow && i <= destinationCol - sourceCol;
    i++
  ) {
    printMazePathWithJump(
      sourceRow + i,
      sourceCol + i,
      destinationRow,
      destinationCol,
      result + "D" + i
    );
  }
}
