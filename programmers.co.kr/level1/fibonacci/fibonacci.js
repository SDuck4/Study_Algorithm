/*
    https://programmers.co.kr/learn/challenge_codes/6
    피보나치 수는 F(0) = 0, F(1) = 1일 때, 2 이상의 n에 대하여
    F(n) = F(n-1) + F(n-2) 가 적용되는 점화식입니다.
    2 이상의 n이 입력되었을 때, fibonacci 함수를 제작하여 n번째 피보나치 수를 반환해 주세요.
    예를 들어 n = 3이라면 2를 반환해주면 됩니다.
*/

// 재귀함수
function fibonacci_rec(num) {
    if (num < 2) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

// 반복문
function fibonacci(num) {
    if (num < 2) return num;
    // n = 2 일때,
    var numN_2 = 0;     // n-2항
    var numN_1 = 1;     // n-1항
    var numN = 1;       // n항
    for (var i = 2; i < num; i++) {
        // 각 항의 값을 이전 항으로 이동
        numN_2 = numN_1;
        numN_1 = numN;
        // 현재 항의 값을 계산
        numN = numN_2 + numN_1;
    }
    return numN;
}

console.log(fibonacci(3));