function solution(s, n) {
  let arrChar = s.split('');                                // 입력문자 배열
  let arrCaesar = [];                                       // 시저암호 배열
  for (let i in arrChar) {
    let char = arrChar[i];
    if (char === ' ') {                                     // 공백 처리
      arrCaesar.push(char);
      continue;
    }
    let code = char.charCodeAt(0);                          // 입력문자 캐릭터 코드 변환
    let codeCaesar = code + n;                              // n만큼 밀기
    if (code <= 90 ? codeCaesar > 90 : codeCaesar > 122) {  // 알파벳 범위 초과 체크
      codeCaesar -= 26;                                     // 알파벳 범위 초과
    }
    arrCaesar.push(String.fromCharCode(codeCaesar));        // 시저암호 캐릭터 코드 문자로 변환
  }
  return arrCaesar.join('');                                // 시저암호 배열 합쳐서 반환
}

console.log(solution('AB', 1));     // BC
console.log(solution('z', 1));      // a
console.log(solution('a B z', 4));  // e F d