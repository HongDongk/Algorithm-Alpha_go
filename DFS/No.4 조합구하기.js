// 조합은 재귀를 돌릴때 반복문에서 고른숫자 뒤에서만 선택할수있게 해야함

function solution(arr, m) {
  let answer = [];
  let temp = new Array(m).fill(0);

  function DFS(L, s) {
    if (L === m) {
      answer.push(temp.slice());
    } else {
      for (let i = s; i < arr.length; i++) {
        temp[L] = arr[i];
        DFS(L + 1, i + 1);
      }
    }
  }

  DFS(0, 0);
  return answer;
}

console.log(solution([1, 2, 3, 4], 2));
