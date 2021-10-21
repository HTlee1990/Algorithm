function solution(begin, target, words) {
  let answer = 0;
  let visited = new Array(words.length).fill(0);

  let changable = [{ word: begin, s: 0 }];
  if (words.indexOf(target) === -1) return 0;
  while (changable.length > 0) {
    const cur = changable.shift();
    const step = cur.s + 1;
    const word = cur.word;
    if (word === target) {
      if (answer >= step || answer == 0) {
        answer = step;
      }
      continue;
    }
    for (let i = 0; i < words.length; i++) {
      let same = words[i].length;
      for (let j = 0; j < words[i].length; j++) {
        if (words[i][j] === word[j]) same--;
      }
      if (same === 1 && !visited[i]) {
        changable.push({ word: words[i], s: step });
        visited[i] = 1;
      }
    }
  }

  return answer === 0 ? 0 : answer - 1;
}

// 단어를 변환할 수 있는 최소 횟수를 리턴.
// 한번에 한개의 알파벳만 변환가능.
// words안에 있는 단어로만 변환이 가능.
// 중복된 단어 없음
// 모든 단어의 길이 똑같다.
// 변환 불가시, 0을 리턴. (words에 target이 없거나, 2개이상을 동시에 변환해야 하는 경우)

// 1. begin에서 부터 변환을 시킨다.
// 1-1. 변환이 가능한, 즉 스펠링 한개만 차이가 나는 단어들을 temp같은 곳에 관리.
// 2. target에 도달하기 까지 걸린 step을 answer로 만든다.
// 3. 만약, answer < step 이라면, 그냥 리턴.
