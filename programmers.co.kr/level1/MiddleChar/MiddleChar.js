function solution(s) {
  let mid = parseInt(s.length / 2);
  if (s.length % 2 == 0) {
    return s[mid - 1] + s[mid];
  } else {
    return s[mid];
  }
}

console.log(solution('abcde'));   // c
console.log(solution('qwer'));    // we