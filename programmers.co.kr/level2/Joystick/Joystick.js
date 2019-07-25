const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function loopDistance(size, a, b) {
  let distance1 = Math.abs(b - a);
  let distance2 = size - distance1;
  return Math.min(distance1, distance2);
}

function solution(name) {
  let size = name.length;
  let count = 0;
  let point = [];
  for (let i = 0; i < size; i ++) {
    let char = name[i];
    if (char == 'A') {
      if (i == 0) {
        point.push(0);
      }
      continue;
    }
    let index = alphabet.indexOf(char);
    let move = loopDistance(26, 0, index);
    count += move;
    point.push(i);
  }
  let pointLength = point.length;
  if (pointLength == 1) {
    count += point[0];
  } else if (pointLength == size) {
    count += size - 1;
  } else if (pointLength > 1) {
    let distanceMap = [];
    for (let i = 0; i < pointLength; i++) {
      distanceMap.push([]);
      for (let j = 0; j < pointLength; j++) {
        if (i == j) {
          distanceMap[i][j] = 999;
          continue;
        }
        let distance = loopDistance(size, point[i], point[j]);
        distanceMap[i][j] = distance;
      }
    }
    let indexDone = [0];
    let indexLast = 0;
    while (indexDone.length != pointLength) {
      let minIndex;
      let minDistance = 999;
      for (let i = 0; i < pointLength; i++) {
        if (distanceMap[indexLast][i] < minDistance) {
          minIndex = i;
          minDistance = distanceMap[indexLast][i];
        }
      }
      for (let i = 0; i < pointLength; i++) {
        for (let j = 0; j < pointLength; j++) {
          if (i == indexLast || j == indexLast) {
            distanceMap[i][j] = 999;
          }
        }
      }
      indexDone.push(minIndex);
      count += minDistance;
      indexLast = minIndex;
    }
  }
  return count;
}

console.log(solution('JAZ'));
console.log(solution('JEROEN'));
console.log(solution('JAN'));
console.log(solution('AAAA'));
console.log(solution('ABAA'));
console.log(solution('AABA'));
console.log(solution('AAAB'));
console.log(solution('SDUCKAAA'));