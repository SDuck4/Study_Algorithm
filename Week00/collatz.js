/*
    https://programmers.co.kr/learn/challenge_codes/15
    1937년 Collatz란 사람에 의해 제기된 이 추측은,
    입력된 수가 짝수라면 2로 나누고,
    홀수라면 3을 곱하고 1을 더한 다음,
    결과로 나온 수에 같은 작업을 1이 될 때까지 반복할 경우 모든 수가 1이 된다는 추측입니다.
    예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다.
    collatz 함수를 만들어 입력된 수가 몇 번 만에 1이 되는지 반환해 주세요.
    단, 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.
*/

function collatz(num) {
    for(var i = 0; i < 500; i++) {
        // 종료 조건 : 값이 1
        if (num == 1) return i;
        if (num % 2 == 0) {
            // 값이 짝수면 : 2로 나눔
            num = num / 2;
        } else {
            // 값이 홀수면 : 3을 곱하고 1을 더함
            num = num * 3 + 1;
        }
    }
    // 500번 반복해도 1이 되지 않음
    return -1;
}

console.log(collatz(6));