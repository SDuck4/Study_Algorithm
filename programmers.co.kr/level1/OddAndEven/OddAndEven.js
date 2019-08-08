function solution(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(solution(3));   // Odd
console.log(solution(4));   // Even