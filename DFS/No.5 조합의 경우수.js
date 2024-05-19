// 메모이제이션 사용(DP) + DFS

function solution(n, r) {
  let dp = new Array(35).fill(0).map(() => new Array(35).fill(0));

  function DFS(n, r) {
    if (dp[n][r] > 0) return dp[n][r];
    if (n === r || r === 0) return 1;
    else return (dp[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }

  DFS(n, r);

  return dp[n][r];
}

console.log(solution(33, 19));
