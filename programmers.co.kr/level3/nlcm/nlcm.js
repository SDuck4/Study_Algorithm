/*
    https://programmers.co.kr/learn/challenge_codes/30
    두 수의 최소공배수(Least Common Multiple)란
    입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다.
    예를 들어 2와 7의 최소공배수는 14가 됩니다.
    정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다.
    nlcm 함수를 통해 n개의 숫자가 입력되었을 때, 최소공배수를 반환해 주세요.
    예를들어 [2,6,8,14] 가 입력된다면 168을 반환해 주면 됩니다.
*/

// 최대공약수 구하기
var memoryGcd = {}; // 메모이제이션
function gcd(a, b) {
    var args = [];
    for (var i in arguments) {
        args.push(arguments[i]);
    }
    var input = args.sort().join();
    if (memoryGcd[input]) {
        return memoryGcd[input];
    }
    var result = b ? gcd(b, a % b) : Math.abs(a);
    memoryGcd[input] = result;
    return result;
}

// 최소공배수 구하기
var memoryLcm = {}; // 메모이제이션
function lcm(a, b) {
    var args = [];
    for (var i in arguments) {
        args.push(arguments[i]);
    }
    var input = args.sort().join();
    if (memoryLcm[input]) {
        return memoryLcm[input];
    }
    var result = (a * b) / gcd(a, b);
    memoryLcm[input] = result;
    return result;
}

// n개의 최소공배수 구하기
function nlcm(num) {
    return num.reduce((p, c) => lcm(p, c), 1);
}

console.log(nlcm([2, 6, 8, 14]));