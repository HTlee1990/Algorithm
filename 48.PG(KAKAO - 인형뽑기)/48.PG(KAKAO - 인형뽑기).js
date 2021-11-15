function solution(board, moves) {
  var answer = 0;
  const size = board.length;
  //stack이라고 생각하고, 쌓으면서, 이전의 것이 지금이랑 같은지 체크하면 될 듯!
  //만약, 같다면, 터뜨리고, answer ++;
  const stack = [];
  moves.forEach((move) => {
    for (let i = 0; i < size; i++) {
      if (board[i][move - 1]) {
        //이전에 쌓아 놓은 값이랑 같은지 비교가 필요.
        const prev = stack[stack.length - 1];
        const cur = board[i][move - 1];
        //인형을 뽑았기 때문에, 0으로 바꿔준다.
        board[i][move - 1] = 0;
        //이전에 뽑은 인형이 현재 인형과 같다면, 없애주고 answer += 2;
        if (prev === cur) {
          stack.pop();
          answer += 2;
        } else {
          //같지 않다면, stack에 쌓아주고,
          stack.push(cur);
        }
        //더이상 탐색할 필요 없음
        break;
      }
    }
  });
  return answer;
}

//행열의 행, 열을 반대로 만들면 훨씬 간편 할 것 같은데...? => 시간복잡도 O(n^2)
//그냥 그대로 한다면, board[i][move]를 size만큼 탐색해야 한다. => 이게 더 시간복잡도가 낮을듯.
