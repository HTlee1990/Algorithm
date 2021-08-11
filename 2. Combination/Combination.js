
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