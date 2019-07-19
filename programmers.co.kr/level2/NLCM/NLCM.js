// 최대공약수 구하기
let memoGCD = {};
function gcd(a, b) {
    let input = a < b ? [a, b] : [b, a];
    let inputKey = input.join();
    if (memoGCD[inputKey]) {
        return memoGCD[inputKey];
    }
    let result = b ? gcd(b, a % b) : Math.abs(a);
    memoGCD[inputKey] = result;
    return result;
}

// 최소공배수 구하기
let memoLCM = {};
function lcm(a, b) {
  let input = a < b ? [a, b] : [b, a];
  let inputKey = input.join();
    if (memoLCM[inputKey]) {
        return memoLCM[inputKey];
    }
    let result = (a * b) / gcd(a, b);
    memoLCM[inputKey] = result;
    return result;
}

// n개의 최소공배수 구하기
function solution(arr) {
  return arr.reduce((p, c) => lcm(p, c), 1);
}

console.log(solution([2, 6, 8, 14]));   // 168
console.log(solution([1, 2, 3]));       // 6