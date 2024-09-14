export function floodFill(maze, row, col, path, visited) {
  if (
    row < 0 ||
    col < 0 ||
    row === maze.length ||
    col === maze[0].length ||
    maze[row][col] === 1 ||
    visited[row][col] === true
  ) {
    return;
  }

  if (row === maze.length - 1 && col === maze[0].length - 1) {
    console.log(path);
    return;
  }

  visited[row][col] = true;

  floodFill(maze, row - 1, col, path + "T", visited); // top
  floodFill(maze, row, col - 1, path + "L", visited); // left
  floodFill(maze, row + 1, col, path + "D", visited); // down
  floodFill(maze, row, col + 1, path + "R", visited); // right

  visited[row][col] = false;
}
