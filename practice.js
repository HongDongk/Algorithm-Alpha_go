// (조합의 경우의 수 * 순열의 원소)의 합이 가장 아래값과 같다면 그 경우가 답이다.

function solution(n, f) {
  let combi = [];
  let dp = new Array(15).fill(0).map((a) => new Array(15).fill(0));
  function DFS(n, r) {
    if (n === r || r === 0) return 1;
    else {
      return DFS(n - 1, r - 1) + DFS(n - 1, r);
    }
  }

  for (let i = 0; i < n; i++) {
    combi[i] = DFS(n - 1, i);
  }

  let answer;
  let flag = false;
  let temp = [];
  let check = new Array(n).fill(false);
  function DFF(L) {
    if (flag) return;
    if (L === n) {
      let sum = 0;
      for (let i = 0; i < n; i++) {
        sum += combi[i] * temp.slice()[i];
      }
      if (sum === f) {
        flag = true;
        answer = temp.slice();
      }
    } else {
      for (let i = 1; i <= n; i++) {
        if (!check[i]) {
          temp[L] = i;
          check[i] = true;
          DFF(L + 1);
          check[i] = false;
        }
      }
    }
  }

  DFF(0);

  return answer;
}

console.log(solution(4, 16));
