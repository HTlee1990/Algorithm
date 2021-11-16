function solution(p) {
  var answer = ""
  let left = 0
  let right = 0
  //올바른 괄호인지 체크하는 변수
  let rightP = true
  if (p.length === 0) return ""

  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") left++
    else right++
    //right가 더 많다면, 올바르지 않은 괄호
    //따로 다시 순회하며 체크할 필요가 없다. => 이미 left || right 중 하나를 올림.
    if (left < right) rightP = false

    //u가 분리되는 시점
    if (left === right) {
      //올바른 p가 아닐때,
      if (!rightP) {
        answer += "("
        //**재귀: v를 다시 돌려, 그 결과를 answer에 붙인다.
        answer += solution(p.slice(left + right, p.length))
        answer += ")"

        for (let j = 1; j < i; j++) {
          if (p[j] === "(") answer += ")"
          else answer += "("
        }
        return answer
      }
      //올바른 p일때
      else {
        //올바르기 때문에 u를 바로 answer에 붙인다.
        answer += p.slice(0, left + right)
        //**재귀: v를 다시 돌려, 그 결과를 answer에 붙인다.
        answer += solution(p.slice(left + right, p.length))
        return answer
      }
    }
  }
}
//균형잡힌 문자열 => 개수만 맞으면 충족
//올바른 문자열 => 앞뒤 짝이 맞아야 한다.
