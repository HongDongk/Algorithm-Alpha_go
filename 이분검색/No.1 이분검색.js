function solution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  let start = 0;
  let last = arr.length - 1;
  while (start <= last) {
    let mid = parseInt((start + last) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    }
    if (arr[mid] > target) {
      last = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
