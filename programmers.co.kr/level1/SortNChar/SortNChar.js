const alphabet = 'abcdefghijklnmopqrstuvwxyz';

function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] == b[n]) {
      let word = [a, b];
      word.sort();
      return word.indexOf(a) - word.indexOf(b);
    } else {
      return alphabet.indexOf(a[n]) - alphabet.indexOf(b[n]);
    }
  });
}

console.log(solution(['sun', 'bed', 'car'], 1));      // ['car', 'bed', 'sun']
console.log(solution(['abce', 'abcd', 'cdx'], 2));    // ['abcd', 'abce', 'cdx']