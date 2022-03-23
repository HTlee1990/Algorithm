//기울기로 구하기
function solution(w, h) {
  let answer = 0;
  const slope = h / w;
  for (let i = 1; i <= w; i++) {
    answer += Math.ceil(slope);
  }
  return answer;
}

//
function solution(w, h) {
  const slope = h / w;
  let result = 0;

  for (let i = 1; i <= w; i++) {
    result += Math.ceil(slope * i);
  }

  return (h * w - result) * 2;
}

function solution(w, h) {
  var answer = 1;
  //정사각형인 경우,
  if (w === h) return w * h - w;
  //직사각형인 경우,
  const short = Math.min(w, h);
  const longer = Math.max(w, h);
  //유클리드 호제법
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const GCD = gcd(w, h);
  if (short === 1) return 0;
  return w * h - (w + h - GCD);
}
