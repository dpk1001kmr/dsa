export function printMazePath(
  sourceRow,
  sourceCol,
  destinationRow,
  destinationCol,
  result
) {
  if (sourceRow > destinationRow) return;
  if (sourceCol > destinationCol) return;
  if (sourceRow === destinationRow && sourceCol === destinationCol) {
    console.log(result);
    return;
  }

  printMazePath(
    sourceRow,
    sourceCol + 1,
    destinationRow,
    destinationCol,
    result + "H"
  );
  printMazePath(
    sourceRow + 1,
    sourceCol,
    destinationRow,
    destinationCol,
    result + "V"
  );
}
