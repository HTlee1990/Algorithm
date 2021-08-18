//이 문제는 코드스테이츠 알고리즘 4번(advanced)
//자세한 정리는 아래링크에 했다. 
//https://www.notion.so/DP-c94c42fbefd64bde80e12d45504feb63
function ocean(target, type) {
    //일반적이라면, 조합을 이용하면 되겠지만, 
    //원하는 금액이 정확하게 명시되어 있다. 
    // 1. 50을 만든다고 하였을때, 
    // 2. 10원으로 만드는 경우는 40원을 10원으로 만들 수 있는 경우의 수와 같다. 40+10 으로 하는 경우는 하나의 경우밖에 없기 때문이다. 
    // 2-1. 결국 1가지가 답이 된다. 
    // 3. 10원과 20원으로 50을 만드는 경우는 10원으로만 만드는 1가지를 제외하고, 
    // 3-1. 40원을 10원과 20원으로 만드는 경우.
    // 3-2. 30원을 10원과 20원으로 만드는 경우로 나누어진다. 
    // ...
    // 결국 DP를 이용하게 되는 것이다. (Cuz 소분한 작은 문제를 해결하고 그 값을 이용하면, 최종 문제가 해결).

    // 문제는 어떻게 구현할 것인가???
    // 이 문제는 10원, 20원, 30원 등 각 화폐단위를 조합해 만들 수 있는 모든 경우의 수들을 기록(memoization)해 주는 것이 필요하다. 
    let memo = new Array(target +1).fill(0);
    //in this memo, each index represents the target. and the value represents the number of way making that target with types.
    memo[0] = 1;//the way of making 0 is only one selecting noting, so put 1 on index 0.
    //우선 금액이 작은 수부터, 해당 금액으로 만들수 있는 모든 경우의 수를 Memo에 기록
    type.forEach((el, idx) => {
        memo[el] += 1;//지폐금액이 20원, 20원으로 20원을 만들 수 있는 경우의 수는 1가지가 무조건 생김으로 처음부터 +1해주자.
        // 숫자를 하나씩 늘려가면서 경우의 수 업데이트가 필요
        for(let i =el+1; i <= target; i++){
            memo[i] = memo[i] + memo[i-el]
        }
    })
    return memo[target]
}
