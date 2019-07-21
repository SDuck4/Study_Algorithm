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

console.log(solution('abcdcba'));             // 7
console.log(solution('abacde'));              // 3
console.log(solution('abcdefghijklmnop'));    // 1