function solution(clothes) {
  var answer = 0;
  //각 종류의 의상이 몇 개 씩있는지 저장
  const hash = {};

  for (let [c, type] of clothes) {
    if (!hash[type]) hash[type] = 1;
    else hash[type]++;
  }

  answer += Object.values(hash).reduce((a, c) => {
    return a * (c + 1);
  }, 1);
  return answer - 1;
}
