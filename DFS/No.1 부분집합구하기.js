// check배열 활용

function solution(n) {
  let answer = [];
  let ch = new Array(n + 1).fill(0);

  function DFS(L) {
    // 마지막 숫자일경우
    if (L === n + 1) {
      let tmp = '';
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + ' ';
      }
      if (tmp.length > 0) answer.push(tmp.trim()); // 공집합 제외, trim() : 문자열 시작,끝의 여백제거
    }
    // 마지막 숫자가 아닐경우
    else {
      ch[L] = 1;
      DFS(L + 1);
      ch[L] = 0;
      DFS(L + 1);
    }
  }

  DFS(1);
  return answer;
}

console.log(solution(3));
