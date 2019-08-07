function solution(n) {
  n = (n + '').split('');
  return n.reduce((p, c) => p + parseInt(c), 0);
}

console.log(solution(123));   // 6
console.log(solution(987));   // 24