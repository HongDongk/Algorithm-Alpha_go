function solution(arr) {
  let answer = 'NO';
  let flag = false;
  let total = arr.reduce((a, b) => a + b, 0);

  function DFS(L, sum) {
    if (flag) return; // 이미 'YES'로 답이 나오면 그뒤는 재귀를 돌 필요가 없기때문에 사용!(효율성)
    if (L === arr.length) {
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
