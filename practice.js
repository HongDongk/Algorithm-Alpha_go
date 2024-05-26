function solution(board) {
  let answer = 0;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let queue = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        answer++;
        queue.push([i, j]);
        while (queue.length) {
          let len = queue.length;
          for (let i = 0; i < len; i++) {
            let [cx, cy] = queue.shift();
            console.log(cx, cy);
            for (let j = 0; j < 8; j++) {
              let nx = cx + dx[j];
              let ny = cy + dy[j];
              if (nx >= 0 && ny >= 0 && nx < board.length && ny < board.length && board[nx][ny] === 1) {
                board[nx][ny] = 0;
                queue.push([nx, ny]);
              }
            }
          }
        }
        console.log('BFS End');
      }
    }
  }

  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
