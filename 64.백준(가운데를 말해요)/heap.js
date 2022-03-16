// let input = require("fs").readFileSync("eg.txt").toString().trim().split("\n");
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// //출력시, 한줄에 하나씩 말해야 하는 수를 출력해야 한다.
const N = +input.shift();
// console.log("input is ", input);
// const input = ["1", "5", "2", "10", "-99", "7", "5"];
class Heap {
  constructor(func) {
    this.heap = [];
    this.func = func;
    if (func === undefined) {
      this.func = (a, b) => a - b;
    }
  }

  removeTop() {
    if (this.size() === 0) return null;
    //root 인덱스 삭제
    const top = this.heap.shift();
    //마지막 인덱스 삭제
    const last = this.heap.pop();
    if (this.size() !== 0) {
      //last를 0번째 인덱스에 넣고; 다시 정렬
      this.insert(last);
      this.upHeap(this.size() - 1);
      // this.heap[0] = last;
      // this.downHeap(0);
    }
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }
  left(index) {
    return index * 2 + 1;
  }
  right(index) {
    return index * 2 + 2;
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
  hasChild(pos) {
    return pos * 2 + 1 < this.size();
  }
  hasRight(pos) {
    if (pos * 2 + 2 < this.size()) return true;
    else return false;
  }
  //Heap을 root부터 아래로 내려가면서 정렬
  downHeap(pos) {
    //자식노드가 있는 경우 계속 반복
    while (this.hasChild(pos)) {
      //left, right 자식노드 index
      let left = this.left(pos);
      let right = this.right(pos);
      //func에 따라 작은 값 혹은 큰 값을 찾는다.
      let target;
      if (!this.hasRight(pos)) target = left;
      else if (this.func(this.heap[left], this.heap[right]) > 0) target = left;
      else target = right;

      //만약, parent가 더 작다면, swap 실행하고, 자식노드를 부모노드로
      if (this.func(this.heap[target], this.heap[pos]) > 0) {
        this.swap(pos, target);
        pos = target;
      } else {
        break;
      }
    }
  }
  //마지막 노드에서 위로 올라가면서 정렬한다.
  upHeap(pos) {
    while (pos !== 0) {
      let p = this.parent(pos);
      if (this.func(this.heap[p], this.heap[pos]) > 0) {
        this.swap(pos, p);
        pos = p;
      } else {
        break;
      }
    }
  }

  //insert
  insert(value) {
    // 1-1. 힙의 root 노드에 넣는다.
    this.heap.unshift(value);
    this.downHeap(0);
    // 1-2. 새로운 노드를 마지막 요소로 넣는 경우
    // this.heap.push(value);
    // this.upHeap(this.size() - 1);
  }

  top() {
    return this.heap[0];
  }
}

// const h = new Heap();
// const h = new Heap((a, b) => b - a);
// input.forEach((el) => {
//   h.insert(+el);
// });

function solution() {
  const maxQ = new Heap();
  const minQ = new Heap((a, b) => b - a);

  for (let i = 0; i < input.length; i++) {
    const cur = input[i];

    if (maxQ.size() > minQ.size()) {
      minQ.insert(cur);
    } else {
      maxQ.insert(cur);
    }

    if (minQ.size() !== 0) {
      if (minQ.top() < maxQ.top()) {
        const minTop = minQ.removeTop();
        const maxTop = minQ.removeTop();

        minQ.insert(maxTop);
        maxQ.insert(minTop);
      }
    }

    console.log(maxQ.top());
  }
}

solution();
