// DFS로는 풀엇음 - 근데 입력값(동전종류갯수,거슬러줄 금액)이 클경우 DP사용해야함
// DP적 사고 필요함

function solution(m, coin) {
  let dp = new Array(m + 1).fill(1000);
  dp[0] = 0;

  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dp[j] = Math.min(dp[j], dp[j - coin[i]] + 1);
    }
  }

  return dp[m];
}

let arr = [1, 2, 5];

console.log(solution(15, arr));
