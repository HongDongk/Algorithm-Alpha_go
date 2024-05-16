function solution(arr) {
  let answer = 'NO';
  let flag = false;
  let total = arr.reduce((a, b) => a + b, 0);

  function DFS(L, sum) {
    if (L === arr.length) {
      console.log(sum);
      if (total - sum === sum) {
        answer = 'YES';
        flag = true;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
