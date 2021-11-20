//시간복잡도 O(2n)
function solution(numbers) {
  let map = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  numbers.forEach((num) => (map[num] = 0))
  return map.reduce((a, c) => a + c)
}

//개선된 방법 => 시간복잡도 O(n)
function solution(numbers) {
  let answer = 0

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i
  }

  return answer
}
