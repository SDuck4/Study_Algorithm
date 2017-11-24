/*
// 재귀함수
function fibonacci(num) {
    if (num < 2) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}
*/

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