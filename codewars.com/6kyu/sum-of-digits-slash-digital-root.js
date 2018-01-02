/*
    https://www.codewars.com/kata/sum-of-digits-slash-digital-root

    In this kata, you must create a digital root function.

    A digital root is the recursive sum of all the digits in a number.
    Given n, take the sum of the digits of n.
    If that value has two digits, continue reducing in this way until a single-digit number is produced.
    This is only applicable to the natural numbers.

    Here's how it works (Ruby example given):

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