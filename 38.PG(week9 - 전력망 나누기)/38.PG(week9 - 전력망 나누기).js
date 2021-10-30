function solution(n, wires) {
  var answer = 100;

  wires.forEach((cut, idx, self) => {
    const res = [...self.slice(0, idx), ...self.slice(idx + 1)];
    const queue = [];
    const temp = [];
    queue.push(res.shift());

    while (queue.length > 0) {
      const cur = queue.pop();
      temp.push(...cur);
      for (let i = 0; i < res.length; i++) {
        if (
          cur[0] === res[i][0] ||
          cur[0] === res[i][1] ||
          cur[1] === res[i][0] ||
          cur[1] === res[i][1]
        ) {
          const next = res[i];
          res.splice(i, 1);
          queue.push(next);
          temp.push(...next);
        }
      }
    }
    const tower = [...new Set(temp)];
    const other = n - tower.length;
    if (answer > Math.abs(other - tower.length))
      answer = Math.abs(other - tower.length);
  });
  return answer;
}

// 전선을 자르되, 최대한 두 전력망이 가지는 송전탑의 개수가 비슷하도록.
// 두 전력망이 가지고 있는 송전탑의 개수 차이를 리턴.

//완전탐색(DFS)나 greedy 로 풀어야 할 듯.
//wires를 순회 하면서 각 wires[i]가 없어졌을때, 몇개씩의 송전탑이 나누어 지는지 계산 해야할 필요가 있다.
//gap 변수를 선언하여, Math.abs(gap)이 작을때마다 answer 바꿔주기.
