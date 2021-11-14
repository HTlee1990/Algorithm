function solution(record) {
  var answer = [];
  const actions = { Enter: "들어왔습니다.", Change: 1, Leave: "나갔습니다." };
  let test = "Enter uid1234 Muzi".split(" ");
  let userIds = {};
  //record를 순회하면서 새로운 유저아이디라면 uId에 넣어주고,
  //1. 우선, uid로 메시지를 작성하고, 이후에, 최종적인 닉네임으로 전부 한번에 치환시키자.
  // 그렇게 하면.. 실제 행동이랑 다른것 같은데...

  for (let msg of record) {
    const [action, userId, nickname] = msg.split(" ");
    //처음보는 userId라면, 넣어주기
    if (!userIds[userId]) {
      userIds[userId] = nickname;
    } else {
      //기존에 있던 유저가 새롭게 들어왔거나, 닉네임 변경시 업데이트.
      //leave 시에는 닉네임값 없음
      if (nickname) {
        userIds[userId] = nickname;
      }
    }
    if (actions[action] === 1) continue;
    answer.push(`${userId}님이 ${actions[action]}`);
  }
  return answer.map((m) => {
    let uId = m.split(" ")[0].slice(0, -2);
    return m.replace(uId, userIds[uId]);
  });
}
