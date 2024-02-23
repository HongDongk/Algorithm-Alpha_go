// 노드의 개수가 많을 때!! - 메모리 낭비를 줄이기 위해 사용
// 각 행마다 방문할수있는 노드 저장

function solution(n, arr) {
  let answer = 0;
  let list = new Array(n + 1).fill(0).map((a) => []);
  let ch = new Array(n + 1).fill(false);
  ch[1] = true;
  let path = [1];

  for (let [a, b] of arr) {
    list[a].push(b);
  }

  function DFS(L) {
    if (L === n) {
      answer++;
      console.log(path);
    } else {
      for (let i = 0; i < list[L].length; i++) {
        if (!ch[list[L][i]]) {
          ch[list[L][i]] = true;
          path.push(list[L][i]);
          DFS(list[L][i]);
          ch[list[L][i]] = false;
          path.pop();
        }
      }
    }
  }

  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
