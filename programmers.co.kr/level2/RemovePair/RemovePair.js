function solution(s) {
  s = s.split('');
  let pairStack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let top = null;
    if (pairStack.length > 0) {
      top = pairStack[pairStack.length - 1];
    }
    if (top === char) {
      pairStack.pop();
    } else {
      pairStack.push(char);
    }
  }
  return pairStack.length === 0 ? 1 : 0;
}

console.log(solution('baabaa'));    // 1
console.log(solution('cdcd'));      // 0