//my Solution
function solution(genres, plays) {
  let total = {};
  let flag = 0;
  let before = "";
  let temp = genres
    .map((el, idx) => {
      total[el] ? (total[el] += plays[idx]) : (total[el] = plays[idx]);
      return { play: plays[idx], idx: idx, genres: el };
    })
    .map((v) => {
      v.total = total[v.genres];
      return v;
    })
    .sort((a, b) => b.total - a.total || b.play - a.play || a.idx - b.idx)
    .map((l) => {
      if (before !== l.genres) {
        flag = 0;
        flag++;
        before = l.genres;
        return l.idx;
      } else if (flag < 2) {
        flag++;
        before = l.genres;
        return l.idx;
      }
      before = l.genres;
    });

  return temp.filter((e) => e !== undefined);
}

//Best solution in PG
// function solution(genres, plays) {
//   var dic = {};
//   genres.forEach((t, i) => {
//     dic[t] = dic[t] ? dic[t] + plays[i] : plays[i];
//   });

//   var dupDic = {};
//   return genres
//     .map((t, i) => ({ genre: t, count: plays[i], index: i }))
//     .sort((a, b) => {
//       if (a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
//       if (a.count !== b.count) return b.count - a.count;
//       return a.index - b.index;
//     })
//     .filter((t) => {
//       if (dupDic[t.genre] >= 2) return false;
//       dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1;
//       return true;
//     })
//     .map((t) => t.index);
// }
