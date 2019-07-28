const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function solution(a, b) {
  let dayOfYear = 5;
  for (let m = 1; m < a; m++) {
    switch (m) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        dayOfYear += 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        dayOfYear += 30;
        break;
      case 2:
        dayOfYear += 29;
    }
  }
  dayOfYear += b - 1;
  return day[dayOfYear % 7];
}

console.log(solution(5, 24));   // TUE
console.log(solution(1, 1));    // FRI
