function solution(heights) {
  let answer = [];
  for (let i = 0; i < heights.length; i++) {
    let j = i;
    for (; j > -1; j--) {
      if (heights[i] < heights[j]) {
        break;
      }
    }
    answer.push(j + 1);
  }
  return answer;
}

console.log(solution([6, 9, 5, 7, 4]));         // [0, 0, 2, 2, 4]
console.log(solution([3, 9, 9, 3, 5, 7, 2]));   // [0, 0, 0, 3, 3, 3, 6]
console.log(solution([1, 5, 3, 6, 7, 6, 5]));   // [0, 0, 2, 0, 0, 5, 6]