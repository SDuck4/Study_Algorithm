function jumpCase(num) {
    var arrCaseProg = [];   // 진행중인 케이스
    var arrCaseDone = [];   // 완료한 케이스

    do {
        // 진행중인 케이스에서 케이스를 가져옴
        // 진행중인 케이스가 없으면, 0을 셋팅
        var caseProg = arrCaseProg.length != 0 ? arrCaseProg.shift() : 0;

        // 완료 -> 완료한 케이스에 추가
        if (caseProg == num) {
            arrCaseDone.push(caseProg);
        }

        // 1칸 점프가능 -> 분기
        if (caseProg + 1 <= num) {
            // 케이스 복사
            var newCase = caseProg;
            // 1칸 점프
            newCase += 1;
            // 진행중인 케이스에 추가
            arrCaseProg.push(newCase);
        }

        // 2칸 점프가능 -> 분기
        if (caseProg + 2 <= num) {
            // 케이스 복사
            var newCase = caseProg;
            // 2칸 점프
            newCase += 2;
            // 진행중인 케이스에 추가
            arrCaseProg.push(newCase);
        }
    } while (arrCaseProg.length > 0)

    // 완료된 케이스의 갯수 반환
    return arrCaseDone.length;
}

console.log(jumpCase(4));