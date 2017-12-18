/*
    https://programmers.co.kr/learn/challenge_codes/60
    과자를 좋아하는 동우는 책상 위에 일렬로 놓아진 과자를 발견하였습니다.
    과자에는 맛을 숫자로 평가한 종이가 붙어 있습니다.
    동우는 맨 왼쪽부터 순서대로 과자를 먹기로 하였습니다.
    동우는 먹을 과자를 고를 때 이전에 먹은 과자보다 맛이 더 좋은 과자만 먹습니다.
    제일 처음에 맛이 3인 과자를 먹었다면, 다음에는 4보다 작은 맛의 과자는 먹지 않습니다.
    책상위에 놓인 과자의 맛이 입력되면,
    동우가 최대 과자를 몇 개를 먹을 수 있는지 반환해주는 eatCookie 함수를 완성하세요.
    예를 들어 [1, 4, 2, 6, 3, 4, 1, 5] 가 입력된다면
    동우는 1, 3, 5, 6, 8번째 과자(각각의 맛은 1, 2, 3, 4, 5)를 골라 총 5개를 먹을 수 있고,
    5개보다 더 많이 먹을 수 있는 방법은 없으므로 5를 리턴하면 됩니다.
*/

function eatCookie(cookies) {
    var stepDoing = [[]];                   // BFS 탐색의 스탭들이 저장되는 배열(큐)
    var answer = 0;                         // 가장 많이 먹을 수 있는 방법
    var lengthCookies = cookies.length;     // cookies 길이, for문을 위해 미리 저장해둠

    while (stepDoing.length > 0) {          // BFS 탐색 시작
        var step = stepDoing.shift();       // 현재 스탭
        var stepNext = [];                  // 다음 스탭이 저장될 배열
        var lastEatIndex = step.length == 0 ? 0 : step[step.length - 1];    // 마지막으로 먹은 쿠키의 인덱스
        var lastEatCookie = step.length == 0 ? 0 : cookies[lastEatIndex];   // 마지막으로 먹은 쿠키의 맛
        for (var i = lastEatIndex; i < lengthCookies; i++) {    // 마지막 인덱스 부터 쿠키 탐색
            if (cookies[i] > lastEatCookie) {   // 마지막 쿠키보다 맛있으면
                var newStep = step.slice();     // 현재 스탭 복사
                newStep.push(i);                // 더 맛있는 쿠키를 먹자
                stepNext.push(newStep);         // 다음 스탭에 추가
            }
        }
        if (stepNext.length == 0) {         // 현재 스탭에서 더 분기할 수 없으면
            if (answer < step.length) {     // 가장 많이 먹을 수 있는 방법인지 확인
                answer = step.length;       // 맞으면 저장
            }
        } else {
            stepDoing = stepDoing.concat(stepNext);     // 분기한 스탭을 탐색 큐에 추가
        }
    }

    return answer;      // 가장 많이 먹을 수 있는 방법 반환
}

console.log(eatCookie([1, 4, 2, 6, 3, 4, 1, 5]));