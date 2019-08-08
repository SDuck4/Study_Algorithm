function solution(arr) {
  if (arr.length == 1) {
    return [-1];
  }
  let min = arr.reduce((p, c) => p < c ? p : c, arr[0]);
  arr.splice(arr.indexOf(min), 1);
  return arr;
}

console.log(solution([4, 3, 2, 1]));    // [4, 3, 2]
console.log(solution([10]));            // [-1]