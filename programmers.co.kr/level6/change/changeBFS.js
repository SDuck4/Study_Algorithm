/*
    https://programmers.co.kr/learn/challenge_codes/63
    물건 값보다 많은 돈을 낼 경우 거스름돈을 돌려주게 됩니다.
    거스름돈은 한 금액의 돈으로 줄 수도 있지만, 여러 금액의 동전을 섞어 거슬러 줄 수 있습니다.
    거스름돈이 N원일 때, 1원, 2원, 5원 동전이 있다면 몇 가지 방법으로 돈을 거슬러 줄 수 있을까요?
    change 함수를 통해 경우의 수를 반환해주는 함수를 만들어 보세요.
    K에는 사용할 수 있는 동전의 종류가 들어 있습니다.
    예를 들어, N = 5이고 K = [1, 2, 5]이면 1원, 2원, 5원 동전을 가지고 5원을 맞추는 경우의 수를 찾으면 됩니다.
    1원 5개
    1원 3개, 2원 1개
    1원 1개, 2원 2개
    5원 1개
    이렇게 총 4가지 경우가 있으면, 4를 리턴해 주면 됩니다.
*/

function change(total, coin) {
    var stepStart = {};
    var lengthCoin = coin.length;
    for (var i = 0; i < lengthCoin; i++) {
        var c = coin[i];
        stepStart[c] = 0;
    }
    stepStart.sum = 0;
    var stepDoing = [stepStart];    // 탐색 큐
    var stepDone = {};              // 완료 스탭
    var lengthCoin = coin.length;
    while (stepDoing.length > 0) {
        var step = stepDoing.shift();
        if (step.sum == total) {                    // 완료 조건
            stepDone[JSON.stringify(step)] = true;  // 완료 스탭에 추가
        } else if (step.sum < total) {
            for (var i = 0; i < lengthCoin; i++) {
                if (step.sum + coin[i] <= total) {  // 분기 조건
                    var stepNext = JSON.parse(JSON.stringify(step));    // 스탭 복사
                    stepNext[coin[i]]++;            // 분기
                    stepNext.sum += coin[i];
                    stepDoing.push(stepNext);       // 탐색 큐에 분기한 스탭 추가
                }
            }
        }
    }
    return Object.keys(stepDone).length;
}

console.log(change(5, [ 1, 2, 5 ]));