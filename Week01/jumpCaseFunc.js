// 함수형 패러다임 사용 : 함수의 실행 결과를 저장해둔다
var savedResult = {
    '1': 1,
    '2': 2
};

function jumpCase(num) {
    // 저장된 결과가 있으면
    if (savedResult[num]) {
        // 저장된 결과 반환
        return savedResult[num];
    }
    // 저장된 결과가 없으면
    else {
        // 재귀호출으로 결과 구함
        var result = jumpCase(num - 1) + jumpCase(num - 2);
        // 입력과 결과 저장
        savedResult[num] = result;
        // 결과 반환
        return result;
    }
}

console.log(jumpCase(100));

console.log(savedResult);