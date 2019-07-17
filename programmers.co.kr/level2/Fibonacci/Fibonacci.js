function solution(n) {
  let numN_2 = 0;                               // n-2항
  let numN_1 = 1;                               // n-1항
  let numN = 1;                                 // n항
  for (let i = 2; i < n; i++) {
    numN_2 = numN_1;                            // 각 항의 값을 이전 항으로 이동
    numN_1 = numN;
    numN = numN_2 + numN_1;                     // 현재 항의 값을 계산
    if (numN > 1234567) numN = numN % 1234567;  // 현재 항이 1234567 보다 큰 경우, 1234567으로 나눈 나머지를 현재 항으로 함
  }
  return numN;
}

console.log(solution(0));   // 0
console.log(solution(1));   // 1
console.log(solution(2));   // 1
console.log(solution(3));   // 2
console.log(solution(4));   // 3
console.log(solution(5));   // 5
console.log(solution(40));  // 1099661