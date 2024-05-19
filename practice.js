function solution(n, f) {
  let dp = new Array(15).fill(0).map((a) => new Array(15).fill(0));
  let combination = [];
  let check = new Array(n).fill(false);
  let temp = new Array(n).fill(0);
  let answer = [];
  let flag = false;

  function combi(n, r) {
    if (dp[n][r] > 0) return dp[n][r];
    if (n === r || r === 0) return 1;
    else return (dp[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }

  for (let i = 0; i < n; i++) {
    combination.push(combi(n - 1, i));
  }

  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum === f) {
      answer = temp.slice();
      flag = true;
    } else {
      for (let i = 1; i <= n; i++) {
        if (!check[i]) {
          check[i] = true;
          temp[L] = i;
          DFS(L + 1, sum + combination[L] * i);
          check[i] = false;
        }
      }
    }
  }

  DFS(0, 0);

  return answer;
}

console.log(solution(4, 16));
