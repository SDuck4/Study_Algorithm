function calcBudgets(budgets, limit) {
  let sum = 0;
  for (let i in budgets) {
    let budget = budgets[i];
    if (budget > limit) {
      sum += limit;
    } else {
      sum += budget;
    }
  }
  return sum;
}

function binarySearch(budgets, M, start, end) {
  let mid = parseInt((start + end) / 2);
  if (mid == start || mid == end) {
    let startSum = calcBudgets(budgets, start);
    let endSum = calcBudgets(budgets, end);
    return endSum < M ? end : start;
  }
  let sum = calcBudgets(budgets, mid);
  console.log(mid, sum);
  if (sum < M) {
    return binarySearch(budgets, M, mid, end);
  } else {
    return binarySearch(budgets, M, start, mid);
  }
}

function solution(budgets, M) {
  let max = budgets.sort()[budgets.length - 1];
  let mean = parseInt(M / budgets.length);
  return binarySearch(budgets, M, mean, max);
}

console.log(solution([120, 110, 140, 150], 485));   // 127