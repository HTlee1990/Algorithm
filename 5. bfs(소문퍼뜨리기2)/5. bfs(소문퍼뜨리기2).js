const createMatrix = (village) => {
    const matrix = [];
    village.forEach((line) => {
      const row = [];
      for (let i = 0; i < line.length; i++) row.push(line[i]);
      matrix.push(row);
    });
    return matrix;
  };
  
  const gossipProtocol2 = function (village, num) {
    village = createMatrix(village);
    let count = 0;
    let queue = [];
    // 0일차, 모든 2인곳들 체크하고 queue에 넣기.
    for (let i = 0; i < village.length; i++) {
      for (let j = 0; j < village.length; j++) {
        if (village[i][j] === "2") {
          queue.push([i, j]);
        }
      }
    }
    //queue로 만들수 있는 모든 경우의 수 만들기(num만큼의 비상요원임명 가능한 경우의 수);
    let queueCombi = getCombi(queue, num);
  
    //1일차. 비상요원으로 부터 소문퍼뜨리기. 모든경우의 수를 다 탐색후, 가장 짧은 날짜 리턴.
  
    for (let i = 0; i < queueCombi.length; i++) {
      let isVisited = village.map((v) => v.slice());
      let days = getDays(queueCombi[i], isVisited);
      //여러개의 지점에서 동시에 사방으로 소문이 퍼지기 시작하고, 날짜 세고, 반복.
      //동시..를 어떻게 구현하지...?
      if (count === 0 || count > days) count = days;
    }
  
    return count;
  };
//총 몇일이 소모되는지 파악하는 함수
  const getDays = (messanger, isVisited) => {
    messanger = messanger.map((el) => {
      return { cordi: el, day: 0 };
    });
  
    while (messanger.length > 0) {
      let [row, col] = messanger[0].cordi;
      let day = messanger[0].day;
      let direction = [
        [row - 1, col],
        [row, col + 1],
        [row + 1, col],
        [row, col - 1],
      ];
      for (let cor of direction) {
        let [r, c] = cor;
        if (r < 0 || r >= isVisited.length || c < 0 || c >= isVisited[0].length)
          continue;
        if (isVisited[r][c] !== "0" && isVisited[r][c] !== "2") {
          if (isVisited[r][c] === "1" || isVisited[r][c] > day + 1) {
            isVisited[row][col] = "2";
            messanger.push({ cordi: [r, c], day: day + 1 }); //해당장소 소문퍼뜨리고 queue에 넣기;
            isVisited[r][c] = day + 1;
          }
        }
      }
      messanger.shift();
    }
    //*** 모든 집이 전부 연결되어 있는 것은 아니다 -> 즉, 소문이 다 안퍼지는 경우가 있을 수 있다. 이 경우 제외!
    for(let i =0; i < isVisited.length; i++){
        for(let j = 0; j < isVisited[0].length; j++){
          if(isVisited[i][j] ==='1') return Number.MAX_SAFE_INTEGER;
        }
      }
    isVisited = isVisited.flat().filter((el) => typeof el === "number");
    if (isVisited.length === 0) return 0;
    return Math.max(...isVisited);
  };
  

  //모든 경우의수 조합으로 구하기.
  const getCombi = (arr, num) => {
    let result = [];
  
    const aux = (input, bucket, count) => {
      if (count === num) {
        result.push(bucket);
        return;
      }
      input.forEach((fixed, idx, self) => {
        const rest = self.slice(idx + 1);
        let temp = bucket.slice();
        temp.push(fixed);
        aux(rest, temp, count + 1);
      });
    };
  
    aux(arr, [], 0);
    return result;
  };
  