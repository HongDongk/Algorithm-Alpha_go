function solution(n, f) {
  let answer = [];
  let ch = new Array(n + 1).fill(false);
  let temp = new Array(n).fill(0);
  let dy = new Array(20).fill(0).map(() => new Array(20).fill(0));
  let combination = [];

  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else {
      return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
    }
  }

  for (let i = 0; i < n; i++) {
    combination[i] = combi(n - 1, i);
  }

  function DFS(L) {
    if (L === n) {
      for (let i = 0; i < n; i++) {
        temp.slice()[i] = temp.slice()[i] * combination[i];
      }
      answer.push(temp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === false) {
          ch[i] = true;
          temp[L] = i;
          DFS(L + 1);
          ch[i] = false;
        }
      }
    }
  }

  DFS(0);

  return answer;
}

console.log(solution(4, 16));
