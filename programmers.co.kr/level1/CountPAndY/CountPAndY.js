function solution(s){
  let countP = 0;
  let countY = 0;
  s = s.toUpperCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 'P') {
      countP++;
    } else if (s[i] == 'Y') {
      countY++;
    }
  }
  return countP == countY;
}

console.log(solution('pPoooyY'));   // true
console.log(solution('Pyy'));       // false