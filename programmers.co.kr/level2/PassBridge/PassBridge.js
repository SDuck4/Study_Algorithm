function solution(bridge_length, weight, truck_weights) {
  let second = 0;
  let bridge = Array(bridge_length).fill(0);
  let sumWeights = 0;
  while(truck_weights.length > 0) {
    sumWeights -= bridge.pop();
    if (sumWeights + truck_weights[0] <= weight) {
      sumWeights += truck_weights[0];
      bridge.unshift(truck_weights.shift());
    } else {
      bridge.unshift(0);
    }
    second += 1;
  }
  second += bridge_length;
  return second;
}

console.log(solution(2, 10, [7, 4, 5, 6]));                                   // 8
console.log(solution(100, 100, [10]));                                        // 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));    // 110