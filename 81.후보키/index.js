function getCombination(comlumnIndexs, k) {
  const result = [];

  function dfs(input, bucket, count) {
    //k개 만큼 뽑았다면, 재귀종료
    if (count === k) {
      result.push(bucket.join(''));
      return;
    }
    input.forEach((fixed, idx) => {
      const rest = input.slice(idx + 1);
      dfs(rest, bucket.concat(fixed), count + 1);
    });
  }
  dfs(comlumnIndexs, [], 0);
  return result;
}

function isUnique(arr) {
  const arrayLength = arr.length;
  const setLength = new Set(arr).size;
  if (arrayLength === setLength) return true;
  else return false;
}

//////////
function solution(relation) {
  var answer = 0;
  let map = {};
  const length = relation.length;
  const columnLength = relation[0].length;

  const comlumnIndexs = new Array(columnLength).fill(0).map((_, idx) => idx);

  const combinations = [];
  for (let n = 1; n < columnLength + 1; n++) {
    combinations.push(...getCombination(comlumnIndexs, n));
  }

  console.log(combinations);
  while (combinations.length > 0) {
    const current = combinations.shift().split('');
    const tuple = relation.map((rel) =>
      current.map((cur) => rel[cur]).join('')
    );
    if (isUnique(tuple)) {
      answer++;
      const temp = [];
      for (let combi of combinations) {
        current.forEach((cur) => {
          if (!combi.includes(cur)) temp.push(combi);
        });
      }
      combinations = temp;
    }
  }

  return answer;
}

solution([
  ['100', 'ryan', 'music', '2'],
  ['200', 'apeach', 'math', '2'],
  ['300', 'tube', 'computer', '3'],
  ['400', 'con', 'computer', '4'],
  ['500', 'muzi', 'music', '3'],
  ['600', 'apeach', 'music', '2'],
]);
//완전히 똑같은 튜플은 존재하지 않는다.
//1. 우선 해당 column이 후보키가 되는지 확인
//1-1. -> 그렇다면 바로 후보키 등록. answer++;

//2. 후보키가 안된다면 그다음 column에 대해 진행
