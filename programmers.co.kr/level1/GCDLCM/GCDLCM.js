function gcd(a, b) {
  return b ? gcd(b, a % b) : Math.abs(a);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(n, m) {
  return [gcd(n, m), lcm(n, m)]
}

console.log(solution(3, 12));   // [3, 12]
console.log(solution(2, 5));    // [1, 10]