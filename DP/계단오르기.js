// 또 규칙 찾으면 피보나치였다.. 풀긴함
// DP는 큰 문제를 작은문제로 쪼갰을 때 짤랏던 문제의 결과들과 다음 작은문제의 값과 어떤 규칙을 가지고 있는지 파악하는 것이 중요!!!!!

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
