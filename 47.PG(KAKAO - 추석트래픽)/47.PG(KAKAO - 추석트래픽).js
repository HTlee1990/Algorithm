function solution(lines) {
  var answer = 0;

  const dates = lines
    .map((line) => {
      const dateHead = line.split(" ")[0];
      const end = line.split(" ")[1];
      const timeNeeded = line.split(" ")[2].slice(0, -1) * 1000;
      let date = Date.parse(`${dateHead} ${end}`);
      const start = date - timeNeeded + 1;
      // //finished와 start는 각각 날짜를 나타내는 13자리의 숫자로 저장됨
      return [start, date];
    })
    .sort(([a, b], [c, d]) => a - c);

  //시작하는 시간으로 기준으로 1초 증가해서 체크하기...?
  //끝나는 시점을 기준으로 체크도 해야 할듯.
  dates.forEach(([s, e]) => {
    const after1Sec = s + 999;
    const after1SecFromE = e + 999;
    // console.log([s, e])
    let count = [0, 0];
    // let count = 0
    for (let check of dates) {
      const [cs, ce] = check;
      //시작시간이 범위이내에 있거나 || 끝나는 시간이 범위 이내에 있거나.
      if (
        (s <= cs && cs <= after1Sec) ||
        (s <= ce && ce <= after1Sec) ||
        (cs <= s && after1Sec <= ce)
      ) {
        count[0]++;
        // count ++
      }
      if (
        (e <= cs && cs <= after1SecFromE) ||
        (e <= ce && ce <= after1SecFromE) ||
        (cs <= e && after1SecFromE <= ce)
      ) {
        count[1]++;
      }
    }
    const max = Math.max(...count);
    // const max = count;
    //저장된 count를 answer에 추가해주기.
    answer = answer < max ? max : answer;
  });
  return answer;
}
