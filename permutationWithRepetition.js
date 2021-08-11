//중복이 가능한 경우의수를 구하는 중복순열 문제
//가위, 바위, 보를 round판 했을떄 나올 수 있는 모든 경우의 수를 정리.
function rockPaperScissors (round) {
    const result = [];
    const rps = ["rock", "paper", "scissors"]
    round = round || 3
    
    const aux = (count, temp) => {
      //재귀 종료
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
  