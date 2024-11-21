// 냅색 알고리즘 반대로 활용하기

function solution(m, arr) {
  let dp = new Array(m + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    let ps = arr[i][0];
    let pt = arr[i][1];
    for (let j = m; j >= pt; j--) {
      dp[j] = Math.max(dp[j], dp[j - pt] + ps);
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
