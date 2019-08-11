function solution(x) {
  let sum = (x + '').split('')
    .reduce((p, c) => p + parseInt(c), 0);
  return x % sum === 0;
}

console.log(solution(10));    // true
console.log(solution(12));    // true
console.log(solution(11));    // false
console.log(solution(13));    // false