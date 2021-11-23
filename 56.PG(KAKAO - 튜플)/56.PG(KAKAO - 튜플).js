function solution(s) {
  var first = []
  //그냥 길이가 가장 긴거 뽑아서, 처리하면 되지 않을까?
  // => 순서가 중요!
  //1. 우선 가장 큰 {}를 제거하자.
  //1-1. ','를 기준으로 split
  let arr = s.slice(2, s.length - 2).split("},{")

  //가장 긴 길이의 튜플을 result에 저장.
  let result = arr.reduce((a, c) => {
    let sth = c.split(",")
    if (sth.length === 1) first.push(...sth)
    if (a.length < sth.length) return sth
    else return a
  }, "")
  // const idx = result.findIndex(item => item === answer[0]);
  // console.log(result, answer)

  //     result.split(',').forEach(el => {
  //         if(answer.length === 0) answer.push(el)
  //         if(!el === answer[0]) answer.push(el)

  //     })
  let answer = result.filter((el) => el === !answer[0])
  answer.push(first[0])
  return answer
}
