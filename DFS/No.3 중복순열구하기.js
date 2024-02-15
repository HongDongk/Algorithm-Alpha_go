function solution(n, m) {
  let answer = [];
  let tmp = new Array(m).fill(0);

  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice()); // 얕은복사 방지
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);
  return answer;
}

console.log(solution(3, 2));
