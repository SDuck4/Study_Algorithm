/*
    https://programmers.co.kr/learn/challenge_codes/24
    어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서
    다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
    A를 3만큼 밀면 D가 되고 z를 1만큼 밀면 a가 됩니다. 공백은 수정하지 않습니다.
    보낼 문자열 s와 얼마나 밀지 알려주는 n을 입력받아 암호문을 만드는 caesar 함수를 완성해 보세요.
    “a B z”,4를 입력받았다면 “e F d”를 리턴합니다.
*/

function caesar(s, n) {
    // n이 26이상 들어왔을 때, 순환 처리를 위해서
    n = n % 26;
    // 문자열 -> 문자배열
    var arrChar = s.split('');
    for (var i in arrChar) {
        // 문자
        var char = arrChar[i];
        if (char === ' ') {
            continue;
        }
        // 문자 -> 문자코드
        var charCode = char.charCodeAt(0);
        // 대문자 플래그
        var isCapital = char == char.toUpperCase() ? true : false;
        // 시저 암호화
        charCode += n;
        // 끝부분 순환 처리
        if (charCode > (isCapital ? 'Z'.charCodeAt(0) : 'z'.charCodeAt(0))) {
            charCode -= 26;
        }
        // 문자코드 -> 문자
        char = String.fromCharCode(charCode);
        arrChar[i] = char;
    }
    // 문자배열 -> 문자열
    return arrChar.join('');
}

console.log('s는 "a B z", n은 4인 경우: ' + caesar("a B z", 4));