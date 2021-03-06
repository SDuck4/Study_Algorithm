/*
    https://programmers.co.kr/learn/challenge_codes/54
    1x1 정사각형 2개가 붙어 있는 타일이 있습니다.
    이 타일을 이용하여 총 2xN 의 보드판을 채우려고 합니다.
    타일은 가로, 세로 두 가지 방향으로 배치할 수 있습니다.
    보드판의 길이 N이 주어질 때, 2xN을 타일로 채울 수 있는 경우의 수를 반환하는 tiling 함수를 완성하세요.
    예를들어 N이 7일 경우 아래 그림이 타일을 배치할 수 있는 한 경우입니다.
    단, 리턴하는 숫자가 매우 커질 수도 있으므로 숫자가 5자리를 넘어간다면 맨 끝자리 5자리만 리턴하세요.
    예를 들어 N = 2일 경우 가로로 배치하는 경우와 세로로 배치하는 경우가 있을 수 있으므로 2를 반환해 주면 됩니다.
    하지만 만약 답이 123456789라면 56789만 반환해주면 됩니다.
    리턴하는 숫자의 앞자리가 0일 경우 0을 제외한 숫자를 리턴하세요.
    리턴타입은 정수형이어야 합니다.
*/

/*
타일 배치의 경우의 수
1 : 1 => 1
2 : 11 2 => 2
3 : 111 21 12 => 3
4 : 1111 211 121 112 22 => 5
5 : 11111 2111 1211 1121 1112 221 212 122 => 8
6 : 111111 21111 12111 11211 11121 11112 2211 2121 2112 1212 1221 1122 222 => 13
*/

// tiling 메모이제이션
var memoryTiling = {
    1: 1,
    2: 2
}

function tiling(n) {
    if (memoryTiling[n] == undefined) {                 // 메모이제이션 처리
        var newValue = tiling(n - 1) + tiling(n - 2);   // tiling(n) = tiling(n - 1) + tiling(n - 2)
        if (newValue >= 100000) {                       // 맨 끝자리 5개만 반환
            newValue = newValue % 100000;               // 나머지 연산으로 5자리 이상 버림
        }
        memoryTiling[n] = newValue;                     // 결과 저장
    }
    return memoryTiling[n];
}

console.log(tiling(100));