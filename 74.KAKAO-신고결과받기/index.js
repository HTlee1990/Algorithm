function solution(id_list, report, k) {
  var answer = new Array(id_list.length).fill(0);
  let hashMap = {};
  //report를 순회 하여,
  //신고 당한 id를 키값으로, 신고한 유저 id를 value로 넣어준다.
  report.forEach((el, idx) => {
    const [reporter, badUser] = el.split(",")[0].split(" ");
    hashMap[badUser]
      ? hashMap[badUser].push(reporter)
      : (hashMap[badUser] = [reporter]);
  });
  Object.values(hashMap).map((list, idx) => {
    //하나의 유저가 신고한 것은 1건으로 처리.
    const filteredList = [...new Set(list)];
    //k번이상 신고 당했다면, 정지하고 메일 발송
    if (filteredList.length >= k) {
      filteredList.forEach((name) => {
        const index = id_list.indexOf(name);
        answer[index] += 1;
      });
    }
  });
  //정지된 유저를 신고한 모든 유저에게 메일로 발송
  //각 유저별 처리결과 메일을 받은 횟수를 리턴.
  return answer;
}
