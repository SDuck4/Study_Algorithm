function solution(n, from, to, other) {
  var arrMove = [];
  if (from == null) {
    from = 1;
    to = 3;
    other = 2;
  }
  if (n == 1) {
    arrMove.push([from, to]);
  }
  else {
    arrMove = arrMove.concat(solution(n - 1, from, other, to));
    arrMove.push([from, to]);
    arrMove = arrMove.concat(solution(n - 1, other, to, from));
  }
  return arrMove;
}

console.log(solution(2));   // [[1, 2], [1, 3], [2, 3]]