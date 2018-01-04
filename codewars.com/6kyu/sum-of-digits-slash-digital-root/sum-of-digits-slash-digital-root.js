/*
    https://www.codewars.com/kata/sum-of-digits-slash-digital-root

    이 카타에서 당신은 디지털 루트 함수를 만들어야합니다.

    디지털 루트는 어떤 숫자의 모든 자릿수의 재귀적인 합입니다.
    n이 주어지면 n의 모든 자릿수를 더하세요.
    만약 그 합이 두 자릿수면, 한 자릿수가 될 때 까지 반복하세요.
    이 과정은 오직 자연수에만 적용할 수 있습니다.

    아래는 어떻게 동작하는지에 대한 예입니다.(Ruby 예제):

    digital_root(16)
    => 1 + 6
    => 7

    digital_root(942)
    => 9 + 4 + 2
    => 15 ...
    => 1 + 5
    => 6

    digital_root(132189)
    => 1 + 3 + 2 + 1 + 8 + 9
    => 24 ...
    => 2 + 4
    => 6

    digital_root(493193)
    => 4 + 9 + 3 + 1 + 9 + 3
    => 29 ...
    => 2 + 9
    => 11 ...
    => 1 + 1
    => 2
*/

function digital_root(n) {
    var sum = 0;
    while (n > 10) {
        while (n != 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        if (sum < 10) break;
        n = sum;
        sum = 0;
    }
    return sum;
}

console.log(digital_root(16), 7);
console.log(digital_root(942), 6);
console.log(digital_root(132189), 6);
console.log(digital_root(493193), 2);