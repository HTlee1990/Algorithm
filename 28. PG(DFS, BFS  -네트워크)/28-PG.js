function solution(n, computers) {
  let answer = 0;
  let visited = new Array(n).fill(0);

  for (let i = 0; i < computers.length; i++) {
    let dest = [];
    if (!visited[i]) {
      dest.push(i);
      answer++;
    }
    while (dest.length > 0) {
      const cur = dest.shift();
      visited[cur] = 1;
      for (let j = 0; j < n; j++) {
        if (computers[cur][j] && cur !== j && !visited[j]) {
          dest.push(j);
        }
      }
    }
  }
  return answer;
}

// 각 네트워크가 어디까지 연결되어 있는지 파악하는 것이 중요.
// visited라는 배열로 체크를 하면서, 어디까지 연결됐는지 파악해야 할듯.
// 주의점?
// 1. 만약 연결이 아예 되지 않은 곳이라면, 그 자체로 하나의 네트워크로 봐야한다.
// 2. 본인 자신에게는 항상 연결된 것으로 나온다.
