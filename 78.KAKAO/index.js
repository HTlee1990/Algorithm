function solution(info, edges) {
  var answer = 0;
  //방문 여부를 기록
  let visited = new Array(info.length).fill(0);
  //탐색하기 편하도록 edges를 정렬 => 완전이진트리가 아니면 의미가 없을 수도...
  edges.sort((a, b) => a[0] - b[0]);
  function dfs(cur, visited, bucket, sheeps, wolfs) {
    console.log(cur);
    visited[cur] = 1;
    if (info[cur] === 0) {
      sheeps += 1;
    } else {
      wolfs += 1;
    }
    //cur와 연결된 노드 찾기
    const connected = edges.filter((el) => el[0] === cur);
    //connected 중 방문 가능한 장소 탐색하여, bucket에 넣기(stack)
    connected.forEach((node) => {
      const destination = node[1];
      const possible = canGo(destination, sheeps, wolfs);
      console.log(destination, possible);
      if (canGo(destination, sheeps, wolfs) && !visited[destination]) {
        bucket.push(destination);
      }
    });
    if (bucket.length === 0) {
      answer < sheeps ? (answer = sheeps) : (answer = answer);
      return;
    }
    const des = bucket.pop();
    dfs(des, visited, bucket, sheeps, wolfs);
  }

  function canGo(index, sheeps, wolfs) {
    if (info[index] === 0) return true;
    return sheeps > info[index] + wolfs;
  }

  dfs(0, visited.slice(), [], 0, 0);
  return answer;
}

console.log(
  solution(
    [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 7],
      [4, 8],
      [6, 9],
      [9, 10],
    ]
  )
);
//노드에 방문 할 때 마다 양과 늑대 모두 따라온다.
//늑대의 숫자가 양의 숫자와 같거나 많아지면, 모두 잡아 먹게 된다.
//잡아먹히지 않도록 하며넛, 최대한 많은 양의 수를 모아서 다시 루트로 돌아오자.

//DFS로 탐색하되, 길이 막힌다면 돌아와서 다시 탐색

//이진 트리모양 => 자식 노드는 최대 2개

//먼저 일반적인 이진 노드를 가진 트리로 만들어야 하나...? => 불가능 cuz 완전이진트리가 아니라서.
//edges를 먼저 탐색하면서, 찾는 방법 뿐...
