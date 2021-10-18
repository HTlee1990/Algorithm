function solution(clothes) {
  var answer = 1;
  var obj = {};
  for (var i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
  }

  for (var key in obj) {
    answer *= obj[key];
  }

  return answer - 1;
}

// function solution(clothes) {
//   let obj = {};
//   clothes.forEach((type) => {
//     if (obj[type[1]]) {
//       obj[type[1]].push(type[0]);
//     } else {
//       obj[type[1]] = [type[0]];
//     }
//   });
//   let types = Object.keys(obj);
//   let answer = 0;

//   let num = getCombination(obj, types);
//   console.log(num);

//   return answer;
// }

// // 가지고 있는 의상으로 조합가능한 경우의 수 리턴
// // 1. 각 의상을 종류별로 정렬,
// // 2. 의상의 특정 종류 갯수 모든 합 + 각각의 갯수 모두 곱하기.

// // 스파이는 총 1개~ types의 갯수만큼 의상을 고를 수 있다.

// const getCombination = (obj, types) => {
//   let combi = 0;
//   let num = types.length;
//   const aux = (types, count, temp) => {
//     if (count === num) {
//       if (temp.length === 0) {
//         combi + 0;
//         return;
//       }
//       if (temp.length === 1) {
//         combi += temp[0];
//         return;
//       } else {
//         const multiplied = temp.reduce((a, c) => a * c);
//         combi += multiplied;
//       }
//       return;
//     }
//     types.forEach((fixed, idx) => {
//       const res = types.slice(idx + 1);
//       aux(res, count + 1, temp);
//       aux(res, count + 1, temp.concat(obj[fixed].length));
//     });
//   };

//   aux(types, 0, []);
//   return combi;
// };

const clothes = [
  ["yellowhat", "headgear"],
  ["redhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["blacksunglasses", "eyewear"],
  ["green_turban", "headgear"],
  ["brown", "coat"],
];
