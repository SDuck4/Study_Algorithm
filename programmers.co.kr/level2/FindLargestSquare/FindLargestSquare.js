function solution(board) {
  let xSize = board.length;
  let ySize = board[0].length;
  let max = 0;
  for (let xSeek = 0; xSeek < xSize; xSeek++) {
    for (let ySeek = 0; ySeek < ySize; ySeek++) {
      if (board[xSeek][ySeek] == 1) {
        if (xSeek == 0 || ySeek == 0) {
          if (max == 0) {
            max = 1;
          }
          continue;
        }
        board[xSeek][ySeek] = 1 + Math.min(board[xSeek - 1][ySeek], board[xSeek][ySeek - 1], board[xSeek - 1][ySeek - 1]);
        if (board[xSeek][ySeek] > max) {
          max = board[xSeek][ySeek];
        }
      }
    }
  }
  return max * max;
}

console.log(solution([[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]]));
console.log(solution([[0, 0, 1, 1], [1, 1, 1, 1]]));
console.log(solution([[0, 0, 0], [1, 0, 0], [1, 0, 0]]));