function solution(word) {
  var answer = 0;
  const set = { A: 0, E: 1, I: 2, O: 3, U: 4 };
  const weight = [781, 156, 31, 6, 1];
  word.split("").forEach((w, idx) => {
    if (w !== "A") {
      answer += weight[idx] * set[w];
    }
  });
  return word.length + answer;
}

// function solution(words) {
//     return words.split('').reduce((r, c, i) => r + [781, 156, 31, 6, 1][i] * ['A', 'E', 'I', 'O', 'U'].indexOf(c) + 1, 0);
// }

// 아 각 자릿수에 대해 생기는 경우의 수가 첫 번째 배열이고 사전 순으로 나열되니까 앞에 있는 경우의 수 건너뛰려고 인덱스 곱해주고 중간에 'A' 문자가 한 번씩 끼니까 +1을 해주는 거구나..
