function solution(arrangement) {
  let answer = 0;
  let bars = [];
  arrangement = arrangement.replace(/\(\)/g, '|');
  for (let i = 0; i < arrangement.length; i++) {
    if (arrangement[i] === '(') {
      bars.push(1);
    } else if (arrangement[i] === ')') {
      answer += bars.pop();
    } else {
      bars = bars.map(v => v + 1);
    }
  }
  return answer;
}

console.log(solution('()(((()())(())()))(())'));    // 17