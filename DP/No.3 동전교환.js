function solution(m, coin) {
  let dp = new Array(m + 1).fill(1000);
  dp[0] = 0;

  for (let c of coin) {
    for (let i = c; i <= m; i++) {
      dp[i] = Math.min(dp[i], dp[i - c] + 1);
    }
  }

  return dp[m];
}

let arr = [1, 2, 5];

console.log(solution(15, arr));
