function solution(n, m) {
  let temp = [];
  function DFS(L) {
    if (L === m) {
      console.log(temp.slice());
      return;
    } else {
      for (let i = 1; i <= n; i++) {
        temp[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);
}

console.log(solution(3, 2));
