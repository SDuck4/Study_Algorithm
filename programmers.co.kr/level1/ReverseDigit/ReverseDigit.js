function solution(n) {
  return (n + '').split('')
    .reverse()
    .map(v => parseInt(v));
}

console.log(solution(12345));   // [5, 4, 3, 2, 1]