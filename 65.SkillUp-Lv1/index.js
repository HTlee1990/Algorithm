class Stack {
  constructor() {
    this.stack = [];
    this.poped = 0;
  }

  previousDoll() {
    return this.stack[this.stack.length - 2];
  }
  lastDoll() {
    return this.stack[this.stack.length - 1];
  }
  //같은 인형을 터뜨림
  deleteSame() {
    this.stack.pop();
    this.stack.pop();
    this.poped += 2;
  }

  //이전의 인형이 새로 들어 간 인형과 같은지 체크
  checkSame() {
    if (this.lastDoll() === this.previousDoll()) return true;
    return false;
  }

  insert(doll) {
    this.stack.push(doll);
    if (this.checkSame()) {
      this.deleteSame();
    }
  }
}

function solution(board, moves) {
  //총 사라진 인형의 개수
  var answer = 0;
  // stack 구조를 이용
  const kakaoDoll = new Stack();
  const size = board.length;
  moves.forEach((m) => {
    const target = m - 1;
    for (let i = 0; i < size; i++) {
      if (board[i][target]) {
        kakaoDoll.insert(board[i][target]);
        //뽑은 후, 0으로 바꿔준다.
        board[i][target] = 0;
        break;
      }
    }
  });
  console.log("check");
  return kakaoDoll.poped;
}
