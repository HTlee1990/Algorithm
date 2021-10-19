// https://programmers.co.kr/learn/courses/30/lessons/42839
function solution(numbers) {
  let temp = [];
  const num = numbers.length;

  const aux = (input, count, bucket) => {
    if (num === count) {
      while (bucket[0] === "0") {
        bucket.splice(0, 1);
      }
      if (bucket.length === 0) {
        return;
      }
      temp.push(bucket.join(""));
      return;
    }

    input.forEach((fixed, idx) => {
      const res = [...input.slice(0, idx), ...input.slice(idx + 1)];
      aux(res, count + 1, bucket.concat(fixed));
      aux(res, count + 1, bucket);
    });
  };

  aux(numbers.split(""), 0, []);
  return temp
    .filter((el, idx) => temp.indexOf(el) === idx)
    .filter((e) => IsPrime(+e)).length;
}

//1. 소수인지 아닌지 판단하는 함수 필요.
//2. numbers로 만들 수 있는 모든 경우의 수를 뽑자. (순열);
//3. 모든 경우의 수를 prime 에 돌려서 true인 것들의 갯수 리턴
const IsPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
