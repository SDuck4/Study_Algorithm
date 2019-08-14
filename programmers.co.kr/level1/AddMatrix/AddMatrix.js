function solution(arr1, arr2) {
  let answer = [];
  arr1.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (!answer[rowIndex]) {
        answer[rowIndex] = [];
      }
      answer[rowIndex][colIndex] = arr1[rowIndex][colIndex] + arr2[rowIndex][colIndex];
    });
  });
  return answer;
}

console.log(solution([[1, 2], [2, 3]], [[3, 4], [5, 6]]));    // [[4, 6], [7, 9]]
console.log(solution([[1], [2]], [[3], [4]]));                // [[4], [6]]