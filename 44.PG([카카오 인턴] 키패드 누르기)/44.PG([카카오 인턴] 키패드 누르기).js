function solution(numbers, hand) {
  var answer = "";
  const queue = [];
  const lSet = { 1: "L", 4: "L", 7: "L" };
  const rSet = { 3: "R", 6: "R", 9: "R" };
  let initial = 1;
  while (queue.length > 0 || initial) {
    if (initial) {
      const first = numbers.shift();
      queue.push({ target: first, left: "*", right: "#" });
      initial = 0;
      continue;
    }
    const { target, left, right } = queue.shift();
    if (lSet[target]) {
      answer += "L";
      queue.push({ target, left: target, right: "#" });
    }
  }

  return answer;
}

let temp = 5;
const getDis = (cur, des, count, visited) => {
  if (cur === des) {
    temp = temp >= count ? count : temp;
    return;
  }
  if (count > 4) return;
  let numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  let row = cur <= 3 ? 0 : cur <= 6 ? 1 : cur <= 9 ? 2 : 3;
  let col = cur === 0 ? 1 : cur % 3 === 1 ? 0 : cur % 3 === 2 ? 1 : 2;
  visited[numbers[row][col]] = 1;
  const direction = [
    [-1, 0],
    [+1, 0],
    [0, -1],
    [0, +1],
  ];

  const possible = [];
  direction.forEach((dir) => {
    let [dr, dc] = dir;
    if (
      row + dr >= 0 &&
      row + dr <= 3 &&
      col + dc >= 0 &&
      col + dc <= 2 &&
      !visited[numbers[row + dr][col + dc]]
    ) {
      possible.push([row + dr, col + dc]);
    }
  });

  for (num of possible) {
    if (!visited[numbers[num[0]][num[1]]]) {
      visited[numbers[num[0]][num[1]]] = 1;
      getDis(numbers[num[0]][num[1]], des, count + 1, visited.slice());
    }
  }
};
