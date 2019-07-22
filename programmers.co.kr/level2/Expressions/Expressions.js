function sumRange(start, end) {
  let range = end - start + 1;
  let sum = (start + end) * Math.floor(range / 2);
  if (range % 2 == 1) {
    sum += (start + end) / 2;
  }
  return sum;
}

function solution(n) {
  let countExpressions = 1;
  let numHalf = n / 2;
  for (let start = 1; start < numHalf; start++) {
    let end = start + 1;
    while (true) {
      let sum = sumRange(start, end);
      if (sum == n) {
        countExpressions++;
        break;
      } else if (sum > n) {
        break;
      }
      end++;
    }
  }
  return countExpressions;
}

console.log(solution(15));    // 4