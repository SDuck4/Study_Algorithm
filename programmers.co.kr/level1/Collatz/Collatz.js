function solution(num) {
  let count = 0;                            // 작업 카운트
  while (count < 500) {                     // 500번 반복하면 종료
    if (num == 1) return count;             // 종료 조건
    else if (num % 2 == 0) num = num / 2;   // 짝수일 때 작업
    else num = num * 3 + 1;                 // 홀수일 때 작업
    count += 1;                             // 작업 카운트 증가
  }
  return -1;                                // 500번 반복해도 1이 되지 않은 경우
}

console.log(solution(6));       // 8
console.log(solution(16));      // 4
console.log(solution(626331));  // -1