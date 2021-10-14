// https://programmers.co.kr/learn/courses/30/lessons/85002

function solution(weights, head2head) {
  const winRates = head2head
    .map((rate, idx) => {
      let wins = 0;
      let games = 0;
      let heavyCompetitor = 0;
      for (let i = 0; i < rate.length; i++) {
        if (rate[i] === "N") {
          continue;
        } else if (rate[i] === "L") {
          games++;
        } else {
          if (weights[idx] < weights[i]) {
            heavyCompetitor++;
          }
          wins++;
          games++;
        }
      }
      return {
        rate: games === 0 ? 0 : wins / games,
        heavyGames: heavyCompetitor,
        weight: weights[idx],
        number: idx + 1,
      };
    })
    .sort(
      (a, b) =>
        b.rate - a.rate ||
        b.heavyGames - a.heavyGames ||
        b.weight - a.weight ||
        a.number - b.number
    )
    .map((el) => el.number);
  console.log(winRates);
  return winRates;
}

//1. 승률 순서대로 정렬, 0전인 복서는 승률 0% 가장 뒤로.   (승률)
//2. 승률이 동일하다면, 자신보다 무거운 상대를 이긴횟수가 많을 수록 앞쪽으로  (무거운 상대 이긴 횟수)
//3. 2번까지 동일하다면, 본인의 몸무게가 무거운 복서가 앞쪽으로 (본인 몸무게 순서)
//4. 3번까지 동일하다면, 작은 복서번호 일수록 앞으로. (번호 순서 -> weights의 index)
