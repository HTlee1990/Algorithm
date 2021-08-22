//DP
//예전에 재귀로 밑의 코드처럼 풀었던 것을 다시, DP로 바꾸어 봤다. 
//실제 시간복잡도는 크게 차이가 나지 않고,
//DP는 훨씬 코드가 간결한 것이 장점이고, 재귀는 좀 더 가독성이 좋다는 것이 장점(내 개인적인 생각)인것 같다. 
const coinChange = (total, coins) => {
    coins = coins.sort((a, b) => a-b);//오름차순으로 정렬
  
    let memo = new Array(total+1).fill(0);
    memo[0] = 1;//0을 만드는 방법은 모두 선택하지 않는 1가지.
  
    coins.forEach(coin => {
      memo[coin] += 1;
  
      for(let i = coin + 1 ; i <= total ; i++){
        if(memo[i-coin] > 0) memo[i] += memo[i-coin];
      }
    })
  return memo[total]
  }
  


//recursion

const coinChange = (total, coins) => {
    //큰것 부터 넣을것이므로 내림차순으로 정렬
    coins = coins.sort((a, b) => b-a);
    let result = 0;
    
    const aux = (left, coins) => {
        if(left === 0){
            result+=1;
            return;
        } // 구성할 금액이 0원이라면, 해당 금액 만든 것이므로, 재귀 종료
        if(coins.length<=0 && left > 0) return; //만약 만들 금액이 남아있지만, 동전이 없다면, 해당 케이스 존재 하지 않는 것이므로 리턴;
        if(left < 0) return; // 가장큰 단위의 동전 한개가 남은 금액보다 큰 경우 종료;

        //가장 큰 단위의 동전을 고른다.
        let big = coins[0];
        //big이 들어갈 수 있는 최대개수
        let max = Math.floor(left/big);
        //big을 max개부터 0개까지 넣고, big을 제외한 동전들로 나머지 동전으로 구성할 수 있는 모든 경우의 수를 계산한다.
        
        for(let i = max; i >= 0; i--){
            let remainder = left - big * i;
            //이 나머지 금액을 나머지 동전으로 구성하는 방법 계산.
            aux(remainder, coins.slice(1)) 
        }
    }
    aux(total, coins)
return result;
}







