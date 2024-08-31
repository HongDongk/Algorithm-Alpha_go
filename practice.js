function solution(n, m) {
  let temp = new Array(m).fill(0);

  function DFS(L, s) {
    if (L === m) {
      console.log(temp);
    } else {
      for (let i = s + 1; i <= n; i++) {
        temp[L] = i;
        DFS(L + 1, i);
      }
    }
  }

  DFS(0, 0);
}

console.log(solution(4, 2));
