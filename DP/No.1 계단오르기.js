// 문제가 너무 클 때 문제를 작은문제로 쪼갠다
// 관계식 규칙 찾는다

function solution(n) {
  let dp = [];
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[n - 1];
}

console.log(solution(7));
