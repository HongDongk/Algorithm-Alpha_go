// 중복 되는지 check하는 배열 사용(외운다.)

function solution(m, arr) {
  let answer = [];
  let ch = new Array(arr.length).fill(false);
  let temp = new Array(m).fill(0);

  function DFS(L) {
    if (L === m) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (!ch[i]) {
          ch[i] = true;
          temp[L] = arr[i];
          DFS(L + 1);
          ch[i] = false;
        }
      }
    }
  }

  DFS(0);
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
