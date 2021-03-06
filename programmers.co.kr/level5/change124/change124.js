/*
    https://programmers.co.kr/learn/challenge_codes/48
    1,2,4 세 개의 숫자만 쓰는 124나라가 있습니다.
    124나라에서 사용하는 숫자는 다음과 같이 변환됩니다.
    10진법의 1 → 1
    10진법의 2 → 2
    10진법의 3 → 4
    10진법의 4 → 11
    10진법의 5 → 12
    10진법의 6 → 14
    10진법의 7 → 21
    10진법의 수 N이 입력될 때,
    124나라에서 쓰는 숫자로 변환하여 반환해주는 change124 함수를 완성해 보세요.
    예를 들어 N = 10이면 “41”를 반환해주면 됩니다.
    리턴 타입은 문자열입니다.
*/

// 124로 숫자 표현
function change124(n) {
    var answer = '';                        // 답, 문자열
    var arrNum = ['1', '2', '4'];           // 표현에 사용되는 숫자들
    do {
        n--;                                // 0~2 범위를 1~3 범위로 바꾸기 위해
        var remain = n % 3;                 // 3진수 변환, 나머지 구하기
        n = parseInt(n / 3);                // 나누기 몫은 다시 n으로
        answer = arrNum[remain] + answer;   // 답의 앞에 arrNum을 참조하여 숫자 추가
    } while (n > 0)                         // n이 0보다 클 때가지 반복
    return answer;
}

console.log(change124(10));