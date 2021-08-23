
let el = [1, 2, 3, 4, 5]
let result = [];
const pickOrNot = (idx, basket) => {
//종료조건
    if(idx === el.length){
        result.push(basket);
        return;
    }
    //for문을 돌리지 않아도,  idx+1덕분에 자동으로 넘어가게 된다. 
    pickOrNot(idx+1, basket.concat(el[idx]));
    pickOrNot(idx+1, basket);

    return result;
}

pickOrNot(0, []);


//knapsack Problem을 pickOrNot으로 풀어보기 O(2^n);

const knapsack = (weight, items) => {

    const pickOrNot = (idx, value, leftWeight) => {
        if(idx === items.length){
            return value;
        }

        const[w, v] = items[idx];
        if(leftWeight - w < 0) return pickOrNot(idx +1, value, leftWeight);
        return Math.max(pickOrNot(idx+1, value+v, leftWeight-w), pickOrNot(idx+1, value, leftWeight))

    }

    return pickOrNot(0, 0, weight);
}