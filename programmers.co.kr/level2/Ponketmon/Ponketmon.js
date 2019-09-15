function solution(nums) {
  let ponketmonMap = {};
  let ponketmonCount = 0;
  let ponketmonLimit = nums.length / 2;
  for (let i = 0; i < nums.length; i++) {
    if (ponketmonMap[nums[i]] == null) {
      ponketmonMap[nums[i]] = true;
      ponketmonCount += 1;
    }
    if (ponketmonCount >= ponketmonLimit) {
      return ponketmonLimit;
    }
  }
  return ponketmonCount;
}

console.log(solution([3, 1, 2, 3]));          // 2
console.log(solution([3, 3, 3, 2, 2, 4]));    // 3
console.log(solution([3, 3, 3, 2, 2, 2]));    // 2