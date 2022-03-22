function solution(operations) {
  let answer = [];

  operations.forEach((c) => {
    let [cmd, value] = c.split(" ");
    value = value * 1;
    if (cmd === "I") {
      answer.push(value);
      answer.sort((a, b) => b - a);
    } else {
      if (value === 1) answer.shift();
      else answer.pop();
    }
  });
  return answer.length === 0 ? [0, 0] : [answer[0], answer[answer.length - 1]];
}
solution([
  "I -45",
  "I 653",
  "D 1",
  "I -642",
  "I 45",
  "I 97",
  "D 1",
  "D -1",
  "I 333",
]);
