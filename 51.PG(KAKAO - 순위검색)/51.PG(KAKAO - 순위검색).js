//이분탐색 다시 볼것... 부등호 바꾸다가 어쩌다 되버림...
//이분탐색 + 재귀 이용하여 데이터 가공
function solution(info, query) {
  var answer = []
  const scoreMap = {}
  //모든 경우의 수에 점수 넣는 함수.
  const putInfo = (input, score, count, bucket) => {
    //재귀 종료조건
    if (count === input.length) {
      const modifiedQuery = bucket.join("")
      if (scoreMap[modifiedQuery]) {
        scoreMap[modifiedQuery].push(score)
      } else {
        scoreMap[modifiedQuery] = [score]
      }
      return
    }
    //가져온 input을 전부 순회 하면서, scoreMap에 넣어주자.
    //단, '-'인 것도 들어가도록 넣어주자.

    putInfo(input, score, count + 1, bucket.concat(input[count]))
    putInfo(input, score, count + 1, bucket.concat("-"))
  }

  //해당 배열에 대해 이분검색하는 함수
  function binarySearch(key2, score2) {
    let scoreArr = scoreMap[key2]

    if (scoreArr) {
      var head = 0
      var tail = scoreArr.length
      //
      while (head < tail) {
        var mid = Math.floor((head + tail) / 2)

        if (scoreArr[mid] >= score2) {
          tail = mid
        } else if (scoreArr[mid] < score2) {
          head = mid + 1
        }
      }

      return scoreArr.length - head
    } else return 0
  }

  //info라는 데이터를 내가 원하는 대로 가공 하는 부분.
  for (let i = 0; i < info.length; i++) {
    const information = info[i].split(" ")
    const score = information.pop()
    putInfo(information, score, 0, [])
  }
  //여기까지 하면, scoreMap에 모든 정보가 정리가 된다.

  //빨리 찾기 위해 정렬하자. 내림차순
  for (let arr in scoreMap) {
    scoreMap[arr].sort((a, b) => a - b)
  }

  //' and '를 빈 스트링으로 바꿔주고, split' '으로 나눠준다.
  for (let q of query) {
    let s = q.replace(/ and /g, "").split(" ")
    let scoreBar = +s.pop()
    let realQuery = s[0]
    answer.push(binarySearch(realQuery, scoreBar))
  }

  return answer
}

// * [조건]을 만족하는 사람 중 코딩테스트 점수를 X점 이상 받은 사람은 모두 몇 명인지를 리턴.
// * '-' 표시는 해당 조건을 고려하지 않겠다는 의미입니다.

//효율성 테스트 실패... O(n^2)으로 안풀어 진다.
//info데이터를 가공해서 점수로 나누어 놓는다면?  => query에서 해당 점수부분의 info만 탐색 할 수 있도록.(100단위로?)

// function solution(info, query) {
//   var answer

//   query = query.map((q) => {
//     let temp = q.split(" and ")
//     let food = temp[3].split(" ")
//     temp[3] = food[0]
//     temp[4] = food[1]
//     return temp
//   })

//   // let test = {}; //{100: [], 200: [], ...100000: []};
//   info = info
//     .map((information, idx) => {
//       return information.split(" ")
//     })
//     .sort((a, b) => b[4] - a[4])

//   console.log(info)

//   answer = query.map((q) => {
//     let count = 0
//     for (let i of info) {
//       if (+i[4] < +q[4]) {
//         break
//       }
//       if (
//         (i[0] === q[0] || q[0] === "-") &&
//         (i[1] === q[1] || q[1] === "-") &&
//         (i[2] === q[2] || q[2] === "-") &&
//         (i[3] === q[3] || q[3] === "-")
//       ) {
//         count++
//       }
//     }
//     return count
//   })

//   return answer
// }

// // * [조건]을 만족하는 사람 중 코딩테스트 점수를 X점 이상 받은 사람은 모두 몇 명인지를 리턴.
// // * '-' 표시는 해당 조건을 고려하지 않겠다는 의미입니다.

// //효율성 테스트 실패... O(n^2)으로 안풀어 진다.
// //info데이터를 가공해서 점수로 나누어 놓는다면?  => query에서 해당 점수부분의 info만 탐색 할 수 있도록.(100단위로?)

let map = { test: [100, 200, 250, 250, 300, 400, 500] }

function binarySearch(key2, score2) {
  let scoreArr = map[key2]

  if (scoreArr) {
    var head = 0
    var tail = scoreArr.length
    //head가 tail보다 작을때에만 작동.
    while (head < tail) {
      var mid = Math.floor((head + tail) / 2)

      if (scoreArr[mid] >= score2) {
        tail = mid
      } else if (scoreArr[mid] < score2) {
        head = mid + 1
      }
    }

    return scoreArr.length - head
  } else return 0
}
