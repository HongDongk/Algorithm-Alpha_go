// (조합의 경우의 수 * 순열의 원소)의 합이 가장 아래값과 같다면 그 경우가 답이다.

function solution(n, f) {
  let answer = [];
  let dp = new Array(15).fill(0).map((a) => new Array(15).fill(0));
  let combination = new Array(n).fill(0);

  let temp = new Array(n).fill(0);
  let check = new Array(n).fill(false);
  let flag = false; // 사전순 첫번째 값 판별

  // 조합수 구하기
  function combi(n, r) {
    if (dp[n][r] > 0) return dp[n][r];
    if (n === r || r === 0) return 1;
    else return (dp[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }

  // 3C0, 3C1, 3C2, 3C3 구하기해서 저장
  for (let i = 0; i < n; i++) {
    combination[i] = combi(n - 1, i);
  }

  // 순열 구하기, 합이 16과 같은지 확인
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
