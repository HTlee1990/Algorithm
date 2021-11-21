//너무 쉽다 다른문제를 풀자

function solution(absolutes, signs) {
  var answer = 0
  for (let i = 0; i < signs.length; i++) {
    if (signs[i]) {
      answer += absolutes[i]
    } else {
      answer -= absolutes[i]
    }
  }
  return answer
}
