function solution(participant, completion) {
  let race = {};
  for (let i in participant) {
    let p = participant[i];
    if (race[p] == null) {
      race[p] = 1;
    } else {
      race[p] += 1;
    }
  }
  for (let i in completion) {
    let c = completion[i];
    race[c] -= 1;
  }
  for (let p in race) {
    if (race[p] == 1) {
      return p;
    }
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));   // leo
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));   // vinko
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));    // mislav