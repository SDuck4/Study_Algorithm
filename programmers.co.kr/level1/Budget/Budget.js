function solution(d, budget) {
  let i, sum = 0;
  d.sort((a, b) => a - b);
  for (i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum > budget) {
      break;
    }
  }
  return i;
}

console.log(solution([1, 3, 2, 5, 4], 9));    // 3
console.log(solution([2, 2, 3, 3], 10));      // 4