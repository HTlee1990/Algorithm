function solution(k, dungeons) {
  var answer = 0;

  const aux = (input, count, energy) => {
    if (count === dungeons.length || energy <= 0) {
      if (answer < count) answer = count;
      return;
    }

    input.forEach((fixed, idx, self) => {
      const res = [...self.slice(0, idx), ...self.slice(idx + 1)];
      if (energy >= fixed[0]) {
        aux(res, count + 1, energy - fixed[1]);
      }
    });
    if (answer < count) answer = count;
    return;
  };

  aux(dungeons, 0, k);
  return answer;
}

//최소 피로도 => 탐험 시작하기 위해 필요한 피로도(실제로 차감되지는 않는 필요조건)
//소모 피로도 => 탐험을 마치고 소모되는 피로도
//최소 피로도 >= 소모 피로도
//완전 탐색을 해도 될 까? 될듯
