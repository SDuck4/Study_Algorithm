/*
    https://programmers.co.kr/learn/challenge_codes/69
    체스판은 8 * 8 개의 정사각형으로 흰 칸, 검은 칸이 교차되며 나누어져 있습니다.
    체스의 기물 중 가장 강력한 말은 퀸으로,
    퀸은 자신의 위치에서 가로, 세로, 대각선에 있는 모든 적을 공격할 수 있습니다.
    만약 N * N 개의 정사각형으로 된 체스판이 있다면,
    서로 공격당하지 않도록 N개의 퀸을 둘 수 있는 경우는 몇 가지가 있을까요?
    예를들어 일반적인 8 * 8인 체스판에서 퀸을 다음 그림과 같이 배치하면
    모든 퀸은 서로를 공격하고 있지 않으므로 둘 수 있는 하나의 경우가 됩니다.
    nQueen 함수를 제작하여 경우의 수를 반환하여 주세요.
    예를 들어 N = 3이라면 0을 반환해 주면 됩니다.
*/

function nQueen(n) {
    // 체스판 생성
    var boardStart = {
        numQueen: 0,    // 퀸의 갯수
        map: []         // 체스판[줄][칸]
    };
    for (var row = 0; row < n; row++) {         // 체스판 줄, 칸 생성
        var arrRow = [];                        // 체스판 줄
        for (var col = 0; col < n; col++) {
            arrRow.push(0);                     // 체스판 줄에 칸 추가
        }
        boardStart.map.push(arrRow);
    }
    // BFS 탐색
    var stepDoing = [boardStart];       // 탐색중인 스탭
    var stepDone = [];                  // 탐색 완료한 스탭
    while (stepDoing.length > 0) {
        var step = stepDoing.shift();   // 탐색할 스탭 가져오기
        if (step.numQueen == n) {       // 완료 조건: 퀸의 갯수가 n 일 때
            stepDone.push(step);        // 탐색 완료 스탭에 추가
            continue;
        }
        for (var col = 0; col < n; col++) {                             // 현재 스탭에서 다음 스탭 분기
            if (step.map[step.numQueen][col] == 0) {                    // 다음 스탭 분기 조건: 가로, 세로, 대각선으로 퀸 없음
                var newStep = JSON.parse(JSON.stringify(step));         // 현재 스탭 복사해 다음 스탭으로
                newStep.numQueen++;                                     // 퀸 갯수 추가
                newStep.map[step.numQueen][col] = newStep.numQueen;     // 퀸 배치, 몇 번째 퀸인지 값으로 표시
                for (var row = newStep.numQueen; row < n; row++) {      // 다음 줄에서 퀸의 위치를 기준으로
                    var indexDownLeft = col - (row - step.numQueen);    // 왼쪽 아래칸의 인덱스
                    var indexDownRight = col + (row - step.numQueen);   // 오른쪽 아래칸의 인덱스
                    if (indexDownLeft >= 0) {                           // 체스판 범위 체크
                        newStep.map[row][indexDownLeft]--;              // 왼쪽 아래칸, -1 해서 퀸을 배치할수 없음을 표시
                    }
                    newStep.map[row][col]--;                            // 바로 아래칸, -1 해서 퀸을 배치할수 없음을 표시
                    if (indexDownRight < n) {                           // 체스판 범위 체크
                        newStep.map[row][indexDownRight]--;             // 오른쪽 아래칸, -1 해서 퀸을 배치할수 없음을 표시
                    }
                }
                stepDoing.push(newStep);                                // 다음 스탭을 진행중인 스탭에 추가
            }
        }
    }
    // 결과 반환
    return stepDone.length;
}

console.log(nQueen(8));