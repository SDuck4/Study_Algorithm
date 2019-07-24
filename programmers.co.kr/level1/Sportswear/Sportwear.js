function solution(n, lost, reserve) {
  let answer = n - lost.length;
  let reserveQueue = [];
  for (let i in lost) {
    let size = lost[i];
    let checkReserve = reserve.indexOf(size)
    if (checkReserve > -1) {
      reserve.splice(checkReserve, 1);
      answer++;
      continue;
    }
    let small = reserve.indexOf(size - 1);
    let big = reserve.indexOf(size + 1);
    if (small == -1 && big == -1) {
      continue;
    } else if (small > -1 && big > -1) {
      reserveQueue.push(size);
    } else {
      reserveQueue.unshift(size);
    }
  }
  for (let i in reserveQueue) {
    let size = reserveQueue[i];
    let small = reserve.indexOf(size - 1);
    let big = reserve.indexOf(size + 1);
    if (small > -1) {
      reserve.splice(small, 1);
      answer++;
      continue;
    }
    if (big > -1) {
      reserve.splice(big, 1);
      answer++;
    }
  }
  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));