// 그리디는 정렬을 첫번째로 한다! (어떤 요소로 정렬할지 정해야한다)

function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let endtime = 0;
  for (let x of meeting) {
    if (x[0] >= endtime) {
      answer++;
      endtime = x[1];
    }
  }
  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
