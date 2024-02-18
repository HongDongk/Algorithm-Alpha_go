// 메모이제이션 사용해서 풀기
// 확실히 시간단축!

function solution(n, r) {
  let dy = new Array(35).fill(0).map(() => new Array(35).fill(0));

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }

  DFS(n, r);

  return dy[n][r];
}

console.log(solution(33, 19));
