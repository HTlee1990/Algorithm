const knapsack = function (weight, items) {
    
    //sort item with biggest value per weight. 
    //remove item with heavier weight then weight of bag.
    //아래는 분할이 가능할때 필요하지, 해당문제 처럼 분할이 불가 하다면 불필요.
    // items = items.sort((a, b) => (b[1]/b[0]) - (a[1]/a[0])).filter(item => item[0] <= weight);
    const WhoIsBigger = (a, b) => a > b ? a : b;
    let w = weight;
    let n = items.length;

    let memo = new Array(n+1);
    for(let i =0; i <= n; i++){
        memo[i] = new Array(weight+1).fill(0);
        for(let j = 0; j <= weight; j++){
            if(i === 0 || j === 0) memo[i][j] = 0;
            else if(items[i-1][0] <= weight){
                memo[i][j] = WhoIsBigger(items[i-1][1]+memo[i-1][j-items[i-1][0]], memo[i-1][j]);
            }
            else memo[i][j] = memo[i-1][j]
        }
    }
    

    return memo[n][w]
  };    
  

//   예시 및 풀이)
// totalWeight: 6
//                    A           B           C            D
// items = [[1, 10], [3, 40], [2, 30], [4, 60]]
// **items[i][0] = weight, items[i][1] = value;

// Problem : 4가지 아이템을 선택하여 6의 무게를 제한으로 최대한 많은 가치를 가지도록 하기.
// subProblem: 3가지 아이템을 선택하여 2(6-4)의 무게를  제한으로 최대한 많은 가치를 가지도록 하기.
// subProblem: 2가지 아이템을 선택하여 0(6-4-2)의 무게를  제한으로 최대한 많은 가치를 가지도록 하기.
// ...

// 여기에서 중요한 점은 큰 문제에서 작은 문제로 나눌때, 단순히 어떤 아이템을 선택하는 여부로 나눈것이 아니라,
// 배낭안에 해당 아이템이 있거나 없거나 로 나누어야 한다는 것이다. 

// 위의 과정을 점화식으로 나타내면 아래와 같다. 

// Knapsack(n, w) ⇒ Max(Knapsack(n-1, w-w[n]) + value[n], Knapsack(n-1, w) + 0) 
// 즉, n 번째 아이템이 배낭에 있거나 없거나가 sub-problem을 나누는 기준이 되는 것이다. 

// 위의 점화식에서 알 수 있듯이, 2개의 인자를 가지게 되므로, 단순 배열이 아니라, 행렬형태를 가지는 이중행렬형태를 띄게된다. 

//  n/w              0    1       2       3       4       5       6              
//                0    0    0      0       0       0       0       0
// A            1     0    10.    10.    10.    10.     10.    10
// AB          2    0.    10.   10.    40.    50.    50.    50
// ABC       3    0.    10.   30.    40.    50.    70.    80
// ABCD     4    0.    10.   30.   40.    60.    70.    90

// 여기에서 각각의 값들이 어떻게 구해 지는 지가 중요하다. 
// 예를들어, memo[3][1]의 경우, 무게 제한이 1인상태에서 C가 포함될 수 없기에, AB를 이용해 구할 수 있었던 최댓값 10(memo[2][1])을 들고 오게 되고, 
// memo[3][2]의 경우, C가 포함 될 수 있으므로, 
// C의 가치 + 남은 무게 여유분으로 만들 수 있는 최대값(memo[2][0])와 C를 포함하지 않고 만들 수 있던 최댓값(memo[2][2]) 중 큰 값을 가져 오게 된다. 
// max(items[2][1] + memo[3-1][2-items[2][0]], memo[2][2])

// 즉, 각각의 값들은 w무게제한에서 n개 만큼의 아이템들을 이용해 구할 수 있는 최대 가치를 보여주는 것이다.