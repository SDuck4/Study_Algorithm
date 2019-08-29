function solution(s){
  let count = 0;
  s = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      count += 1;
    } else {
      count -= 1;
    }
    if (count < 0) {
      return false;
    }
  }
  return count === 0;
}

console.log(solution('()()'));      // true
console.log(solution('(())()'));    // true
console.log(solution(')()('));      // false
console.log(solution('(()('));      // false