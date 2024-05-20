function solution(n, k, arr, m) {
  let answer = [];
  function DFS(L, num, summ) {
    if (L === k && summ % m === 0) {
      answer.push(summ);
      return;
    } else {
      for (let i = num; i < n; i++) {
        DFS(L + 1, i + 1, summ + arr[i]);
      }
    }
  }

  DFS(0, 0, 0);

  // let temp = new Array(k).fill(0);

  // function DFS(L, num) {
  //   if (L === k) {
  //     console.log(temp);
  //   } else {
  //     for (let i = num; i < n; i++) {
  //       temp[L] = arr[i];
  //       DFS(L + 1, i + 1);
  //     }
  //   }
  // }

  // DFS(0, 0);

  return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
