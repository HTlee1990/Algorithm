function solution(info, edges) {
  //최대 양의 숫자
  var maxSheep = 0;
  const length = info.length;
  //각 노드에 방문가능 한지여부 판단
  let connectedNode = Array.from({ length }, () => []);

  //결국 DP문제다.
  // 각 노드에 가지고 갈 수 있는 최대 양의 개수를 구하고, 그 값을 answer과 비교하여 return 한다.
  // 연결된 자식노드에

  function dfs(currentNode, sheep, wolf, stack) {
    console.log("currentNode", currentNode, "stack", stack);
    const position = stack.indexOf(currentNode);
    stack = stack.slice();
    if (info[currentNode]) {
      wolf += 1;
    } else {
      sheep += 1;
    }

    if (wolf === sheep) return;
    maxSheep = Math.max(sheep, maxSheep);
    //1. 현재 위치 노드와 연결된 자식 노드들을 stack에 넣어준다.
    if (connectedNode.length) {
      stack.push(...connectedNode[currentNode]);
    }
    stack.splice(position, 1);
    for (let node of stack) {
      dfs(node, sheep, wolf, stack);
    }
  }

  for (let i = 0; i < edges.length; i++) {
    const [from, to] = edges[i];
    if (connectedNode[from]) {
      connectedNode[from].push(to);
    } else {
      connectedNode[from] = [to];
    }
  }

  dfs(0, 0, 0, [0]);
  return maxSheep;
}

// debugger;
// solution(
//   [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
//   [
//     [0, 1],
//     [1, 2],
//     [1, 4],
//     [0, 8],
//     [8, 7],
//     [9, 10],
//     [9, 11],
//     [4, 3],
//     [6, 5],
//     [4, 6],
//     [8, 9],
//   ]
// );

function isPossibleNode(cur, des, sheep, wolf) {
  if (info[cur] === 0) return true;
  else if (sheep > wolf + 1) return true;
  else return false;
}

console.log(
  solution(
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
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
