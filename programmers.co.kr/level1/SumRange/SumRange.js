function solution(a, b) {
  if (a == b) {
    return a;
  }
  let pair = a + b;
  let repeat = (Math.abs(Math.max(a, b) - Math.min(a, b)) + 1) / 2.0;
  return pair * repeat;
}

console.log(solution(3, 5));    // 12
console.log(solution(3, 3));    // 3
console.log(solution(5, 3));    // 12