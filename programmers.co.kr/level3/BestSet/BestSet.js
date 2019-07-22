function solution(n, s) {
  if (n > s) {                        // n이 s보다 크면 불가능, 답이 자연수의 집합이기 때문.
    return [-1];
  }
  let dividend = parseInt(s / n);     // s를 n으로 나눈 몫
  let remainder = s - dividend * n;   // s를 n으로 나눈 나머지
  let answer = [];                    // 정답 배열
  for (let i = 0; i < n; i++) {
    if (i < remainder) {
      answer.unshift(dividend + 1);   // 나머지 횟수는 1을 더해서 넣어주자
    } else {
      answer.unshift(dividend);       // 몫을 정답 배열에 앞에 넣어주자, 앞에 넣어야 오름차순이됨
    }
  }
  return answer;
}

console.log(solution(2, 9));    // [4, 5]
console.log(solution(2, 1));    // [-1]