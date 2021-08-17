const uglyNumbers = function (n){
    //결국
    //(1) = 1*2, 2*2, 3*2, ...
    //(2) = 1*3, 2*3, 3*3, ...
    //(3) = 1*5, 2*5, 3*5, ...  
    // 총 3그룹이 생기고 중복되는 값을 제거한 뒤에, sort.. 또 콜스택초과 될 것 같은데..
    // 결국 이 숫자들 중에 n번째 숫자라는건 2^n보다 작게 된다.
    // 즉, 반복이든 재귀든 돌릴때 2^n보다 작을때까지만 돌리자. 
    let ugly = [1]
    let nextUglyOf2 = 2;  
    let nextUglyOf3 = 3;  
    let nextUglyOf5 = 5;
    //3그룹중 가장 작은 수가 걸렸을때 +1을 해주면서, 2로만 나누어 떨어지는 수를 추적해줄 변수 2, 4, 8, 16이 되도록
    let [j2, j3, j5] = [0, 0, 0]
  
    for(let i = 1; i < n; i++){
      //셋중 가장 작은 숫자가 다음 못생긴 놈
      nextUgly = Math.min(nextUglyOf2, nextUglyOf3, nextUglyOf5);
  
      ugly[i] = nextUgly;
      if(ugly[i] === nextUglyOf2){
        j2 += 1;
        nextUglyOf2 = ugly[j2] * 2
        //이렇게 하면, 다른 수로도 나누어 떨어지는 수가 되네.
        // nextUglyOf2 = j2 * 2;
      }
      if(ugly[i] === nextUglyOf3){
        j3+= 1;
        nextUglyOf3 = ugly[j3] * 3;
      }
      if(ugly[i] === nextUglyOf5){
        j5+= 1;
        nextUglyOf5 = ugly[j5] * 5;
      }
    }  
  
    return ugly[n-1];
  }




  //아래 코드는 시간초과뜸
// const uglyNumbers = function (n) {
//     //ugly num set을 적어놓고
//     let uglyNumSet = [2, 3, 5];
//     let result = [0, 1, 2, 3, 4, 5];
//     if(n <= 5) return result[n]
//     let count = Math.floor(n/2)
//     //result에 어글리 넘 셋을 돌리면서 계속 곱하기...?
//     while(count > 0){
//       let temp = [];
//       result.forEach(el => {
//         temp.push(el*uglyNumSet[0])
//         temp.push(el*uglyNumSet[1])
//         temp.push(el*uglyNumSet[2])
//       })
//       result.push(...temp)
//       //중복제거
//       result = result.filter((el, idx) => result.indexOf(el) === idx);
//       count--;
//     }
//     result.sort((a, b) => a-b)
//     return result[n]
//   };
  