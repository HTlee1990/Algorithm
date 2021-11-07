function solution(s) {
  let table = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < table.length; i++) {
    s = s.replace(new RegExp(`${table[i]}`, "g"), i);
  }
  return Number(s);
  // let numTable = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9}
  // let strTable = {zero: 0, one: 1, two: 2, three: 3, four:4, five: 5, six: 6, seven: 7, eight: 8, nine: 9}
  // let bucket = '';
  // s.split('').forEach((el, idx) => {
  //     if(numTable[el]){
  //         answer.push(numTable[el]);
  //     }else{
  //         bucket = bucket.concat(el);
  //         if(strTable[bucket]){
  //             answer.push(strTable[bucket]);
  //             bucket='';
  //         }
  //     }
  // })
}
