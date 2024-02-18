// 순열과 조합의 곱
// 주의!!! - 파스칼 삼각형은 조합의 수와 순열을 곱하는 규칙이 있다!!(걍 구현은 절대안됌) - 어려움

function solution(n, f) {
  let answer = [];
  let dy = new Array(20).fill(0).map((a) => new Array(20).fill(0)); // 1부터 10까지이므로 넉넉하게 20으로 설정
  let combination = new Array(n).fill(0);
  let temp = new Array(n).fill(0);
  let check = new Array(n + 1).fill(0);

  // 조합수 구하기
  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }

  // 3C0, 3C1, 3C2, 3C3 구하기해서 저장
  for (let i = 0; i < n; i++) {
    combination[i] = combi(n - 1, i);
  }

  // 순열 구하기 + 합이 16과 같은지 확인
  function DFS(L, sum) {
    if (answer.length >= 1) return; // 첫번째 답이 나오면 멈춤
    if (L === n && sum === f) {
      answer.push(temp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp[L] = i;
          DFS(L + 1, sum + combination[L] * i);
          check[i] = 0;
        }
      }
    }
  }

  DFS(0, 0);

  return answer;
}

console.log(solution(4, 16));
