function solution(s) {
  let answer = []
  let obj = {}
  //그냥 길이가 가장 긴거 뽑아서, 처리하면 되지 않을까?
  // => 순서가 중요!
  // 순서는 어떻게 정해질까?? => 가장 빈도가 높은 순서대로
  //1. 우선 가장 큰 {}를 제거하자.
  //1-1. ','를 기준으로 split
  let arr = s
    .slice(2, s.length - 2)
    .split("},{")
    .map((el) => el.split(","))

  //몇번 등장했는지 세어보자.
  arr.forEach((numbers) => {
    for (let num of numbers) {
      if (obj[num]) {
        obj[num]++
      } else {
        obj[num] = 1
      }
    }
  })
  for (let key in obj) {
    answer.push([key, obj[key]])
  }
  let result = answer.sort((a, b) => b[1] - a[1]).map((el) => Number(el[0]))
  return result
}
