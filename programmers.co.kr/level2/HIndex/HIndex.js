function isHIndex(citations, hIndex) {
  let count = citations.reduce((p, c) => c >= hIndex ? p + 1 : p, 0);
  return count >= hIndex;
}

function solution(citations) {
  let hIndex = 0;
  let prevHIndex = 0;
  while (isHIndex(citations, hIndex)) {
    prevHIndex = hIndex;
    hIndex += 1;
  }
  return prevHIndex;
}

console.log(solution([3, 0, 6, 1, 5]));   // 3