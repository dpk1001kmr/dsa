export function mazePath(sourceRow, sourceCol, destinationRow, destinationCol) {
  if (sourceRow > destinationRow) return [];
  if (sourceCol > destinationCol) return [];
  if (sourceRow === destinationRow && sourceCol === destinationCol) return [""];

  const horizontalPath = mazePath(
    sourceRow,
    sourceCol + 1,
    destinationRow,
    destinationCol
  );

  const verticalPath = mazePath(
    sourceRow + 1,
    sourceCol,
    destinationRow,
    destinationCol
  );

  const allPath = [];

  for (let i = 0; i < horizontalPath.length; i++) {
    allPath.push("H" + horizontalPath[i]);
  }

  for (let i = 0; i < verticalPath.length; i++) {
    allPath.push("V" + verticalPath[i]);
  }

  return allPath;
}
