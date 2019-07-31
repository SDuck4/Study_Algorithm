function solution(s) {
  return s.split('')
    .map((v) => v.charCodeAt(0))
    .sort((a, b) => b - a)
    .map((v) => String.fromCharCode(v))
    .join('');
}

console.log(solution('Zbcdefg'));   // gfedcbZ