/*
    https://programmers.co.kr/learn/challenge_codes/186
    1보다 큰 N개의 도시 중 한 곳에 공항을 지을 예정입니다.
    사람들의 편의를 위해 공항으로부터 각 사람들까지의 도시간 이동 거리가 최소가 되는 도시에 짓기로 하였습니다.
    편의상 도시는 일직선상에 놓여있다고 가정하며 좌표의 범위는 음수가 포함됩니다.
    또한 좌표는 정렬되어 있지 않습니다.
    직선상의 위치와 그 도시에 사는 사람들의 수가 주어질 때,
    공항을 지을 도시의 위치를 반환해주는 함수 chooseCity 함수를 완성하세요.
    거리가 같은 도시가 2개 이상일 경우 위치가 더 작은 쪽의 도시를 선택하면 됩니다.
    예를 들어 다음과 같은 정보의 도시가 있다고 가정해 봅시다.
    위치    1   2   3
    인구수  5   2   3
    이 살 경우, 각각의 도시에 공항을 지었을 때의 사람들의 이동 거리는 8, 8, 12 이므로
    1번 또는 2번에 지을 수 있지만, 1의 위치가 더 작으므로 1을 반환해주면 됩니다.
*/

function chooseCity(n, city) {
    city.sort((a, b) => a[0] - b[0]);           // city 위치 기준으로 오름차순 정렬
    var sumPeople = city.reduce((p, c) => {     // 인구수 총합 계산
        return p + c[1];
    }, 0);
    var accPeople = 0;                          // 인구수 누적변수
    for (var i = 0; i < n; i++) {               // city 순회
        accPeople += city[i][1];                // 인구수 누적
        if (accPeople >= (sumPeople / 2)) {     // 인구수 누적이 총합의 반 이상이면
            return city[i][0];                  // 현재 도시의 위치 반환
        }
    }
}

var tA = 3,
    tCity = [[2, 2], [1, 5], [3, 3]];

console.log(chooseCity(tA, tCity));