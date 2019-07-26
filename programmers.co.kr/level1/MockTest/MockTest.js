const supojas = [];
supojas.push([1, 2, 3, 4, 5]);
supojas.push([2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5]);
supojas.push([3, 3, 1, 1, 2, 2, 4, 4, 5, 5]);

function solution(answers) {
  let score = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    let answer = answers[i];
    for (let j = 0; j < supojas.length; j++) {
      let supoja = supojas[j];
      if (answer == supoja[i % supoja.length]) {
        score[j]++;
      }
    }
  }
  let maxScore = Math.max(...score);
  return score.reduce((p, c, i) => {
    if (c == maxScore) {
      p.push(i + 1);
    }
    return p;
  }, []);
}

console.log(solution([1, 2, 3, 4, 5]));   // [1]
console.log(solution([1, 3, 2, 4, 2]));   // [1, 2, 3]