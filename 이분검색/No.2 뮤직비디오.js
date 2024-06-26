function solution(m, songs) {
  let start = Math.max(...songs);
  let last = songs.reduce((a, b) => a + b, 0);

  function count(songs, capacity) {
    let cnt = 1;
    let sum = 0;
    for (let x of songs) {
      if (sum + x > capacity) {
        cnt++;
        sum = x;
      } else {
        sum += x;
      }
    }

    return cnt;
  }

  while (start <= last) {
    let mid = parseInt((start + last) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      last = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
