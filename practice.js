function solution(n, arr) {
  let list = new Array(n + 1).fill(0).map((a) => new Array());
  let ch = new Array(n + 1).fill(false);
  ch[1] = true;
  let answer = 0;

  for (let [a, b] of arr) {
    list[a].push(b);
  }

  function DFS(L) {
    if (L === n) {
      answer++;
    } else {
      for (let i = 0; i < list[L].length; i++) {
        if (!ch[list[L][i]]) {
          ch[list[L][i]] = true;
          DFS(list[L][i]);
          ch[list[L][i]] = false;
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
