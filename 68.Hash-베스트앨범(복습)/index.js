function solution(genres, plays) {
  var answer = [];
  //토탈 값을 저장
  const hash = {};
  //필요한 값: 장르, index, play 횟수, 토탈

  genres.forEach((g, i) => {
    hash[g] ? (hash[g] += plays[i]) : (hash[g] = plays[i]);
  });
  let temp = {};
  return genres
    .map((el, i) => {
      return { plays: plays[i], index: i, gen: el };
    })
    .sort(
      (a, b) =>
        hash[b.gen] - hash[a.gen] || b.plays - a.plays || a.index - b.index
    )
    .filter((item) => {
      if (temp[item.gen] >= 2) return false;

      temp[item.gen] = temp[item.gen] ? (temp[item.gen] += 1) : 1;
      return true;
    })
    .map((i) => i.index);

  return answer;
}
