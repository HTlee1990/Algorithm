// https://programmers.co.kr/learn/courses/30/lessons/42747#

function solution(citations) {
  let answer = 0;
  let sorted = citations.sort((a, b) => b - a);
  sorted.forEach((n, idx) => {
    if (n >= idx + 1) answer = idx + 1;
  });
  return answer;
}

//1. 큰 순서 대로 정리하기.
//2. idx와 비교하여 리턴하기
