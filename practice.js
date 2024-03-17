function solution(m, arr) {
  let dp = new Array(m).fill(0);
  dp[0] = 0;

  for (let i = 1; i < arr.length; i++) {
    let score = arr[i][0];
    let time = arr[i][1];

    for (let j = time; j < m; j++) {
      if (dp[j] < dp[j - time] + score) {
        dp[j] = dp[j - time] + score;
      }
    }
  }

  return dp;
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
