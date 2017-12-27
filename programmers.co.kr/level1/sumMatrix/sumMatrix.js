/*
    https://programmers.co.kr/learn/challenge_codes/9
    행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
    2개의 행렬을 입력받는 sumMatrix 함수를 완성하여 행렬 덧셈의 결과를 반환해 주세요.
    예를 들어 2x2 행렬인 A = ((1, 2), (2, 3)), B = ((3, 4), (5, 6)) 가 주어지면,
    같은 2x2 행렬인 ((4, 6), (7, 9))를 반환하면 됩니다.
    (어떠한 행렬에도 대응하는 함수를 완성해주세요.)
*/

function sumMatrix(A, B) {
    var result = [];                            // 결과 행렬
    var rowLength = A.length;                   // 행
    var colLength = A[0].length;                // 열
    for (var row = 0; row < rowLength; row++) {             // 행 순회
        result[row] = [];                                   // 결과행렬의 행에 열(배열) 추가
        for (var col = 0; col < colLength; col++) {         // 열 순회
            result[row][col] = A[row][col] + B[row][col];   // A와 B의 각 행, 열 더해줌
        }
    }
    return result;
}

console.log(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]]));