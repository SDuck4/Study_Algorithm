const memoIsPrimeNumber = { 0: false, 1: false };
function isPrimeNumber(number) {
  if (memoIsPrimeNumber[number] == null) {
    let prime = true;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        prime = false;
        break;
      }
    }
    memoIsPrimeNumber[number] = prime;
  }
  return memoIsPrimeNumber[number];
}

class Node {

  constructor(number, remain) {
    this.number = number;
    this.remain = remain;
  }

  next() {
    let nextNode = [];
    let nextDigit = this.remain.slice();
    for (let i = 0; i < nextDigit.length; i++) {
      if (this.number === '' && nextDigit[i] === '0') {
        continue;
      }
      let newNumber = this.number + nextDigit[i];
      let newRemain = nextDigit.slice();
      newRemain.splice(i, 1);
      nextNode.push(new Node(newNumber, newRemain));
    }
    return nextNode;
  }

}

function solution(numbers) {
  let search = [];
  let done = [];
  let root = new Node('', numbers.split(''));
  search.push(root);
  while (search.length > 0) {
    let node = search.shift();
    let nextNode = node.next();
    search = search.concat(nextNode);
    if (node.number !== '') {
      done.push(node);
    }
  }
  let primeNumber = new Set();
  done.forEach(node => {
    if (isPrimeNumber(parseInt(node.number))) {
      primeNumber.add(node.number);
    }
  });
  return primeNumber.size;
}

console.log(solution('17'));    // 3
console.log(solution('011'));   // 2