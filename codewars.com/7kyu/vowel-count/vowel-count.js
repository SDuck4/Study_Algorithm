/*
    https://www.codewars.com/kata/vowel-count
    주어진 문자열에서 모음의 갯수를 반환하세요.
    이 카타에서 모음은 a, e, i, o, u 를 말합니다.
    입력 문자열은 소문자만 있고, 빈칸(스페이스)이 있을 수 있습니다.
*/

function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').reduce((p, c) => vowels.indexOf(c) >= 0 ? p + 1 : p, 0);
}

console.log(getCount("abracadabra"), 5);