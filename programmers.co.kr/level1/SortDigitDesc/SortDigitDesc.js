function solution(n) {
  n = (n + '').split('')
    .sort((a, b) => b - a)
    .join('');
  return parseInt(n);
}

console.log(solution(118372));    // 873211