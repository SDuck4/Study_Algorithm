/*
    https://programmers.co.kr/learn/challenge_codes/12
    두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환해주는 gcdlcm 함수를 완성해 보세요.
    배열의 맨 앞에 최대공약수, 그 다음 최소공배수를 넣어 반환하면 됩니다.
    예를 들어 gcdlcm(3,12) 가 입력되면, [3, 12]를 반환해주면 됩니다.
*/

function gcdlcm(a, b) {
    // 최대 공약수 구하기
    var gcd = 0;    // 최대 공약수
    // a와 b중 작은 수를 i 로 하고
    // i를 1씩 줄여가는 반복문
    for (var i = a < b ? a : b; i > 0; i--) {
        // a와 b 모두 i로 나누어 떨어질 때
        if (a % i == 0 && b % i == 0) {
            // i가 최대 공약수
            gcd = i;
            break;
        }
    }
    // 최소 공배수 구하기
    var lcm = 0;    // 최소 공배수
    var multipleA = a;  // a의 배수
    var multipleB = b;  // b의 배수
    while (true) {
        // a와 b의 배수가 일치하면
        if (multipleA == multipleB) {
            // a의 배수, b의 배수가 최소 공배수
            lcm = multipleA;
            break;
        }
        // 일치하지 않으면
        else {
            // 둘 중 작은 배수를 더 더해줌
            multipleA < multipleB ? multipleA += a : multipleB += b;
        }
    }
    // 결과 반환, [최대 공약수, 최소 공배수]
    return [gcd, lcm];
}

console.log(gcdlcm(3, 12));