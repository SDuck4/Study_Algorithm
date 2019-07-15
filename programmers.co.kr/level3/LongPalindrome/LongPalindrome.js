/*
  https://programmers.co.kr/learn/courses/30/lessons/12904

  앞뒤를 뒤집어도 똑같은 문자열을 팰린드롬(palindrome)이라고 합니다.
  문자열 s가 주어질 때, s의 부분문자열(Substring)중 가장 긴 팰린드롬의 길이를 return 하는 solution 함수를 완성해 주세요.

  예를들면, 문자열 s가 abcdcba이면 7을 return하고 abacde이면 3을 return합니다.

  제한사항
  - 문자열 s의 길이 : 2500 이하의 자연수
  - 문자열 s는 알파벳 소문자로만 구성
*/

function isPalindrome(str) {
  let result = false;
  let start = 0, end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) {
      return result
    }
    start += 1;
    end -= 1;
  }
  return true;
}

function solution(str) {
  let answer = str.length;
  let searchEnd = 0;
  let searching = true;
  while (searching && answer > 1) {
    for (let i = 0; i <= searchEnd; i++) {
      let subStr = str.substring(i, i + answer);
      if (isPalindrome(subStr)) {
        return answer;
      }
    }
    answer = answer - 1;
    searchEnd = searchEnd + 1;
  }
  return answer;
}

console.log(solution('abcdcba'));
console.log(solution('abacde'));
console.log(solution('abcdefghijklmnop'));