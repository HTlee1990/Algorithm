//https://programmers.co.kr/learn/courses/30/lessons/43165
function solution(numbers, target) {
  let answer = 0;
  let len = numbers.length;

  const aux = (count, bucket) => {
    if (len === count) {
      bucket === target && answer++;
      return;
    }

    aux(count + 1, bucket + numbers[count]);
    aux(count + 1, bucket - numbers[count]);
  };

  aux(0, 0);

  return answer;
}
// 위의 경우처럼 pickOrNot을 할 때, 꼭 forEach로 순회를 하지 않아도 괜찮다.
// =========아래는 시간초과가 발생===============================================
function solution(numbers, target) {
  let answer = 0;
  let len = numbers.length;

  const aux = (inputs, count, bucket) => {
    if (len === count) {
      bucket === target && answer++;
      return;
    }

    inputs.forEach((fixed, idx) => {
      const res = [...inputs.slice(idx + 1)];
      aux(res, count + 1, bucket + fixed);
      aux(res, count + 1, bucket - fixed);
    });
  };

  aux(numbers, 0, 0);

  return answer;
}

// 2 <= numbers <= 20
// 1 <= target <= 1000
// 모든 numbers들을 +, - 인 경우를 따져 pickOrNot으로 풀면 되지 않을까?
