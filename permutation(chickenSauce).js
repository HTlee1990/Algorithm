//순열을 구하는 기본적인 방법, 조합을 구하는 기본적인 방법에 대해 정리해보려고 한다. 
//nPr에서 input은 [1, ..., n], num은 r을 의미한다.
function getPermutation(input, num) {
        let result = [];
        //재귀함수선언
        const aux  =(input, bucket, count) => {
            //모든 숫자를 골랐다면, 재귀종료
            if(count === num){
                result.push(bucket);
                return;
            }
            //recursion
            //숫자를 하나씩 고정해 가면서 
            input.forEach((fixed, idx, self)=> {
                //나머지 숫자들로 순열을 구하기
                const rest = [...self.slice(0,idx), ... self.slice(idx+1)];
                aux(rest, bucket.concat(fixed), count+1);
            })
        }

        aux(input, [], 0)
        return result;
}

//조합을 구하는 기본방법. same logic except "rest"
//nCr에서 input은 [1, ..., n], num은 r을 의미한다.
function getCombi (input, num) {
    let result = [];

    const aux = (input, bucket, count) => {
        if(num === count){
            result.push(bucket);
            return;
        }
        input.forEach((fixed, idx) => {
            //전체 로직은 순열과 같지만, rest에서 차이난다. 
            //조합은 한번사용된 숫자는 다시 사용되지 않으므로, rest를 fixed제외한 숫자로 설정한다.
            const rest = input.slice(idx+1);
            aux(rest, bucket.concat(fixed), count+1);
        })
    }

    aux(input, [], 0);
    return result;
}