// let input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

class PriorityQueue {
  constructor(comp) {
    this.heap = [];
    this.comp = comp;
    if (comp == undefined) {
      this.comp = (a, b) => {
        return a - b;
      };
    }
  }
  removeMin() {
    if (this.isEmpty()) {
      return null;
    }
    let min = this.heap[0];
    let last = this.heap.pop();
    if (this.size() != 0) {
      this.heap[0] = last;
      this.downHeap(0);
    }
    return min;
  }
  downHeap(pos) {
    while (this.isInternal(pos)) {
      let s = null;

      //왼쪽과 오른쪽 자식중에 작은 것을 s에 넣는다.
      if (!this.hasRight(pos)) {
        s = this.left(pos);
      } else if (
        this.comp(this.heap[this.left(pos)], this.heap[this.right(pos)]) <= 0
      ) {
        s = this.left(pos);
      } else {
        s = this.right(pos);
      }
      if (this.comp(this.heap[s], this.heap[pos]) < 0) {
        this.swap(pos, s);
        pos = s;
      } else {
        break;
      }
    }
  }
  upHeap(pos) {
    while (!this.isRoot(pos)) {
      let p = this.parent(pos);
      if (this.comp(this.heap[p], this.heap[pos]) <= 0) {
        break;
      }
      this.swap(p, pos);
      pos = p;
    }
  }
  swap(x, y) {
    let tmp = this.heap[x];
    this.heap[x] = this.heap[y];
    this.heap[y] = tmp;
  }
  parent(pos) {
    return parseInt((pos - 1) / 2);
  }
  left(pos) {
    return 2 * pos + 1;
  }
  right(pos) {
    return 2 * pos + 2;
  }
  size() {
    return this.heap.length;
  }
  isInternal(pos) {
    return this.hasLeft(pos);
  }
  isRoot(pos) {
    if (pos == 0) return true;
    return false;
  }
  hasLeft(pos) {
    if (this.left(pos) < this.size()) {
      return true;
    }
    return false;
  }
  hasRight(pos) {
    if (this.right(pos) < this.size()) {
      return true;
    }
    return false;
  }
  isEmpty() {
    return this.heap.length == 0;
  }
  insert(value) {
    this.heap.push(value);
    this.upHeap(this.size() - 1);
  }
  min() {
    return this.heap[0];
  }
}

function solution(input) {
  let ans = "";
  let maxQueue = new PriorityQueue((a, b) => {
    return b - a;
  });
  let minQueue = new PriorityQueue();
  for (let i = 1; i < input.length; i++) {
    let num = parseInt(input[i]);
    //maxQueue.insert(num);
    if (minQueue.size() < maxQueue.size()) {
      minQueue.insert(num);
    } else {
      maxQueue.insert(num);
    }
    if (!minQueue.isEmpty()) {
      if (minQueue.min() < maxQueue.min()) {
        let minMin = minQueue.removeMin();
        let maxMin = maxQueue.removeMin();
        minQueue.insert(maxMin);
        maxQueue.insert(minMin);
      }
    }
    ans += maxQueue.min() + "\n";
    //console.log(maxQueue.min());
  }
  console.log(ans.trimEnd());
}
// solve(input);
(() => {
  // if (!test) return;
  console.time("Array Insert");
  solution([9, 1, -2, 3, -4, 5, -6, 7, -8, 9]);
  console.timeEnd("Array Insert");
  console.log("--");
  console.time("Array Insert");
  solution([9, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  console.timeEnd("Array Insert");
  console.log("--");
  console.time("Array Insert");
  solution([9, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  console.timeEnd("Array Insert");
  console.log("--");
  console.time("Array Insert");
  solution([5, 1, -1, 1, -1, 1]);
  console.timeEnd("Array Insert");
  console.log("--");
  console.time("Array Insert");
  solution([5, 1, 0, 2, -1, 3]);
  console.timeEnd("Array Insert");
  console.log("--");
  console.time("Array Insert");
  solution([5, 4, 0, 3, 1, 2]);
  console.timeEnd("Array Insert");
  console.log("--");
  console.time("Array Insert");
  solution([1, 100]);
  console.timeEnd("Array Insert");
  console.log("--");
  console.time("Array Insert");
  solution([5, 1, 1, 1, 1, 1]);
  console.timeEnd("Array Insert");
  console.log("--");
  console.time("Array Insert");
  solution([7, 1, 5, 2, 10, -99, 7, 5]);
  console.timeEnd("Array Insert");
  console.log("--");
  console.time("Array Insert");
  solution([10, 1, 1, -1, -1, -1, 1, 1, 1, -1, -1]);
  console.timeEnd("Array Insert");
  console.log("--");
  console.time("Array Insert");
  solution([6, -1, 1, 2, -2, -3, 3]);
  console.timeEnd("Array Insert");
  console.log("--");
  console.time("Array Insert");
  solution([6, 5, -5, 4, -4, 3, -3]);
  console.timeEnd("Array Insert");
})();
