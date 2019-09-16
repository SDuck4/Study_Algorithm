function solution(n, words) {
  let wordSpoken = new Set();
  let lastLetter = words[0][0];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (lastLetter != word[0] || wordSpoken.has(word)) {
      return [i % n + 1, Math.floor(i / n + 1)];
    } else {
      wordSpoken.add(word);
      lastLetter = word[word.length - 1];
    }
  }
  return [0, 0];
}

console.log(solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']));    // [3, 3]
console.log(solution(5, ['hello', 'observe', 'effect', 'take', 'either', 'recognize', 'encourage', 'ensure', 'establish', 'hang', 'gather', 'refer', 'reference', 'estimate', 'executive']));   // [0, 0]
console.log(solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']));    // [1, 3]