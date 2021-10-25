function solution(distance, rocks, n) {
  rocks.sort((a, b) => a - b);
  let min = 1;
  let max = distance;
  //항상 바위는 1개 이상이므로, 최소거리는 distance보다 작을 것이다.
  while (min <= max) {
    let removed = 0;
    let mid = Math.floor((min + max) / 2);
    let prev = 0;
    for (let i = 0; i < rocks.length; i++) {
      if (rocks[i] - prev < mid) {
        removed++;
      } else {
        prev = rocks[i];
      }
    }
    if (removed > n) {
      //mid를 기준 으로 삭제했을때, 주어진 조건 보다 너무 많이 삭제한 경우 => max를 줄이자.
      max = mid - 1;
    } else {
      //조건에 부합하거나 삭제를 덜 한 경우
      min = mid + 1;
    }
  }
  return max;
}

// function solution(distance, rocks, n) {
//     var answer = [];
//       let final = 0;
//     const result = [];
//     const aux = (input, count, bucket) => {
//       if (count === n) {
//         result.push(bucket);
//         return;
//       }

//       input.forEach((fixed, idx) => {
//         const res = input.slice(idx + 1)
//         aux(res, count + 1, bucket.concat(fixed));
//       });
//     };
//     aux(rocks.map((el, idx) => idx), 0, []);

//       answer = result.map((el) => {
//           let temp = el.sort((a, b) => b-a)
//           let copied = rocks.slice();
//           for(let rock of temp){
//               copied.splice(rock, 1);
//           }
//           copied.push(distance)
//           return copied.sort((a, b) => a-b)
//       })

//       answer.forEach((e) => {
//           let temp = [];
//           for(let i = 0 ; i < e.length; i++){
//               const prev = e[i-1] || 0;
//               temp.push(e[i] - prev)
//           }
//           if(final < Math.min(...temp)) final = Math.min(...temp)
//       })
//     return final;
//   }

//   // r = 바위의 갯수.
//   // 1. rCn 의 경우의 수만큼 조합을 구해 거리의 최솟값이 가장 크게 되는 값을 리턴..?
