// let input = require("fs").readFileSync("eg.txt").toString().trim().split("\n");
// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let input = ["4 7", "6 13", "4 8", "3 6", "5 12"];
let [maxN, maxW] = input
  .shift()
  .split(" ")
  .map((v) => +v);

const items = input.map((ele) => ele.split(" ").map((v) => +v));

//최적화 풀이.
function solution() {
  let memo = Array(maxW + 1).fill(0);
  let answer = 0;

  //각 아이템을 모두 순회 한다.
  items.forEach(([w, v]) => {
    //
    for (let i = maxW; i >= w; i--) {
      memo[i] = Math.max(memo[i], memo[i - w] + v);
    }
  });
  return memo[maxW];
}
console.log(solution());

//아래 풀이는 풀리기는 하였으나, 2000ms정도 소요된다.

// const WhoIsBigger = (a, b) => (a > b ? a : b);
// function solution() {
//   for (let i = 0; i < memo.length; i++) {
//     memo[i] = new Array(maxW + 1);

//     for (let j = 0; j < maxW + 1; j++) {
//       //i 혹은 j 가 0이라면, 담을 수 있는 아이템 없으므로 무조건 0
//       if (i === 0 || j === 0) memo[i][j] = 0;
//       //만약, 해당 아이템이 담을 수 있는 물건이라면
//       else if (items[i - 1][0] <= maxW) {
//         memo[i][j] = WhoIsBigger(
//           items[i - 1][1] + memo[i - 1][j - items[i - 1][0]],
//           memo[i - 1][j]
//         );
//       } else {
//         memo[i][j] = memo[i - 1][j];
//       }
//     }
//   }
//   return memo[maxN][maxW];
// }

console.log(solution());
// solution();

// //아래의 코드는 시간초과 발생 -> 시간 복잡도 O(n^2)
// function solution(max, numbers) {
//   const [maxN, maxW] = max;
// const list = numbers.map((v) => {
//   const temp = [];
//   temp.push(Number(v[0]));
//   temp.push(Number(v[1]));
//   return temp;
// });
//   //제약조건: maxW 보다 작아야 한다.
//   const knapsack = (leftW, value, idx) => {
//     //재귀 종료조건 - 만약, 모든 아이템을 다 담았다면 그대로 리턴
//     if (maxN === idx) {
//       return value;
//     }
//     const [w, v] = list[idx];

//     //만약, 다음 항목을 담았을 때 무게를 초과 한다면, 해당 항목 스킵.
//     if (leftW - w < 0) {
//       return knapsack(leftW, value, idx + 1);
//     } else
//       return Math.max(
//         knapsack(leftW - w, value + v, idx + 1),
//         knapsack(leftW, value, idx + 1)
//       );
//   };

//   return knapsack(maxW, 0, 0);
// }

// console.log(solution(max, numbers));
