function solution(n, a, b) {
  let round = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    round += 1;
  }
  return round;
}

console.log(solution(8, 4, 7));   // 3
console.log(solution(8, 7, 4));   // 3
console.log(solution(2, 1, 2));   // 1
console.log(solution(8, 2, 3));   // 2
console.log(solution(8, 1, 5));   // 3
console.log(solution(8, 1, 8));   // 3