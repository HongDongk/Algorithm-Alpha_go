function solution(times) {
  let answer = 0;
  let array = [];
  for (let i of times) {
    array.push([i[0], 's']);
    array.push([i[1], 'e']);
  }

  array.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    return a[0] - b[0];
  });

  let count = 0;

  for (let i of array) {
    if (i[1] === 's') count++;
    else {
      count--;
    }
    answer = Math.max(count, answer);
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
