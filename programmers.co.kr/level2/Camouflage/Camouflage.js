function solution(clothes) {
  let clothMap = {};
  for (let i = 0; i < clothes.length; i++) {
    let name = clothes[i][0];
    let category = clothes[i][1];
    if (clothMap[category] == null) {
      clothMap[category] = ['none'];
    }
    clothMap[category].push(name);
  }
  let combination = 1;
  for (let i in clothMap) {
    let category = clothMap[i];
    combination *= category.length;
  }
  return combination - 1;
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));    // 5
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]));                // 3