function solution(n, k, arr, m) {
  let temp = new Array(k).fill(0);
  let answer = [];
  function DFS(L, s) {
    if (L === k) {
      if (temp.reduce((a, b) => a + b, 0) % m === 0) {
        answer.push(temp.slice());
      }
    } else {
      for (let i = s; i < n; i++) {
        temp[L] = arr[i];
        DFS(L + 1, i + 1);
      }
    }
  }

  DFS(0, 0);
  return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
