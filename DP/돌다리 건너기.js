function solution(n) {
  let dp = [];
  dp[0] = 1;
  dp[1] = 2;
  dp[2] = 4;

  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
  }

  return dp[n];
}

console.log(solution(5));
