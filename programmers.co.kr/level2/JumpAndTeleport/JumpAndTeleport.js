function solution(n) {
  if (n <= 1) {
    return n;
  }
  let half = n / 2;
  if (n % 2 === 1) {
    half = Math.floor(half);
    return solution(half) + 1;
  } else {
    return solution(half);
  }
}

console.log(solution(5));       // 2
console.log(solution(6));       // 2
console.log(solution(5000));    // 5