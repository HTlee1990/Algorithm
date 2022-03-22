var firstUniqChar = function (s) {
  let hash = {};
  const strings = s.split("");
  strings.forEach((letter, idx) => {
    hash[letter] ? (hash[letter][0] += 1) : (hash[letter] = [1, idx]);
  });
  const keyMap = Object.keys(hash);
  console.log(keyMap);
  for (let i = 0; i < keyMap.length; i++) {
    if (hash[keyMap[i]][0] === 1) return hash[keyMap[i]][1];
  }
  return -1;
};

console.log(firstUniqChar("dddccdbba"));
