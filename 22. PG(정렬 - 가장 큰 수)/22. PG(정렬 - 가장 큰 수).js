//https://programmers.co.kr/learn/courses/30/lessons/42746#

function solution(numbers) {
  let answer = numbers
    .map((el) => el + "")
    .sort((a, b) => +(b + a) - (a + b) * 1)
    .join("");
  return answer[0] === "0" ? answer[0] : answer;
}

//숫자 두개를 이어 붙여 커지는 쪽으로 더하기
//주의점
//1.0000인 경우 답은 0이 되어야 한다.
//2.굳이 자리수를 나누어 생각하지 말고, 바로 두개의 숫자를 이어 비교하자.
//3. 스트링을 number화 할때에는 +를 붙이거나 *1을 해주면 된다.
