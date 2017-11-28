/*
    효진이는 멀리 뛰기를 연습하고 있습니다.
    효진이는 한번에 1칸, 또는 2칸을 뛸 수 있습니다.
    칸이 총 4개 있을 때, 효진이는
    (1칸, 1칸, 1칸, 1칸)
    (1칸, 2칸, 1칸)
    (1칸, 1칸, 2칸)
    (2칸, 1칸, 1칸)
    (2칸, 2칸)
    의 5가지 방법으로 맨 끝 칸에 도달할 수 있습니다.
    멀리뛰기에 사용될 칸의 수 n이 주어질 때,
    효진이가 끝에 도달하는 방법이 몇 가지인지 출력하는 jumpCase 함수를 완성하세요.
    예를 들어 4가 입력된다면, 5를 반환해 주면 됩니다.
*/

// 메모이제이션
var memoryJumpCase = {
    '1': 1,
    '2': 2
};

// 멀리뛰기 경우의 수 함수
function jumpCase(num) {
    // 저장된 결과가 없으면
    if (memoryJumpCase[num] == undefined) {
        // 재귀호출으로 결과 구해서 저장
        memoryJumpCase[num] = jumpCase(num - 1) + jumpCase(num - 2);
    }
    // 저장된 결과 반환
    return memoryJumpCase[num];
}

console.log(jumpCase(100));

console.log(memoryJumpCase);