const isPrime = (num) => {
  if (num === 1 || num === 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

function solution(nums) {
  var answer = [];

  const aux = (input, count, bucket) => {
    if (count === 3) {
      answer.push(bucket);
      return;
    }

    input.forEach((fixed, idx) => {
      const res = input.slice(idx + 1);
      aux(res, count + 1, bucket + fixed);
    });
  };
  aux(nums, 0, 0);
  return answer.filter((el) => isPrime(el)).length;
}
