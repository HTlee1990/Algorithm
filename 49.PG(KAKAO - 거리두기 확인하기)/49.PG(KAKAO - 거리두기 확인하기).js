function solution(places) {
  var answer = [];
  //우선, 이중배열로 각대기실을 만들자.
  let map = places.map((waitingroom) => {
    let temp = [];
    for (let i = 0; i < waitingroom.length; i++) {
      temp.push(waitingroom[i].split(""));
    }
    return temp;
  });
  //각 대기실을 탐색
  answer = map.map((room) => {
    //어겼는지 아닌지 탐색.
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (room[i][j] === "P") {
          result = [];
          findCorona(
            room.map((r) => r.slice()),
            [i, j],
            0,
            []
          );
          if (result[0] === 0) {
            return 0;
          }
        }
      }
    }
    return 1;
  });
  //거리두기 준수여부 탐색 함수
  var result = [];
  function findCorona(input, [row, col], count, bucket) {
    if (count >= 2) {
      return;
    }
    const direction = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    if (count === 0) {
      input[row][col] = "X";
    }

    for (let [dr, dc] of direction) {
      const [r, c] = [dr + row, dc + col];

      if (!isInRoom(r, c)) continue;
      if (input[r][c] === "P") {
        result.unshift(0);
        return;
      }
      if (input[r][c] !== "X") {
        input[r][c] = "X";
        findCorona(input, [r, c], count + 1, bucket.concat([r, c]));
      }
    }

    // 현재 row, col위치에서 맨해튼거리 2안에서 이동 가능한 곳을 모두 bucket에 담기.
    // 만약, bucket안에 'P'가 있다면, return false;
    // if(isInRoom(r, c) && input[r][c] === "P") return false;

    function isInRoom(r, c) {
      if (0 <= r && 0 <= c && r < 5 && c < 5) return true;
      return false;
    }
  }

  return answer;
}

// P = 응시자가 앉아 있는 자리
// 0 = 빈테이블
// X = 파티션
// 맨해튼 거리가 2이하면 어기는 대기실

//거리두기 지키는 대기실은 1 || 0

//완전 탐색이 필요.
//재귀함수를 사용하자.
//각각의 P에서 맨허튼 거리 2 이내의 범위를 모두 탐색하고, 거리두기 지킨다면, continue; || return false;
