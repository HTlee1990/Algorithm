function solution(numbers, hand) {
  var answer = "";

  function getDis(cur, target) {
    let dis = 0;
    dis += Math.abs(cur[0] - target[0]);
    dis += Math.abs(cur[1] - target[1]);
    return dis;
  }

  const lSet = { 1: "L", 4: "L", 7: "L" };
  const rSet = { 3: "R", 6: "R", 9: "R" };
  const map = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  let left = "*",
    right = "#";
  for (let i = 0; i < numbers.length; i++) {
    let target = numbers[i];
    if (lSet[target]) {
      answer += "L";
      continue;
    }
    if (rSet[target]) {
      answer += "R";
    } else {
      const fromLeft = getDis(map[left], map[target]);
      const fromRight = getDis(map[right], map[target]);
      //어떤 손 쓸지 정하기
      const whichHand =
        fromLeft < fromRight
          ? "L"
          : fromLeft > fromRight
          ? "R"
          : hand === "left"
          ? "L"
          : "R";
      answer += whichHand;
    }
  }

  return answer;
}
