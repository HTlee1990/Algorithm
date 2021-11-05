function solution(s) {
  var answer = s;
  let count = Math.floor(s.length / 2);
  while (count > 0) {
    const res = aux(s, count, []);
    count--;
  }

  function aux(input, count, bucket) {
    //탈출 조건은?
    if (input.length < count) {
      const str = bucket.join("") + input;
      if (answer.length > str.length) answer = str;
      return;
    }
    //[2, "a", 2, "b"]
    const oneSide = input.slice(0, count);
    const otherSide = input.slice(count, count * 2);
    const lastOne = bucket[bucket.length - 1];

    if (oneSide === otherSide) {
      if (lastOne !== oneSide) {
        aux(input.slice(count * 2), count, bucket.concat(2, oneSide));
      } else {
        bucket[bucket.length - 2] += 2;
        aux(input.slice(count * 2), count, bucket);
      }
    } else {
      if (lastOne !== oneSide) {
        aux(input.slice(count), count, bucket.concat(oneSide));
      } else {
        bucket[bucket.length - 2] += 1;
        aux(input.slice(count), count, bucket);
      }
    }
  }

  return answer.length;
}

//제일 앞에서부터 정해진 길이만큼 잘라야 함.
// => 그리디 가능할듯.

//문자열 전체 길이를 반으로 나누어, 반복되는 지 확인=> 안된다면, 길이를 하나씩 줄여가면서 탐색
//잘라진다면, 남은 문자열로 다시 반복.
//만약, 끝까지 안된다면, 문자열 그대로 리턴.
