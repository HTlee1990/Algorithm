function solution(N, stages) {
  var answer = []

  stages.sort((a, b) => a - b)

  for (let i = 1; i <= N; i++) {
    let success = 0
    let arrived = 0

    for (let stage of stages) {
      if (stage === i) {
        arrived++
      } else if (stage >= i) {
        success++
        arrived++
      }
    }
    let obj = {}
    obj[i] = (arrived - success) / arrived
    answer.push(obj)
  }

  return answer
    .sort(
      (a, b) =>
        Object.values(b)[0] - Object.values(a)[0] ||
        Object.keys(a)[0] - Object.keys(b)[0]
    )
    .map((obj) => +Object.keys(obj)[0])
}
