function rockPaperScissors (round) {
    // TODO: 여기에 코드를 작성합니다.
    const result = [];
    const rps = ["rock", "paper", "scissors"]
    round = round || 3
    
    const aux = (count, temp) => {
      if(count === round){
        result.push(temp);
        return;
      }
      aux(count+1, temp.concat(rps[0]))
      aux(count+1, temp.concat(rps[1]))
      aux(count+1, temp.concat(rps[2]))
  
    }
    aux(0, []);
    return result;
  };
  