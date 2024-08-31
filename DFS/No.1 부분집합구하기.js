function solution(n) {
  let check = new Array(n + 1).fill(false);

  function DFS(L) {
    if (L === n + 1) {
      let temp = '';
      for (let i = 1; i <= n; i++) {
        if (check[i]) temp += i + ' ';
      }
      if (temp.length > 0) console.log(temp.trim()); // 공집합 제외, trim() : 문자열 시작,끝의 여백제거
    } else {
      check[L] = true;
      DFS(L + 1);
      check[L] = false;
      DFS(L + 1);
    }
  }

  DFS(1);
  return '정답!';
}

console.log(solution(3));
