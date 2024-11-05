function solution(s, e) {
  let ch = new Array(10001).fill(false);
  ch[s] = true;
  let queue = [s];
  let L = 0;

  while (queue.length) {
    let len = queue.length; // 주의(queue길이가 계속 변함)
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) return L + 1;
        if (nx > 0 && nx <= 10000 && !ch[nx]) {
          ch[nx] = true;
          queue.push(nx);
        }
      }
    }
    L++;
  }
}

console.log(solution(8, 3));
