function solution(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution(12));    // 28
console.log(solution(5));     // 6