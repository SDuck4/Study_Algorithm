function calcBudgets(budgets, limit) {
  let sum = 0;
  for (let i in budgets) {
    let budget = budgets[i];
    if (budget < limit) {
      sum += budget;
    } else {
      sum += limit;
    }
  }
  return sum;
}

function binarySearch(budgets, M, start, end) {
  let mid = parseInt((start + end) / 2);
  if (mid == start || mid == end) {
    let endSum = calcBudgets(budgets, end);
    if (endSum == M) {
      return end;
    } else if (endSum < M) {
      return binarySearch(budgets, M, end, end + 1);
    } else {
      return start;
    }
  }
  let sum = calcBudgets(budgets, mid);
  if (sum < M) {
    return binarySearch(budgets, M, mid, end);
  } else {
    return binarySearch(budgets, M, start, mid);
  }
}

function solution(budgets, M) {
  let max = budgets.reduce((p, c) => c < p ? p : c, 0);
  let mean = parseInt(M / budgets.length);
  if (calcBudgets(budgets, max) <= M) {
    return max;
  }
  return binarySearch(budgets, M, mean, max);
}

console.log(solution([120, 110, 140, 150], 485));   // 127
console.log(solution([5, 5, 5, 15, 25], 50));       // 20