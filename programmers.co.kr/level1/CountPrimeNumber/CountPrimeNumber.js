function solution(n) {
  let prime = new Array(n + 1);
  prime[0] = false;
  prime[1] = false;
  for (let i = 2; i <= n; i++) {
    if (prime[i] == null) {
      prime[i] = true;
      let notPrime = 2 * i;
      while (notPrime <= n) {
        prime[notPrime] = false;
        notPrime += i;
      }
    }
  }
  return prime.reduce((p, c) => c ? p + 1 : p, 0);
}

console.log(solution(10));    // 4
console.log(solution(5));     // 3