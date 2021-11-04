//정규표현식 사용.
function solution(new_id) {
  const answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, "")
    .replace(/[.]{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .padEnd(1, "a")
    .slice(0, 15)
    .replace(/\.$/g, "");

  return answer.padEnd(3, answer[answer.length - 1]);
}

// function solution(new_id) {
//     var answer = [];
//     //1단계
//     new_id = new_id.toLowerCase();
//     //2단계
//     const specialCheck = /[^A-Za-z0-9_.-]/;
//     for(let i = 0 ; i < new_id.length; i++){
//         if(specialCheck.test(new_id[i])) {
//             continue;
//         }
//         else{
//             answer.push(new_id[i])
//         }
//     }
//     //3단계
//     const doubleDot = /[.]{2,}/
//     while(doubleDot.test(answer.join(''))){
//         const index = answer.join('').indexOf('..')
//         answer.splice(index, 1)
//     }
//     let temp = answer;
//     while(temp[0] === '.' || temp[temp.length-1] === '.'){
//         if(temp[0] === '.'){
//             temp.splice(0,1)
//         }
//         if(temp[temp.length-1] === '.'){
//             temp.splice(temp.length-1,1)
//         }
//     }

//     if(temp.length === 0){
//         temp.push('a');
//     }

//     answer = temp.slice(0, 15)
//     while(answer[answer.length-1] === '.'){
//          answer.splice(answer.length -1, 1);
//     }

//     while(answer.length < 3){
//         answer.push(answer[answer.length-1])
//     }

//     return answer.join('');
// }

// //새로 가입하는 유저들이 invalid한 값을 넣었을때, 규칙에 맞는 유사아이디 추천.
// // 3 <= length <= 15
// //abc, 숫자, - _ .만 가능 .는 2개 이상 불가. 앞뒤 불가.

// //1. 대문자는 모두 소문자로 변환.
// //2. 소문자, 숫자, -, _, .을 제외한 모든 문자 제거
// //3. . 두개이상 => .하나로 치환
// //4. .이 처음이나 마지막 위치할 경우 제거
// //5. 빈 문자열일시, a넣기
// //6. 16자 이상일시, 15개 문자 제외 모두 제거., 만약 제거후 마침표가 마지막이라면, 마침표도 제거
// //7. 2자 이하라면, 마지막 문자를 3이 될때까지 반복하여 붙이기.
