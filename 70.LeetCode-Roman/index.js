var romanToInt = function (s) {
  let answer = 0;
  const hash = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let before = 0;
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] < hash[s[i + 1]]) {
      before = hash[s[i]];
      continue;
    }
    answer += hash[s[i]] - before;
    before = 0;
  }
  return answer;
};

romanToInt("LVIII");
