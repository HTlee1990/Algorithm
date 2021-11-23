function solution(expression) {
  var answer = 0
  //0. 먼저, expression을 숫자와 연산자로 구분해줄 필요가 있다.
  let expressions = expression.replace(/[\+\-\*]/g, " $& ").split(" ")
  //1. 연산자가 몇개 있는지 확인...
  //1-1. 연산자가 2개 있다면, 2가지, 3가지 있다면 3!가지의 경우가 나온다. => 모든 조합의 경우 계산 => greedy로 풀자
  //연산자들만 찾아서, 배열로 만들기
  let operations = expression.match(/[\+\-\*]/g)
  //중복값 제거
  operations = [...new Set(operations)]
  //연산자 조합 구하기 n!
  let temp = []
  getCombi(operations, 0, [])
  //조합 구하는 함수
  function getCombi(input, count, bucket) {
    if (count >= operations.length) {
      temp.push(bucket)
      return
    }

    input.forEach((fixed, idx, self) => {
      const res = [...self.slice(0, idx), ...self.slice(idx + 1)]
      getCombi(res, count + 1, bucket.concat(fixed))
    })
  }

  //temp에 저장된 연산자 조합을 우선순위라고 생각하고, 하나씩 계산하기.
  for (let operation of temp) {
    let result = 0
    let copied = expressions.slice()
    while (operation.length > 0) {
      const cur = operation.shift()
      let result = calculateNum(copied, cur)
      copied = result
      //cur을 다 계산했다면, 다시 가장 앞의 것을 제거.
    }
    result = copied[0]
    console.log(result)
    //모든 연산자를 다 계산했다면, result에 저장된 값을 answer과 비교.
    if (answer < Math.abs(result)) answer = Math.abs(result)
  }
  // 최종적으로 저장된 answer return
  return answer
}

//2. 연산자의 우선순위대로 계산을 하고, 큰 값을 answer에 넣는다.
//2-1. 계산은 어떻게? expression에서 순회를 하되, expression을 숫자와 연산자로 구분해줄 필요가 있다.

//계산을 해주는 함수.
function calculateNum(input, op) {
  let copied = []
  for (let i = 0; i < input.length; i++) {
    //해당 연산자를 찾았다면 앞뒤의 숫자를 계산해주자.
    if (input[i] === op) {
      const calculated =
        op === "+"
          ? Number(input[i - 1]) + Number(input[i + 1])
          : op === "-"
          ? Number(input[i - 1]) - Number(input[i + 1])
          : Number(input[i - 1]) * Number(input[i + 1])
      copied.pop()
      copied.push(calculated)
      input[i + 1] = calculated
      i++
    } else {
      copied.push(input[i])
    }
  }
  return copied
}
