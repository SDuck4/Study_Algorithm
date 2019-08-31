function solution(s) {
  s = s.split(' ').map(v => parseInt(v)).sort((a, b) => a - b);
  return `${s[0]} ${s[s.length - 1]}`;
}

console.log(solution('1 2 3 4'));       // 1 4
console.log(solution('-1 -2 -3 -4'));   // -4 -1
console.log(solution('-1 -1'));         // -1 -1