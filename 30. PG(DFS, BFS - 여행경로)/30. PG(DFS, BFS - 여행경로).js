// function solution(tickets) {
//   const answer = ["ICN"];
//   const check = new Array(tickets.length).fill(0);
//   let temp = tickets
//     .sort((a, b) => (a[1] > b[1] ? 1 : -1))
//     .map((el, idx) => [...el, idx]);
//   const result = [];

//   const aux = (next, count, bucket, visited) => {
//     if (count === 1) {
//       next = next.flat();
//       bucket.push(next[1]);
//       result.push(bucket);
//       return;
//     } else if (next.length === 0) {
//       return;
//     }

//     const cur = next.shift();

//     temp.forEach((el) => {
//       if (el[0] === cur[1] && !visited[el[2]]) {
//         const copiedVisited = visited.slice();
//         copiedVisited[el[2]] = 1;
//         const copiedNext = next.slice();
//         copiedNext.push(el);
//         aux(copiedNext, count - 1, bucket.concat(cur[1]), copiedVisited);
//       }
//     });
//   };
//   temp.forEach((el, idx) => {
//     if (el[0] === "ICN") {
//       let copied = check.slice();
//       copied[idx] = 1;
//       aux([temp[idx]], temp.length, ["ICN"], copied);
//     }
//   });
//   return result;
// }

// 항상 인천에서 출발
// 모든 항공권을 이용하여 여행경로 짜기
// * 모든 도시 방문 불가한 경우 주어지지 않음
// 가능 경로가 2개 이상인 경우, 알파벳 순서가 앞서는 경로 return

// 1. 다중가능 경로를 방지하기 위해 알파벳 순서로 정렬.
// 2. 깊이 탐색(DFS)으로 탐색하기

function solution(tickets) {
  let answer = [];

  const DFS = (t, start, bucket) => {
    if (t.length === 0) {
      answer.push(bucket);
    }
    t.forEach((el, idx) => {
      if (el[0] === start) {
        let copied = t.slice();
        copied.splice(idx, 1);
        DFS(copied, el[1], bucket.concat(el[1]));
      }
    });
  };
  DFS(tickets, "ICN", ["ICN"]);
  return answer.sort()[0];
}
