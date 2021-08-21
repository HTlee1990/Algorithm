function solution(bridge_length, weight, truck_weights) {
    let inBridge = new Array(bridge_length).fill(0);
    inBridge.push(truck_weights[0]);
  
    //while문으로 한번 돌때마다 shift();
    let count = 1;
  
    
      //더이상 다리위에 트럭이 없을때 까지.
      inBridge.shift();
      truck_weights.shift();
      while (inBridge.filter((el) => el !== 0).length > 0) {
        //일반 잴 첫뻔째 빼고 시작.
        inBridge.shift(0);
  
        const sum = inBridge.reduce((a, c) => a + c, 0);
        const empty = weight - sum;
        const passing = inBridge.filter((el) => el !== 0).length;
        const cars = bridge_length - passing;
        // 조건 충족할때마다 넣기
        if (empty >= truck_weights[0] && cars > 0) {
          inBridge.push(truck_weights[0]);
          truck_weights.shift();
        }
        //조건 충족하지 않는다고 하더라도
        else {
          inBridge.push(0);
        }
        count++;
      }
    
  
    return count;
  }
  //   var answer = 0;
  //   //제한조건 = 몇대, && weight;
  //   const queue = [];
  //   queue.push(truck_weights[0]);
  //   truck_weights.shift();
  //   //몇초가 지났는지 check할 count변수선언
  //   let count = 1;
  //   //queue.length가 다 비워질때까지 돌리기.
  //   while (queue.length > 0) {
  //     //1. count로 bridge_length에 도달했는지 확인;
  //     //1-1. 만약 도달했다면, queue에 있던것 빼고 && count초기화.&& answer에 추가
  //     count++;
  //     if (count >= bridge_length) {
  //       queue.shift();
  //       answer += count;
  //     }
  //     //2.무게 여유와 통행차량개수 제한을 체크
  
  //     const sum = queue.reduce((a, c) => a + c, 0);
  //     const empty = weight - sum;
  //     const cars = bridge_length - queue.length;
  //     //추가 가능한 상황인경우.
  //     //2-1. queue에 추가 && 대기목록에서 삭제.
  //     //2-2.
  //     if (empty >= truck_weights[0] && cars > 0) {
  //       queue.push(truck_weights[0]);
  //       truck_weights.shift();
  //     }
  //   }
  
  //   //모든 트럭이 다리를 건너는데 소요되는 시간 리턴.
  //   return answer;
  // }
  