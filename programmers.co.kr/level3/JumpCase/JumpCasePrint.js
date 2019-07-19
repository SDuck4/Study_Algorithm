function jumpCasePrint(num) {
  let arrCaseProg = [];   // 진행중인 케이스
  let arrCaseDone = [];   // 완료한 케이스

  do {
    // 진행중인 케이스에서 케이스를 가져옴
    // 진행중인 케이스가 없으면, 빈 배열을 셋팅
    let caseProg = arrCaseProg.length != 0 ? arrCaseProg.shift() : [];

    // 케이스의 진행도 구하기
    let sumCaseProg = caseProg.reduce((p, c) => {
      return p + c;
    }, 0);

    // 완료 -> 완료한 케이스에 추가
    if (sumCaseProg == num) {
      arrCaseDone.push(caseProg);
    }

    // 1칸 점프가능 -> 분기
    if (sumCaseProg + 1 <= num) {
      // 케이스 복사
      let newCase = JSON.parse(JSON.stringify(caseProg));
      // 1칸 점프
      newCase.push(1);
      // 진행중인 케이스에 추가
      arrCaseProg.push(newCase);
    }

    // 2칸 점프가능 -> 분기
    if (sumCaseProg + 2 <= num) {
      // 케이스 복사
      let newCase = JSON.parse(JSON.stringify(caseProg));
      // 2칸 점프
      newCase.push(2);
      // 진행중인 케이스에 추가
      arrCaseProg.push(newCase);
    }
  } while (arrCaseProg.length > 0)

  // 완료된 케이스 반환
  return arrCaseDone;
}

console.log(jumpCasePrint(4));