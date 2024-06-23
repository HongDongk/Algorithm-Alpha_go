function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let start = 1;
  let last = stable[stable.length - 1] - stable[0];

  function count(stable, mid) {
    let cnt = 1;
    let temp = stable[0];
    for (let i = 1; i < stable.length; i++) {
      if (temp + mid <= stable[i]) {
        temp = stable[i];
        cnt++;
      }
    }

    return cnt;
  }

  while (start <= last) {
    let mid = parseInt((start + last) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      start = mid + 1;
    } else {
      last = mid - 1;
    }
  }

  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
