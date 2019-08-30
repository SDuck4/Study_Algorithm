function solution(s) {
  return s.split(' ').map(word => {
    if (word === '') {
      return '';
    }
    let first = word[0].toUpperCase();
    let remain = word.slice(1).toLowerCase();
    return first + remain;
  }).join(' ');
}

console.log(solution('3people unFollowed me'));   // 3people Unfollowed Me
console.log(solution('for the last week'));       // For The Last Week