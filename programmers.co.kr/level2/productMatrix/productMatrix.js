/*
    https://programmers.co.kr/learn/challenge_codes/142
    행렬의 곱셈은, 곱하려는 두 행렬의 어떤 행과 열을 기준으로,
    좌측의 행렬은 해당되는 행, 우측의 행렬은 해당되는 열을 순서대로 곱한 값을 더한 값이 들어갑니다.
    행렬을 곱하기 위해선 좌측 행렬의 열의 개수와 우측 행렬의 행의 개수가 같아야 합니다.
    곱할 수 있는 두 행렬 A,B가 주어질 때, 행렬을 곱한 값을 출력하는 productMatrix 함수를 완성해 보세요.
*/

function productMatrix(A, B) {
    var C = [];                                 // 결과 행렬 C
    var rowLength = A.length;                   // 행의 크기: A의 행
    var colLength = B[0].length;                // 열의 크기: B의 열
    for (var row = 0; row < rowLength; row++) {             // 행 순회
        C[row] = [];                                        // 결과행렬의 행에 열(배열) 추가
        for (var col = 0; col < colLength; col++) {         // 열 순회
            C[row][col] = A[row].reduce((p, c, i) => {
                return p + c * B[i][col];       // C[행][열] = (A의 행 * B의 열)의 합
            }, 0);
        }
    }
    return C;
}

var a = [
    [1, 2],
    [4, 5]
];
var b = [
    [1, 2],
    [4, 5]
];
console.log(productMatrix(a, b));