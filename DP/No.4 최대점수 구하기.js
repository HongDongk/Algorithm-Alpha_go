// 냅색 알고리즘 반대로 활용하기

function solution(m, arr) {
  let dp = new Array(m + 1).fill(0);

  for (let [score, time] of arr) {
    for (let i = m; i >= time; i--) {
      dp[i] = Math.max(dp[i - time] + score, dp[i]);
    }
  }

  return dp[m];
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
