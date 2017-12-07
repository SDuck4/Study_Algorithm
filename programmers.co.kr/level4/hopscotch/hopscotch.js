/*
    https://programmers.co.kr/learn/challenge_codes/36
    영희는 땅따먹기 게임에 푹 빠졌습니다.
    땅따먹기 게임의 땅은 총 N행 4열로 나누어져 있고, 모든 칸에는 점수가 쓰여 있습니다.
    땅을 밟으면서 한 행씩 내려올 때, 영희는 각 행의 4칸 중 1칸만 밟으면서 내려올 수 있습니다.
    땅따먹기 게임에는 같은 열을 연속해서 밟을 수가 없는 특수 규칙이 있습니다.
    즉, 1행에서 (5)를 밟았다면, 2행의 (8)은 밟을 수가 없게 됩니다.
    마지막 행까지 모두 내려왔을 때, 점수가 가장 높은 사람이 게임의 승자가 됩니다.
    여러분이 hopscotch 함수를 제작하여 영희가 최대 몇 점을 얻을 수 있는지 알려주세요.
    예를 들어
    1 2 3 5
    5 6 7 8
    4 3 2 1
    의 땅이 있다면, 영희는 각 줄에서 (5), (7), (4) 땅을 밟아 16점을 최고점으로 받을 수 있으며,
    hopscotch 함수에서는 16을 반환해주면 됩니다.
*/

function hopscotch(board, size) {

    // BFS 탐색
    var doingSteps = [[]];                              // 진행중인 스탭
    var doneSteps = [];                                 // 완료된 스탭
    function hop(step) {                                // 스탭 입력받아 다음 스탭으로 진행하는 함수
        var lastCol = step[step.length - 1];            // 지난 스탭의 열
        if (step.length == 0) {                         // 첫번째 스탭의 경우 예외처리
            lastCol = -1;
        }
        for (var i = 0; i < 4; i++) {                   // 0번 ~ 3번열 순회
            if (i != lastCol) {                         // 지난 스탭의 열과 다르면
                var newStep = step.slice();             // 지난 스탭 복사해서 새로운 스탭 생성
                newStep.push(i);                        // 새로운 스탭 추가
                doingSteps.push(newStep);               // 진행중인 스탭에 추가
            }
        }
    }
    while (doingSteps.length > 0) {                     // 진행중인 스탭이 없을 때 까지 실행
        var nowStep = doingSteps.shift();               // 진행중인 스탭 꺼내옴
        if (nowStep.length == size) {                   // 진행중인 스탭이 완료된 경우
            doneSteps.push(nowStep);                    // 완료된 스탭으로 넣음
        } else {                                        // 아직 진행중인 경우
            hop(nowStep);                               // 다음 스탭으로 진행
        }
    }
    // 최고 점수 구하기
    var maxScore = 0;                                   // 최고 점수
    for (var i = 0; i < doneSteps.length; i++) {        // 완료된 스탭 순회
        var doneStep = doneSteps[i];                    // 완료된 스탭
        var score = doneStep.reduce((p, c, i) => {      // 완료된 스탭의 점수 계산
            return p + board[i][c];                     // board 참조하며 점수 누적
        }, 0);
        if (score > maxScore) {                         // 최고 점수보다 완료된 스탭의 점수가 높으면
            maxScore = score;                           // 최고 점수 갱신
        }
    }
    // 최고 점수 반환
    return maxScore;
}

var board = [
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1]
];
console.log(hopscotch(board, 3));