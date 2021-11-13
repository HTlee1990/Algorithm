// 최단거리 문제는 보통 아래와 같은 행렬이 주어지고 시작지점에서 목표지점까지 어떻게 이동을 하는지를 묻는 문제이다. (여기에서 1은 장애물을 의미한다.)

// ```
// const room = [
//   [0, 0, 0, 0],
//   [0, 1, 1, 0],
//   [0, 1, 0, 0],
//   [0, 0, 1, 1],
// ];

// const start = [3, 0]
// const destination = [2, 2]
// ```

// **이런 최단거리 문제는 크게 2가지로 나누어 지는 것 같다.**

// 1. **단순하게 장애물을 피해서 start → destination 까지의 최단거리를 구하는 것.**
// 2. **여러가지 제약조건(장애물, 회전, 한번에 이동가능거리 등)을 두고 최단거리를 구하는 것**

// ### **우선 최단 거리 문제를 푸는 것에 있어서 가장 중요한 Key Point !!!**

// 바로 시작 지점부터 도착지점까지 **완전탐색**을 하면서,
// **해당지점 까지 걸린 step을 직접 room에 적어 나가는 것**이다.

// ### 그러므로 이용가능한 방법은 보통
// 재귀나 queue를 이용한 while문 두개로 크게 나누어 지는 것 같다.
// (부족한 현재 내 지식으로는 그렇다...)

// 아래는 실제로 위의 부분들을 코드에 어떻게 실제로 적용하는 지에 대한 부분이다.

// **====================정답 스포일러 주의=====================**

// # 코드 정리

// 1. 단순 최단거리 탐색문제.(재귀를 이용해 풀어보기)

// 아래의 함수는

// 1. 이중배열인 room
// 2. 시작지점의 좌표인 src
// ex)[2, 3]
// 3. 도착지점의 좌표인 dst
// ex[4, 4]

// 를 인자로 받아 최단 거리를 구하는 방식이다.

function solution(room, src, dst) {
  const M = room.length;
  const N = room[0].length;

  //재귀를 이용하기 위한 보조함수
  const aux = (position, step) => {
    const [row, col] = position;
    //현재 이동한 장소가 범위를 벗어나는지 확인; ifso, 재귀종료;
    if (row < 0 || row >= M || col < 0 || col >= N) return;
    //만약, 처음 오는 장소이거나, 최단거리가 아닌 다른 수로 기록되어 있다면
    if (room[row][col] === 0 || room[row][col] > step) {
      room[row][col] = step;
    }
    //그 이외의 경우 모두 재귀종료;
    else return;

    //4방향으로 모두 재귀실행.
    aux([row - 1, col], step + 1);
    aux([row + 1, col], step + 1);
    aux([row, col - 1], step + 1);
    aux([row, col + 1], step + 1);
  };

  const [dR, dC] = dst;
  aux(src, 0);
  return room[dR][dC];
}

// 1. 여러제약조건이 있는 최단거리 탐색문제.(재귀를 이용해 풀어보기)

// **객체를 이용한 다른분의 코드이다.**

function solution(priorities, location) {
  //가장 처음에 location에 해당하는지 여부를 바로 marking을 하여 객체로 저장한 모습이다.
  var list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));
  var count = 0;

  //while문의 조건을 참으로 주어 무조건 작동하게 한 부분이다.
  while (true) {
    var cur = list.shift();
    //some을 통해 더 큰수가 있는지 여부 부분을 구현한 부분이다.
    if (list.some((t) => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}

// 위의 코드를 보고 내가 느낀 점은,

// 1. **무언가 내 목표에 marking을 하고 추적을 하고 싶다면, 배열 안의 객체를 이용하면 참 편하겠다.**
// 2. **while문을 무조건 돌리고 싶을때는, while(true)를 사용하자.**
// 3. 해당 숫자가 큰지 작은지 판단하기 위해서는 for문을 통해 비교하기보다는,
// 내가 했던것 처럼 애초에 **처음부터 max라고 가장 큰수를 변수에 저장하여 그 변수와 비교**하거나,
// **some과 같은 내장함수를 이용하자.**
