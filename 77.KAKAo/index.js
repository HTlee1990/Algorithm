function solution(n, info) {
  var answer = [];
  let scoreGap = 0;
  //직전 우승자 라이언 / 상대는 어피치
  //어피치가 n발 다 발사 이후, 라이언 이 n발 발사

  //k점에 더 많이 화살을 맞힌 선수가 k점 획득 단, 동일시 어피치 점수(단, 0인 경우 제외)

  //가장 큰 점수차이로 이기기 위해 어떤 점수를 몇개씩 맞추어야 하는지 리턴

  //라이언이 점수를 획득하려면 항상, 어피치보다 더 많은 화살을 맞히어야 한다.
  //해당 점수를 얻었을시, 한 발당의 한계가치를 계산한다면?
  //SPA = ScorePerArrow = [SPA, the number of Arrows required, score ]
  const SPA = info
    .map((arrow, idx) => {
      return [
        (info.length - 1 - idx) / (arrow + 1),
        arrow + 1,
        info.length - 1 - idx,
      ];
    })
    .sort((a, b) => b[0] - a[0]);
  // 만약 무조건 지는 경우라면, -1 return

  function dfs(input, bucket, leftArrows, aScore, lScore) {
    //재귀 종료문
    if (input.length === 0 && leftArrows === 0) {
      if (scoreGap < lScore - aScore) {
        console.log("1st", bucket, leftArrows);
        scoreGap = lScore - aScore;
        let temp = new Array(11).fill(0);
        bucket.forEach((el) => {
          temp[10 - el[2]] = el[1];
        });
        answer = temp;
      } else if (scoreGap === lScore - aScore) {
        console.log(bucket);
        let temp = new Array(11).fill(0);
        bucket.forEach((el) => {
          temp[10 - el[2]] = el[1];
        });
        for (let i = temp.length - 1; i >= 0; i--) {
          console.log(i, temp[i], answer[i]);
          if (temp[i] < answer[i]) return;
        }
        answer = temp;
      }
      return;
    }

    if (input.length === 0) {
      return dfs(
        input.slice(),
        bucket.concat([[0, 0, leftArrows]]),
        0,
        aScore,
        lScore
      );
    }

    const item = input.shift();
    const [spa, requiredArrow, score] = item;
    const apeachScore = info[10 - score] ? score : 0;
    //해당 점수를 얻는 경우, 어피치는 점수를 얻지 못하게 된다.
    //단 이때, 남은 화살이 요구화살 보다 많아야 한다.
    if (leftArrows >= requiredArrow) {
      dfs(
        input.slice(),
        bucket.concat([item]),
        leftArrows - requiredArrow,
        aScore,
        lScore + score
      );
    }
    //포기하는 경우, 어피치가 해당 점수를 획득한다.
    dfs(input.slice(), bucket, leftArrows, aScore + apeachScore, lScore);
  }

  dfs(SPA.slice(), [], n, 0, 0);

  return answer.length === 0 ? [-1] : answer;
}

//필요한 화살의 개수
