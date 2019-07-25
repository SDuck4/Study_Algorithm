const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function loopDistance(size, a, b) {
  let distance = Math.abs(b - a);
  if (distance < size / 2) {
    return distance;
  }
  return size - distance;
}

function solution(name) {
  let targetList = [];
  for (let i in name) {
    let char = name[i];
    if (char == 'A') {
      continue;
    }
    let index = alphabet.indexOf(char);
    let move;
    if (index < 12) {
      move = index
    } else {
      move = 26 - index;
    }
    targetList.push([i, move]);
  }
  let size = name.length;
  let count = 0;
  let cursor = 0;
  while (targetList.length > 0) {
    let targetIndex = 0;
    let minDistance = loopDistance(size, cursor, targetList[targetIndex][0]);
    for (let i in targetList) {
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

console.log(solution('JEROEN'));
console.log(solution('JAN'));
console.log(solution('AAAA'));
console.log(solution('AABA'));