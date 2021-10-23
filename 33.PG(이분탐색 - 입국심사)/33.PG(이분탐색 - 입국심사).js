// https://programmers.co.kr/learn/courses/30/lessons/43238

function solution(n, times) {
  let min = 0;
  let max = Math.max(...times) * n;

  while (min < max) {
    let mid = Math.floor((min + max) / 2);
    let completed = times.reduce((a, c) => a + Math.floor(mid / c), 0);
    if (completed >= n) max = mid;
    else min = mid + 1;
  }
  return min;
}
