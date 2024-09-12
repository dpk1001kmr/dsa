export function mazePathWithJump(
  sourceRow,
  sourceCol,
  destinationRow,
  destinationCol
) {
  // if (sourceRow > destinationRow && sourceCol > destinationCol) return [];
  // if (sourceRow > destinationRow) return [];
  // if (sourceCol > destinationCol) return [];
  if (sourceRow === destinationRow && sourceCol === destinationCol) return [""];

  const allPath = [];

  for (let i = 1; i <= destinationCol - sourceCol; i++) {
    const horizontalPath = mazePathWithJump(
      sourceRow,
      sourceCol + i,
      destinationRow,
      destinationCol
    );
    for (let j = 0; j < horizontalPath.length; j++) {
      allPath.push("H" + i + horizontalPath[j]);
    }
  }

  for (let i = 1; i <= destinationRow - sourceRow; i++) {
    const verticalPath = mazePathWithJump(
      sourceRow + i,
      sourceCol,
      destinationRow,
      destinationCol
    );
    for (let j = 0; j < verticalPath.length; j++) {
      allPath.push("V" + i + verticalPath[j]);
    }
  }

  for (
    let i = 1;
    i <= destinationRow - sourceRow && i <= destinationCol - sourceCol;
    i++
  ) {
    const diagonalPath = mazePathWithJump(
      sourceRow + i,
      sourceCol + i,
      destinationRow,
      destinationCol
    );
    for (let j = 0; j < diagonalPath.length; j++) {
      allPath.push("D" + i + diagonalPath[j]);
    }
  }

  return allPath;
}
