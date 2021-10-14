// https://programmers.co.kr/learn/courses/30/lessons/42748
function solution(array, commands) {
  //1. 범위를 지정하고 자른뒤,
  //2. 정렬을 하고,
  //3. 인덱스값을 리턴.
  return commands.map(
    ([from, to, idx]) =>
      array.slice(from - 1, to).sort((a, b) => a - b)[idx - 1]
  );
}
