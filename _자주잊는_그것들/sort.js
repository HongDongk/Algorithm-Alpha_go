//🔥sort 함수 원리🔥

// ✅ sort()안의 함수가 0보다 큰 경우 b가 먼저 온다.

// ✅ sort()안의 함수가 0을 반환하면 a와 b를 서로 변경하지 않는다.

// ✅ sort()안의 함수가 0보다 작은 경우 a가 먼저 온다.

// 오름차순 정렬
arr.sort((a, b) => {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
});

arr.sort((a, b) => a - b);
