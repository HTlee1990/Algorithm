// let input = require("fs").readFileSync("eg.txt").toString().trim().split("\n");
// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
//출력시, 한줄에 하나씩 말해야 하는 수를 출력해야 한다.
// const N = +input.shift();
// console.log("input is ", input);
const input = ["1", "5", "2", "10", "-99", "7", "5"];
class Heap {
  constructor(func) {
    this.heap = [];
    this.func = func;
    if (func === undefined) {
      this.func = (a, b) => a - b;
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
      else if (this.func(this.heap[left], this.heap[right]) >= 0) target = left;
      else target = right;

      //만약, parent가 더 작다면, swap 실행하고, 자식노드를 부모노드로
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
      if (this.func(this.heap[p], this.heap[pos]) < 0) {
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
}

const h = new Heap((a, b) => b - a);

input.forEach((el) => {
  h.insert(+el);
});
console.log(h.heap);

// class Heap {
//   constructor() {
//     //0번째 index는 필요 없는 요소
//     this.minHeap = [];
//     this.maxHeap = [];
//   }
//   //부모노드 인덱스 구하는 메소드
//   getParent(index) {
//     return Math.floor(index / 2);
//   }
//   getChild(index, arr) {
//     const [left, right] = [index * 2 + 1, index * 2 + 2];
//     if (left > arr.length - 1) return undefined;
//     //left만 있고, right는 없는 경우 바로 return left
//     if (right > arr.length - 1) return left;
//     return arr[left] > arr[right] ? left : right;
//   }
//   getSmaller(index, arr) {
//     const [left, right] = [index * 2 + 1, index * 2 + 2];
//     if (left > arr.length - 1) return undefined;
//     if (right > arr.length - 1) return left;
//     return arr[left] < arr[right] ? left : right;
//   }

//   //부모 노드와 자식노드 비교하여 스왑 until 더이상 자식 노드가 크지 않을 때 까지.
//   maxHeapify(parent) {
//     //sort maxHeap
//     //1. 자식노드 중 큰 값을 root노드와 비교
//     let biggerChild = this.getChild(parent, this.maxHeap);
//     //2. 자식노드가 부모노드보다 크다면 스왑, until it doens't
//     while (this.maxHeap[parent] < this.maxHeap[biggerChild]) {
//       //2-1. 스왑
//       [this.maxHeap[parent], this.maxHeap[biggerChild]] = [
//         this.maxHeap[biggerChild],
//         this.maxHeap[parent],
//       ];
//       //2-2. 자식노드를 부모노드로, 자식노드 index는 새로 구하기
//       [parent, biggerChild] = [
//         biggerChild,
//         this.getChild(biggerChild, this.maxHeap),
//       ];
//     }
//   }
//   minHeapify(parent) {
//     let smallChild = this.getSmaller(parent, this.minHeap);
//     //2. 자식노드가 부모노드보다 크다면 스왑, until it doens't
//     while (this.minHeap[parent] > this.minHeap[smallChild]) {
//       //2-1. 스왑
//       [this.minHeap[parent], this.minHeap[smallChild]] = [
//         this.minHeap[smallChild],
//         this.minHeap[parent],
//       ];
//       //2-2. 자식노드를 부모노드로, 자식노드 index는 새로 구하기
//       [parent, smallChild] = [
//         smallChild,
//         this.getSmaller(smallChild, this.minHeap),
//       ];
//     }
//   }
//   //heap에 요소를 push해주는 메소드
//   insertEl(el) {
//     //1. maxHeap.length 는 minHeap보다 1크거나 같다. 즉, 두 길이의 차가 1보다 크다면, minHeap에 넣자.
//     if (this.maxHeap.length - this.minHeap.length >= 1) {
//       this.minHeap.unshift(el);
//     } else {
//       this.maxHeap.unshift(el);
//     }
//     //2. minHeap의 모든 요소는 maxHeap의 탑 보다 크다. 즉, minHeap의 탑은 maxHeap의 탑보다 항상 커야 한다.
//     //   만약 작다면,
//     if (this.maxHeap[0] > this.minHeap[0]) {
//       // 스왑
//       [this.maxHeap[0], this.minHeap[0]] = [this.minHeap[0], this.maxHeap[0]];
//     }
//     //3.heapifiy를 두 배열에 모두 시행.
//     this.maxHeapify(0);
//     this.minHeapify(0);
//     console.log(this.maxHeap[0]);
//   }
// }

// const h = new Heap();

// input.forEach((el) => {
//   h.insertEl(+el);
// });
