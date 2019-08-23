function solution(priorities, location) {
  let printQueue = [];
  let priorityCount = Array(10).fill(0);
  priorities.forEach((value, index) => {
    printQueue.push({
      index,
      priority: value,
    });
    priorityCount[value] += 1;
  });
  let count = 0;
  while (printQueue.length > 0) {
    let j = printQueue.shift();
    let print = true;
    for (let i = j.priority + 1; i <= 9; i++) {
      if (priorityCount[i] !== 0) {
        print = false;
        break;
      }
    }
    if (print) {
      count += 1;
      priorityCount[j.priority] -= 1;
      if (j.index === location) {
        return count;
      }
    } else {
      printQueue.push(j);
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));         // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0));   // 5