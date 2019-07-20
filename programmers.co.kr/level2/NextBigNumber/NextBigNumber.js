function countBinary1(n) {
  return n.toString(2).split('').reduce((p, c) => c == '1' ? p + 1 : p, 0);
}

function solution(n) {
  let countN = countBinary1(n);
  while (true) {
    n++;
    let countNext = countBinary1(n)
    if (countN == countNext) break;
  }
  return n;
}

console.log(solution(78));    // 83
console.log(solution(15));    // 23