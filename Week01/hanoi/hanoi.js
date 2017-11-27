/*
    https://programmers.co.kr/learn/challenge_codes/45
    하노이의 탑은 대표적인 퍼즐의 일종입니다.
    세 개의 기둥이 있고 맨 왼쪽의 기둥에는 원판의 크기 순서대로 N개가 쌓여 있습니다.
    
    이렇게 쌓여 있는 원판을 가장 오른쪽 기둥으로 모두 옮겨야 합니다.
    단, 한 번에 원판을 하나씩 이동시킬 수 있고, 큰 원판을 작은 원판 위에 쌓을 수 없습니다.

    N개의 원판은 총 2N -1 번의 과정을 거쳐 이동할 수 있습니다.
    하지만 어떠한 과정으로 원판을 옮겨야 2N -1 번만에 옮길 수 있는지는 아직 모릅니다.
    원판이 N개 있을 때, Hanoi 함수에서 어떠한 과정으로 2N -1 번만에 옮길 수 있는지 과정을 리턴하세요.

    리턴값의 표기 방법은 다음과 같습니다.
    3개의 기둥은 순서대로 각각 1, 2, 3번으로 표기합니다.
    원판을 기둥1에서 기둥3으로 이동했다면 [1, 3]으로 표기합니다.
    원판을 기둥3에서 기둥1로 이동했다면 [3, 1]로 표기합니다.
    이러한 이동 순서를 담는 배열을 리턴하면 됩니다.
    
    예를들어 N이 2라면 아래 그림과 같이 옮길 수 있으므로
    리턴값은 [ [1,2], [1,3], [2,3] ]입니다.
*/

// 하노이 탑 과정을 반환하는 함수
// n: 타겟 원판, 이동하고자 하는 원판
// from: 현재 기둥, 원판의 현재 위치한 기둥
// to: 목표 기둥, 원판을 이동시킬 기둥
// other: 나머지 기둥
function hanoi(n, from, to, other) {
    // 이동 과정이 저장되는 배열
    var arrMove = [];
    // 첫 호출인 경우, 매개변수 셋팅
    if (from == null) {
        from = 1;
        to = 3;
        other = 2;
    }
    // 타겟 원판이 가장 작은 원판인 경우 : 이동만 함
    if (n == 1) {
        arrMove.push([from, to]);
    }
    // 가장 작은 원판이 아닌 경우
    else {
        // 작은 원판들을 나머지 기둥으로 옮김
        arrMove = arrMove.concat(hanoi(n - 1, from, other, to));
        // 타겟 원판 이동
        arrMove.push([from, to]);
        // 작은 원판들을 다시 원판 위로 옮김
        arrMove = arrMove.concat(hanoi(n - 1, other, to, from));
    }
    // 이동 과정 반환
    return arrMove;
}

console.log(hanoi(3));