let scores = [
  [100, 90, 98, 88, 65],
  [50, 45, 99, 85, 77],
  [47, 88, 95, 80, 67],
  [61, 57, 100, 80, 65],
  [24, 90, 94, 75, 65],
];

// let solution = (scores) =>
//   scores[0]
//     .map((_, c) => scores.map((r) => r[c]))
//     .map((s, i) => [...s.splice(i, 1), s])
//     .map(([m, s]) =>
//       Math.min(...s) <= m && m <= Math.max(...s) ? [m, ...s] : s
//     )
//     .map(
//       (s) =>
//         "FDDCBAA"[
//           Math.max(parseInt(s.reduce((a, c) => a + c) / s.length / 10) - 4, 0)
//         ]
//     )
//     .join("");

const solution = (scores) => {
  let answers = [];

  let arr = scores[0]
    .map((_, i) => scores.map((n) => n[i])) //세로 배열을 가로 배열로 바꾸기.
    .map((m, idx) => [...m.splice(idx, 1), m]); //본인이 평가한 점수와 그렇지 않은 부분으로 나누기.

  answer = arr
    .map(([m, o]) =>
      Math.min(...o) <= m && m <= Math.max(...o) ? [m, ...o] : o
    )
    .map(
      (s) =>
        "FDDCBAA"[
          Math.max(parseInt(s.reduce((a, c) => a + c) / s.length / 10) - 4, 0)
        ]
    );
  return answer.join("");
};

// function solution(scores) {
//   let answer = "";
//   let sum = 0;
//   for (let i = 0; i < scores.length; i++) {
//     sum = 0;
//     let extremeScore = {
//       max: { value: 0, num: 0 },
//       min: { value: 100, num: 0 },
//     };

//     for (let j = 0; j < scores[i].length; j++) {
//       let max = extremeScore.max.value;
//       let min = extremeScore.min.value;
//       if (scores[j][i] > max) {
//         extremeScore.max.value = scores[j][i];
//         extremeScore.max.num = 1;
//       } else if (scores[j][i] === max) {
//         extremeScore.max.num += 1;
//       }
//       if (scores[j][i] < min) {
//         extremeScore.min.value = scores[j][i];
//         extremeScore.min.num = 1;
//       } else if (scores[j][i] === min) {
//         extremeScore.min.num += 1;
//       }
//       sum += scores[j][i];
//     }

//     let length = scores[i].length;
//     if (scores[i][i] === extremeScore.max.val    ue && extremeScore.max.num === 1) {
//       sum -= scores[i][i];
//       length -= 1;
//     } else if (
//       scores[i][i] === extremeScore.min.value &&
//       extremeScore.min.num === 1
//     ) {
//       sum -= scores[i][i];
//       length -= 1;
//     }
//     let ave = sum / length;

//     if (ave >= 90) {
//       answer = answer.concat("A");
//       continue;
//     } else if (ave >= 80) {
//       answer = answer.concat("B");
//       continue;
//     } else if (ave >= 70) {
//       answer = answer.concat("C");
//       continue;
//     } else if (ave >= 50) {
//       answer = answer.concat("D");
//       continue;
//     } else {
//       answer = answer.concat("F");
//       continue;
//     }
//   }
//   return answer;
// }

// function solution(scores) {
//   let answer = "";

//   //'유일한' 최고점, 최저점인지를 판단하는 것이 중요.
//   for (let i = 0; i < scores.length; i++) {
//     let extremeScore = {
//       max: { value: 0, num: 0 },
//       min: { value: 100, num: 0 },
//     };
//     let sum = 0;
//     for (let j = 0; j < scores.length; j++) {
//   let max = extremeScore.max.value;
//   let min = extremeScore.min.value;
//   if (scores[i][j] > max) {
//     extremeScore.max.value = scores[i][j];
//     extremeScore.max.num = 1;
//   }
//   if (scores[i][j] === max) {
//     extremeScore.max.num += 1;
//   }
//   if (scores[i][j] < min) {
//     extremeScore.min.value = scores[i][j];
//     extremeScore.max.num = 1;
//   }
//   if (scores[i][j] === min) {
//     extremeScore.min.num += 1;
//   }
//   sum += scores[i][j];
//     }

// if (scores[i][i] === extremeScore.max.value && extremeScore.max.num === 1) {
//   sum -= scores[i][i];
// } else if (
//   scores[i][i] === extremeScore.min.value &&
//   extremeScore.min.num === 1
// ) {
//   sum -= scores[i][i];
// }
// let ave = sum / scores[i].length;

// if (ave >= 90) {
//   answer = answer.concat("A");
//   continue;
// } else if (ave >= 80) {
//   answer = answer.concat("B");
//   continue;
// } else if (ave >= 70) {
//   answer = answer.concat("C");
//   continue;
// } else if (ave >= 50) {
//   answer = answer.concat("D");
//   continue;
// } else {
//   answer = answer.concat("F");
//   continue;
// }
//   }
//   return answer;
// }
