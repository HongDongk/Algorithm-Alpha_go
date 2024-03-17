function solution(arr) {
  let dp = [];
  dp[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
  }

  return Math.max(...dp);
}

let arr = [2, 7, 5, 8, 6, 4, 7, 12, 3];
console.log(solution(arr));
