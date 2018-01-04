/*
    https://programmers.co.kr/learn/challenge_codes/66
    1x1 정사각형 2개가 붙어 있는 타일이 있습니다.
    이 타일을 이용하여 총 3xN 의 보드판을 채우려고 합니다.
    타일은 가로, 세로 두 가지 방향으로 배치할 수 있습니다.
    보드판의 길이 N이 주어질 때, 3xN을 타일로 채울 수 있는 경우의 수를 반환하는 tiling 함수를 완성하세요.
    단, 리턴하는 숫자가 매우 커질 수도 있으므로 숫자가 5자리를 넘어간다면 맨 끝자리 5자리만 리턴하세요.
    예를 들어 N = 2일 경우 3을 반환해 주면 됩니다.
    하지만 만약 답이 123456789라면 56789만 반환해주면 됩니다.
    리턴하는 숫자의 앞자리가 0일 경우 0을 제외한 숫자를 리턴하세요.
    리턴타입은 정수형이어야 합니다.
    참고: 이 문제는 2 x n 타일링 문제와 유사합니다.
    문제이해가 어려우면 2 x n 타일링 문제를 먼저 풀어 보세요.
*/

// 메모이제이션
const memoryTiling = {
    0: 1,
    2: 3
};

function tiling(n) {
    // 홀수일 때, 배치 불가
    if (n % 2 == 1) {
        return 0;
    }
    // 메모리에 없으면
    if (memoryTiling[n] == undefined) {
        // 점화식으로 계산
        var newValue = (4 * tiling(n - 2) + 100000) - tiling(n - 4);    // 10만 더해주는것은 자리수 커팅 보정
        if (newValue >= 100000) {   // 맨 끝자리 5자리 커팅
            newValue %= 100000;     // 10만(6자리)으로 나눈 나머지 값
        }
        // 메모리에 계산한 값 저장
        memoryTiling[n] = newValue;
    }
    // 결과 반환
    return memoryTiling[n];
}

console.log(tiling(2), 3);
console.log(tiling(4), 11);
console.log(tiling(6), 41);
console.log(tiling(8), 153);
console.log(tiling(10), 571);
console.log(tiling(12), 2131);
console.log(tiling(14), 7953);