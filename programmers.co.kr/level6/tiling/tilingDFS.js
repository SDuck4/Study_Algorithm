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

function tiling(n) {
    // 홀수일 때, 배치 불가
    if (n % 2 == 1) {
        return 0;
    }

    var stepDoing = [];     // DFS, 스택
    var stepDone = [];      // 완료상태 배열
    var stepMemory = {};    // 중복 체크

    // 초기상태 정의
    var stepStart = ['', '', '', [0, 0, 0]];
    stepDoing.push(stepStart);

    // 탐색
    while (stepDoing.length > 0) {
        var step = stepDoing.pop();
        
        // 완료 조건
        if (step[3][0] == n && step[3][1] == n && step[3][2] == n) {    // 3라인 모두 꽉 참
            stepDone.push(step);    // 완료상태 배열에 넣음
            continue;
        }
        
        // 분기
        var stepStr = JSON.stringify(step);     // 복사에 자주 사용되어 미리 정의해놓음
        for (var i = 0; i < 3; i++) {
            // 가로로 넣기
            if (step[3][i] + 2 <= n) {  // 가로로 넣을 공간이 있는지 확인
                var nextStep = JSON.parse(stepStr);
                nextStep[i] += '2';
                nextStep[3][i] += 2;
                var nextStepStr = JSON.stringify(nextStep);
                // 중복체크
                if (stepMemory[nextStepStr] == undefined) {
                    stepMemory[nextStepStr] = true;
                    stepDoing.push(nextStep);
                }
            }
            // 세로로 넣기
            if (i < 2 && step[3][i] + 1 <= n && // 세로로 넣을 공간 확인
                step[3][i] == step[3][i + 1]) { // 두 라인의 높이가 같아야 함
                var nextStep = JSON.parse(stepStr);
                nextStep[i] += '1';
                nextStep[3][i] += 1;
                nextStep[i + 1] += '1';
                nextStep[3][i + 1] += 1;
                var nextStepStr = JSON.stringify(nextStep);
                // 중복체크
                if (stepMemory[nextStepStr] == undefined) {
                    stepMemory[nextStepStr] = true;
                    stepDoing.push(nextStep);
                }
            }
        }
    }
    return stepDone.length;
}

for (var i = 1; i <= 14; i++) {
    console.log(i, tiling(i));
}