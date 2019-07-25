const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function loopDistance(size, a, b) {
  let distance1 = Math.abs(b - a);
  let distance2 = size - distance1;
  return Math.min(distance1, distance2);
}

function solution(name) {
  let targetList = [];
  for (let i in name) {
    let char = name[i];
    if (char == 'A') {
      continue;
    }
    let index = alphabet.indexOf(char);
    let move = loopDistance(26, 0, index);
    targetList.push([i, move]);
  }
  let size = name.length;
  let count = 0;
  let cursor = 0;
  while (targetList.length > 0) {
    let targetIndex = 0;
    let minDistance = loopDistance(size, cursor, targetList[targetIndex][0]);
    for (let i = 1; i < targetList.length; i++) {
      let target = targetList[i];
      let distance = loopDistance(size, cursor, target[0]);
      if (distance < minDistance) {
        targetIndex = i;
        minDistance = distance;
      }
    }
    count += minDistance;
    count += targetList[targetIndex][1];
    cursor = targetIndex;
    targetList.splice(targetIndex, 1);
  }
  return count;
}

console.log(solution('JAZ'));
console.log(solution('JEROEN'));
console.log(solution('JAN'));
console.log(solution('AAAA'));
console.log(solution('AABA'));