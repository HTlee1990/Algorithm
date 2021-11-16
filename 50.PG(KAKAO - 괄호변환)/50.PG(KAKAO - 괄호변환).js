function solution(p) {
  var answer = ""
  let left = 0
  let right = 0
  let rightP = false
  if (p.length === 0) return ""

  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") left++
    else right++

    if (left >= right) rightP = true

    if (left === right) {
      //올바른 p가 아닐때,
      if (!rightP) {
        answer += "("
        answer += solution(p.slice(i + 1, p.length))
        answer += ")"

        for (let j = 1; j < i; j++) {
          if (p[j] === "(") answer += ")"
          else answer += "("
        }
        return answer
      }
      //올바른 p일때
      else {
        answer += p.slice(0, i + 1)
        answer += solution(p.slice(i + 1, p.length))
        return answer
      }
    }
  }
}
//균형잡힌 문자열 => 개수만 맞으면 충족
//올바른 문자열 => 앞뒤 짝이 맞아야 한다.
