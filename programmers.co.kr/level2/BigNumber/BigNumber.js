function solution(numbers) {
  let digits = Array(10);
  numbers.forEach(number => {
    let firstDigit = parseInt(String(number)[0]);
    if (digits[firstDigit] == null) {
      digits[firstDigit] = [];
    }
    digits[firstDigit].push(number);
  });
  digits.map(digit => digit.sort((a, b) => parseInt('' + b + a) - parseInt('' + a + b)));
  let answer = digits.reverse().map(digit => digit.join('')).join('');
  if (answer[0] === '0' && answer.length > 1) {
    return '0';
  } else {
    return answer;
  }
}

console.log(solution([6, 10, 2]));          // 6210
console.log(solution([3, 30, 34, 5, 9]));   // 9534330
console.log(solution([0, 0, 0, 0]));        // 0
console.log(solution([0, 100]));            // 1000
console.log(solution([12, 121]));           // 12121
console.log(solution([21, 212]));           // 21221