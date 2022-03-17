// let input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

class Heap {
  constructor(func) {
    this.heap = [];
    this.func = func;
    //만약, func을 입력 받지 못했다면, maxHeap으로 만든다.
    if (func === undefined) {
      this.func = (a, b) => a - b;
    }
  }
  removeTop() {
    if (this.size() === 0) return null;
    //루트 노드와 마지막 자식노드를 스왑하고
    this.swap(0, this.size() - 1);
    //마지막 노드를 삭제한다.
    const deleted = this.heap.pop();
    //루트노드부터 아래로 다시 정렬해줘야 한다.
    if (this.size() > 1) {
      this.downHeap(0);
    }
    return deleted;
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

  swap(x, y) {
    let tmp = this.heap[x];
    this.heap[x] = this.heap[y];
    this.heap[y] = tmp;
  }
  hasChild(pos) {
    // const [left, len] = [this.left(pos), this.size()];
    if (this.left(pos) < this.size()) {
      return true;
    }
    return false;
  }
  hasRight(pos) {
    if (this.right(pos) < this.size()) return true;
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
      //만약, 오른쪽 노드가 없다면, 왼쪽노드밖에 없는 것이니, 바로 left
      if (!this.hasRight(pos)) target = left;
      //maxHeap인 경우, left가 더 클 경우 left를, minHeap인 경우, left가 더 작을 경우 left
      else if (this.func(this.heap[left], this.heap[right]) > 0) target = left;
      //나머지 경우는 right
      else target = right;

      //target과 parent 노드인 pos를 비교
      //만약, parent가 더 작다면, swap 실행하고, 자식노드를 부모노드로
      // console.log(this.func(this.heap[target], this.heap[pos]) >= 0);
      if (this.func(this.heap[target], this.heap[pos]) >= 0) {
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
        break;
      }
      this.swap(p, pos);
      pos = p;
    }
  }

  //insert
  insert(value) {
    // 1-1. 힙의 root 노드에 넣는다.
    this.heap.unshift(value);
    this.downHeap(0);
    // 1-2. 새로운 노드를 마지막 요소로 넣는 방법
    // this.heap.push(value);
    // this.upHeap(this.size() - 1);
  }

  top() {
    return this.heap[0];
  }
}

// function solution() {
//   const maxQ = new Heap();
//   const minQ = new Heap((a, b) => b - a);

//   input.forEach((el) => {
//     el = +el;
//     //만약, maxQ의 사이즈가 이미 minQ보다 크다면, 무조건 minQ에 insert
//     if (maxQ.size() > minQ.size()) {
//       minQ.insert(el);
//     }
//     //나머지 경우는 모두 maxQ insert
//     else {
//       maxQ.insert(el);
//     }
//     //각 요소의 탑 비교
//     //minQ의 탑은 항상 maxQ의 탑보다 커야 한다.
//     const minTop = minQ.top();
//     const maxTop = maxQ.top();
//     if (minQ.size() === 0) {
//       if (minTop <= maxTop) {
//         minQ.removeTop();
//         maxQ.removeTop();
//         minQ.insert(maxTop);
//         maxQ.insert(minTop);
//       }
//       //정렬이 끝났다면, maxQ의 탑을 찍어준다.
//     }
//     console.log(maxQ.top());
//   });
// }
function solution(input) {
  let maxQueue = new Heap();
  let minQueue = new Heap((a, b) => {
    return b - a;
  });

  const result = [];
  for (let i = 1; i < input.length; i++) {
    let num = parseInt(input[i]);
    if (minQueue.size() < maxQueue.size()) {
      minQueue.insert(num);
    } else {
      maxQueue.insert(num);
    }
    if (minQueue.size() !== 0) {
      if (minQueue.top() < maxQueue.top()) {
        let minMin = minQueue.removeTop();
        let maxMin = maxQueue.removeTop();
        minQueue.insert(maxMin);
        maxQueue.insert(minMin);
      }
    }
    // result.push(maxQueue.top());
    console.log(maxQueue.top());
  }
  // console.log(result);
}

// solution(input);
// //test코드
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
