/*
    https://www.codewars.com/kata/vowel-count
    주어진 문자열에서 모음의 갯수를 반환하세요.
    이 카타에서 모음은 a, e, i, o, u 를 말합니다.
    입력 문자열은 소문자만 있고, 빈칸(스페이스)이 있을 수 있습니다.
*/

function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];       // 모음 배열
    return str.split('')                            // 문자열 -> 한 글자씩 쪼개진 문자열 배열
    .reduce((p, c) => {
        return vowels.indexOf(c) >= 0 ? p + 1 : p;  // 현재 글자가 모음 배열에 있으면 1 증가
    }, 0);
}

console.log(getCount("abracadabra"), 5);