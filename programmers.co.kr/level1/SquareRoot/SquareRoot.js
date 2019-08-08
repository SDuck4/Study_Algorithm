function solution(n) {
  let squareRoot = Math.sqrt(n);
  if (squareRoot == parseInt(squareRoot)) {
    return Math.pow(squareRoot + 1, 2);
  } else {
    return -1;
  }
}

console.log(solution(121));   // 144
console.log(solution(3));     // -1