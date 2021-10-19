// https://programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  var answer = [];
  const total = brown + yellow;
  for (let i = 1; i < total; i++) {
    if (total % i === 0 && i <= total / i) {
      answer.push([total / i, i]);
    }
  }
  return answer.filter(([x, y]) => 2 * (x + y) - 4 === brown).flat();
}

//1. 각 격자의수 더하기. (총 격자의수)
//2. 해당 격자의 수로 만들 수 있는 모든 사각형 모양 [] 넣기
//3. 어떤게 적절한 사각형인지 체크.
