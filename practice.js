function solution(s, e) {
  let answer = 0;
  let queue = [s];
  let check = new Array(10001).fill(false);
  check[s] = true;

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      for (let nx of [x + 1, x - 1, x + 5]) {
        if (nx === e) return answer + 1;
        if (nx > 0 && nx <= 10000 && !check[nx]) {
          check[nx] = true;
          queue.push(nx);
        }
      }
    }
    answer++;
  }

  return answer;
}

console.log(solution(5, 14));
