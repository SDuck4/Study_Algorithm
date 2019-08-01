function solution(s) {
  if (s.length != 4 && s.length != 6) {
    return false;
  }
  s = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (s[i] != parseInt(s[i])) {
      return false;
    }
  }
  return true;
}

console.log(solution('a234'));
console.log(solution('1234'));