function solution(s) {
  let originalWords = s.split(' ');
  let strangeWords = [];
  for (let i = 0; i < originalWords.length; i++) {
    let originalWord = originalWords[i];
    let strangeWord = [];
    for (let j = 0; j < originalWord.length; j++) {
      if (j % 2 == 0) {
        strangeWord.push(originalWord[j].toUpperCase());
      } else {
        strangeWord.push(originalWord[j].toLowerCase());
      }
    }
    strangeWords.push(strangeWord.join(''));
  }
  return strangeWords.join(' ');
}

console.log(solution('try hello world'));   // TrY HeLlO WoRlD