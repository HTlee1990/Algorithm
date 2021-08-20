// DP solution.(O(bound * N))

const subsetSum = (set, bound) => {
	let max = 0;
	//for memoization, i made array with bound+1 length due to convinence searching index;
	let memo = new Array(bound+1).fill(0);
	
	set.forEach(num => {
		

		let possible = [];// the set of possible num that can be created with num
		for(let i = 1; i <= bound - num; i++){
			if(memo[i] > 0){ // if i can be created,
				let possibleNum = i + num //then, i can make possibleNum(i + num);
				possible.push(possibleNum);//
				if(max < possibleNum) max = possibleNum;
			}		
		}

		possible.forEach(el => memo[el] = 1); // push possibleNum to memo
		if(num <= bound){
			memo[num] = 1;   //why do we put num to memo at this last point? to avoid redundancy of calculation.
			if(max < num) max = num // if num is too big to apply to upper condition clause and not out of the bound, we need to consider it.
		}


	})
	return max;
}


//비효율적인 알고리즘...  퉷
// const subsetSum = function (set, bound) {
//     let answer = 0;
//     //1. check the range;
//     set = set.filter(num => num <= bound);
//     //2. need to be sorted.
//     set.sort((a, b) => a-b);
//     for(let i = set.length-1; i >= 0; i--){
//         let j = 0;
//         let max = set[i]
//         if(answer < max) answer = max;
//         //3. is max bound?
//         if(max === bound) return max;
//         //3-1. if not, make the maximum number with max;
//         let maximumNum = max;
//         while(j < i){
//             let min = set[j++]
//             if(maximumNum + min > bound) {
//                 //if it is out of the range, 
//                 //check which one can make bigger num among current and prev;
//                 let prev = set[j-2];
//                 if(maximumNum - prev + min <= bound) maximumNum = maximumNum - prev + min;
//                 continue;
//             }
//             if(maximumNum + min === bound) return bound;
//             else maximumNum += min 
//         }
//         //3-2. maximum is the biggest number that i can make with max;
//         if(answer < maximumNum) answer = maximumNum;
//     }
//     return answer;
//   };
  