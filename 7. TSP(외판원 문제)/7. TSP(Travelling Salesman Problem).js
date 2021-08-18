// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수
function calculateDistance(p1, p2) {
    const yDiffSquared = Math.pow(p2[0] - p1[0], 2);
    const xDiffSquared = Math.pow(p2[1] - p1[1], 2);
    const dist = Math.sqrt(yDiffSquared + xDiffSquared);
    return Math.floor(dist * 100);
  }
  

  //TSP 외판원 문제는 완전탐색 이외에는 다른 방법이 없다고 "증명"된 문제이다. 
  //즉, 나오면 바로 완전탐색으로 풀면 된다.
  const TSP = function (places) {
      //방문 순서의 모든 경우를 탐색
    let routes = getPermu(places);
    let answer = 0;
    //각각의 케이스들의 거리를 모두 계산하고 그게 만약 기존에 적힌 값보다 작다면 replace.
    for(route of routes){
        let temp = 0;
        for(let i = 0; i < route.length-1; i++){
            temp += calculateDistance(route[i], route[i+1])
        }
        if(answer === 0 || answer > temp) answer = temp;
    }
    return answer;
  };
  



//방문할 좌표 조합의 모든 경우의 수 리턴하는 함수
const getPermu = (input) => {
    let result = [];
    let aim = input.length;
    const aux = (arr, bucket, count) => {
        if(count === 0){
            result.push(bucket);
            return;
        }
        arr.forEach((fixed, idx, self) => {
            const rest = [...arr.slice(0, idx), ...arr.slice(idx+1)]
            let temp = bucket.slice();
            temp.push(fixed)
            aux(rest, temp, count-1);
        })
    }
    aux(input, [], aim)
    return result;
}