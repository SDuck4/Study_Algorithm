let memoCase = {
  1: 1,
  2: 2
};

function solution(n) {
  if (memoCase[n] == null) {                                // 저장된 결과가 없으면
    let numberOfCase = solution(n - 1) + solution(n - 2);   // 재귀호출로 경우의 수 구하기
    memoCase[n] = numberOfCase > 1234567 ? numberOfCase % 1234567 : numberOfCase
  }
  return memoCase[n];                                       // 저장된 결과 반환
}

console.log(solution(4));     // 5
console.log(solution(3));     // 3
console.log(solution(100));   // 496748
console.log(memoCase);