/*
    https://programmers.co.kr/learn/challenge_codes/42
    수학을 공부하던 민지는 재미있는 사실을 발견하였습니다.
    그 사실은 바로 연속된 자연수의 합으로 어떤 숫자를 표현하는 방법이 여러 가지라는 것입니다.
    예를 들어, 15를 표현하는 방법은
    (1+2+3+4+5)
    (4+5+6)
    (7+8)
    (15)
    로 총 4가지가 존재합니다.
    숫자를 입력받아 연속된 수로 표현하는 방법을 반환하는 expressions 함수를 만들어 민지를 도와주세요.
    예를 들어 15가 입력된다면 4를 반환해 주면 됩니다.
*/

// start 부터 end 까지 자연수의 합을 구하는 함수
function getSum(start, end) {
    // start ~ end 범위의 크기
    var range = end - start + 1;
    // 합 계산
    var sum = (start + end) * Math.floor(range / 2);
    // 범위의 크기가 홀수일 때
    if (range % 2 == 1) {
        // 범위의 가운뎃값 더해줌
        sum += (start + end) / 2;
    }
    // 합 반환
    return sum;
}

// 숫자를 연속된 수로 표현하는 방법의 갯수를 구하는 함수
function expressions(num) {
    // 표현 방법 카운트, 기본값이 1인 것은 [num] 으로 표현한 것을 카운트 한것
    var countExpressions = 1;
    // 1부터 num의 반까지 반복
    var numHalf = num / 2;
    for (var start = 1; start < numHalf; start++) {
        // start : 수열의 시작, end : 수열의 끝
        var end = start + 1;
        while (true) {
            // 수열의 합 구함
            var sum = getSum(start, end);
            // 합이 num과 같으면
            if (sum == num) {
                // 표현 방법 카운트 증가, 반복문 탈출
                countExpressions++;
                break;
            } else if (sum > num) {
                // 합이 num보다 커졌으므로,
                // start로 시작하는 수열로 표현 불가
                break;
            }
            // 수열의 끝 증가
            end++;
        }
    }
    // 표현 방법 카운트 반환
    return countExpressions;
}

console.log(expressions(15));