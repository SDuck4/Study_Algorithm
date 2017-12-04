/*
    https://programmers.co.kr/learn/challenge_codes/190
    O와 X로 채워진 표가 있습니다. 표 1칸은 1 x 1 의 정사각형으로 이루어져 있습니다.
    표에서 O로 이루어진 가장 큰 정사각형을 찾아 넓이를 반환하는 findLargestSquare 함수를 완성하세요.
    예를 들어
    1	2	3	4	5
    X	O	O	O	X
    X	O	O	O	O
    X	X	O	O	O
    X	X	O	O	O
    X	X	X	X	X
    가 있다면 정답은
    1	2	3	4	5
    X	O	O	O	X
    X	O	[O]	[O]	[O]
    X	X	[O]	[O]	[O]
    X	X	[O]	[O]	[O]
    X	X	X	X	X
    가 되며 넓이는 9가 되므로 9를 반환해 주면 됩니다.
*/

// board에서 가장 큰 정사각형을 찾아 넓이를 반환하는 함수
function findLargestSquare(board) {
    // board의 넓이, 높이
    var widthBoard = board[0].length;
    var heightBoard = board.length;
    // 가장 큰 정사각형의 넓이
    var largestSqurare = 0;
    // board의 한 점씩 최대 정사각형을 구하자
    for (var x = 0; x < widthBoard; x++) {
        for (var y = 0; y < heightBoard; y++) {
            var point = board[y][x];
            if (point == 'O') {
                var sizeSquare = 1;
                while (true) {
                    // 정사각형의 끝 좌표
                    var xSqueareEnd = x + sizeSquare - 1;
                    var ySqueareEnd = y + sizeSquare - 1;
                    // board 범위 넘어가면 종료
                    if (xSqueareEnd > widthBoard - 1 || ySqueareEnd > heightBoard - 1) {
                        break;
                    }
                    // 정사각형 플래그
                    var isSquare = true;
                    // 정사각형을 순회하며 X가 있는지 검사
                    for (var xSquare = x; xSquare <= xSqueareEnd && isSquare; xSquare++) {
                        for (var ySquare = y; ySquare <= ySqueareEnd && isSquare; ySquare++) {
                            var pointSquare = board[ySquare][xSquare];
                            if (pointSquare == 'X') {
                                isSquare = false;
                            }
                        }
                    }
                    // 정사각형이면
                    if (isSquare) {
                        // 넓이를 구함
                        var square = sizeSquare * sizeSquare;
                        // 최대 넓이보다 크면 갱신
                        if (largestSqurare < square) {
                            largestSqurare = square;
                        }
                        // 정사각형의 크기 증가
                        sizeSquare++;
                    } else {
                        // 정사각형이 아니면 종료
                        break;
                    }
                }
                
            }
        }
    }
    // 최대 넓이 반환
    return largestSqurare;
}

var testBoard = [['X', 'O', 'O', 'O', 'X'], ['X', 'O', 'O', 'O', 'O'], ['X', 'X', 'O', 'O', 'O'], ['X', 'X', 'O', 'O', 'O'], ['X', 'X', 'X', 'X', 'X']];
console.log(findLargestSquare(testBoard));