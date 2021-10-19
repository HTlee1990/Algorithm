// https://programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  var answer = [0, 0, 0];
  let fir = [1, 2, 3, 4, 5];
  let sec = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((el, idx) => {
    const checked = [
      fir[idx % fir.length],
      sec[idx % sec.length],
      third[idx % third.length],
    ];
    checked.forEach((a, i) => a === el && answer[i]++);
  });
  let max = Math.max(...answer);

  return answer.reduce((a, c, idx) => {
    c === max && a.push(idx + 1);
    return a;
  }, []);

  //   return answer.map((n, i) => n === max && i + 1).filter((el) => el !== false);
}
