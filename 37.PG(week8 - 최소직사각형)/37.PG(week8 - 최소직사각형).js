function solution(sizes) {
  var answer = [0, 0];
  let test = sizes.map((el) => el.sort((a, b) => b - a));

  test.forEach((el) => {
    if (el[0] > answer[0]) answer[0] = el[0];
    if (el[1] > answer[1]) answer[1] = el[1];
  });

  return answer[0] * answer[1];
}

//1. 모두 수납 가능 && 최소화 시키기
//가로와 세로길이의 max가 최소화가 되도록 해야 한다.
//x와 y 중 둘중 큰게 앞으로 오게 한다.

// function solution(sizes) {
//   const [hor, ver] = sizes.reduce(
//     ([h, v], [a, b]) => [
//       Math.max(h, Math.max(a, b)),
//       Math.max(v, Math.min(a, b)),
//     ],
//     [0, 0]
//   );
//   return hor * ver;
// }
