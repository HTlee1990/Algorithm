function solution(participant, completion) {
  var answer = "";
  //participant에서 completion 내역을 제한 명단을 return
  //단순 for문은 시간초과 발생
  const nameMap = {};

  for (let name of participant) {
    nameMap[name] += 1;
  }
  for (let name of completion) {
    //완주한 선수 명단에세 제외 해주기
    nameMap[name] -= 1;
    //만약 동명이인까지 모두 완주시 해당 이름 제외
    if (nameMap[name] === 0) delete nameMap[name];
  }

  answer = nameMap[Object.keys(nameMap)[0]];

  return answer;
}
