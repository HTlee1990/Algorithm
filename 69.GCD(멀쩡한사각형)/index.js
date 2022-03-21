function solution(w, h) {
  var answer = 1;
  //정사각형인 경우,
  if (w === h) return w * h - w;
  //직사각형인 경우,
  const short = Math.min(w, h);
  const longer = Math.max(w, h);
  if (short === 1) return 0;
  return w * h - Math.ceil(longer / short) * short;
}

const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
