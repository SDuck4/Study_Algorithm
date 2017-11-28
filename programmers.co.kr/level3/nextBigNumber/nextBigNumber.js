/*
    https://programmers.co.kr/learn/challenge_codes/174
    어떤 수 N(1≤N≤1,000,000) 이 주어졌을 때, N의 다음 큰 숫자는 다음과 같습니다.
    1. N의 다음 큰 숫자는 N을 2진수로 바꾸었을 때의 1의 개수와 같은 개수로 이루어진 수입니다.
    2. 1번째 조건을 만족하는 숫자들 중 N보다 큰 수 중에서 가장 작은 숫자를 찾아야 합니다.
    예를 들어, 78을 2진수로 바꾸면 1001110 이며, 78의 다음 큰 숫자는 83으로 2진수는 1010011 입니다.
    N이 주어질 때, N의 다음 큰 숫자를 찾는 nextBigNumber 함수를 완성하세요.
*/

function nextBigNumber(n) {
    // 입력값을 2진수 배열로
    var arrNumber = n.toString(2).split('');
    console.log(arrNumber.join(''));
    // 입력값 배열의 1을 왼쪽으로 정렬
    // : 1의 갯수는 유지한 채로 현재 자릿수에서 최대로 큰 숫자
    var arrBiggest = arrNumber.slice(0).sort((a, b) => b - a);
    // 입력값이 현재 자릿수에서 최대 값인 경우
    if (arrEquals(arrNumber, arrBiggest)) {
        // 자릿수 증가하고 첫번째 1을 제외한 모든 1을 오른쪽으로 정렬
        // 첫번째 1을 제외한 1을 오른쪽으로 정렬
        arrNumber = arrNumber.slice(1).sort();
        // 자릿수 증가
        arrNumber.unshift('0');
        // 첫번째 1 추가
        arrNumber.unshift('1');
    }
    // 입력값이 현재 자릿수에서 최대 값이 아닌 경우
    else {
        // 1의 숫자는 유지한채로 큰 숫자
        // 마지막 01 패턴에서 10으로 교환, 그 뒷부분은 1을 오른쪽으로 정렬
        var idx01 = 0;
        for (var i = 0; i < arrNumber.length - 1; i++) {
            // 마지막 01패턴 찾기
            if (arrNumber[i] == '0' && arrNumber[i + 1] == '1') {
                idx01 = i;
            }
        }
        // 01 => 10 교환
        arrExchange(arrNumber, idx01, idx01 + 1);
        // 뒷부분 1을 오른쪽으로 정렬
        arrNumber = arrNumber.slice(0, idx01 + 1).concat(arrNumber.slice(idx01 + 1).sort()); 
    }
    console.log(arrNumber.join(''));
    // 10진수로 변환하여 반환
    return parseInt(arrNumber.join(''), 2);
}

// 배열이 같음을 비교하는 함수
function arrEquals(a, b) {
    if (a.length == b.length) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
}

// 배열의 두 값을 교환하는 함수
function arrExchange(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

console.log(nextBigNumber(191956));