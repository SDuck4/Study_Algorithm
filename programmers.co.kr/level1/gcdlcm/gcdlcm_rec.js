function gcd(a, b) {
    return b ? gcd(b, a % b) : Math.abs(a);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function gcdlcm(a, b) {
    return [gcd(a, b), lcm(a, b)];
}

console.log(gcdlcm(3, 12));