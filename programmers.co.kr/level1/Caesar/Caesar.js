function solution(s, n) {
  let arrChar = s.split('');
  let arrCaesar = [];
  for (let i in arrChar) {
    let char = arrChar[i];
    if (char === ' ') {
      arrCaesar.push(char);
      continue;
    }
    let code = char.charCodeAt(0);
    let codeCaesar = code + n;
    if (code <= 90 ? codeCaesar > 90 : codeCaesar > 122) {
      codeCaesar -= 26; 
    }
    arrCaesar.push(String.fromCharCode(codeCaesar));
  }
  return arrCaesar.join('');
}

console.log(solution('AB', 1));     // BC
console.log(solution('z', 1));      // a
console.log(solution('a B z', 4));  // e F d