function solution(array, commands) {
  return commands.map(
    ([from, to, idx]) =>
      array.slice(from - 1, to).sort((a, b) => a - b)[idx - 1]
  );

  // commands.forEach(el => {
  //     let arr = array.slice().splice(el[0]-1, (el[1]-el[0]+1)).sort((a, b) => a-b)
  //     answer.push(arr[el[2]-1])
  // })
  // return answer;
}
