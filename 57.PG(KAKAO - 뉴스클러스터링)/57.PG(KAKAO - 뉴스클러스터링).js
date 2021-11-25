function solution(str1, str2) {
  var answer = 0
  //1. 주어진 문자열을 두개씩 나누어, 다중집합의 원소로 만든다.
  //* 공백, 숫자, 특수문자의 경우 모두 쌍을 버린다. 대소문자는 모두 무시한다.
  //1-1.소문자전환 && 알파벳만 남기기
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  //이렇게 하면 안될 것 같은데... 2개씩 먼저 끊고, 그중에 특수, 숫자 등이 포함되어 있으면 제거해야한다.
  //만약에 주어진 문자열이 홀수라면..? 마지막은 무조건 버려야 하나?
  let s1 = [],
    s2 = []

  function getCombi(str, bucket) {
    for (let i = 0; i < str.length; i++) {
      let sliced = str.slice(i, i + 2)
      if (!sliced.match(/[^a-z]/g) && sliced.length === 2) {
        bucket.push(sliced)
      }
    }
  }
  getCombi(str1, s1)
  getCombi(str2, s2)

  //교집합의 크기는 min(겹치는 원소 갯수 of A,겹치는 원소 갯수 of B)
  //합집합의 크기는 max(겹치는 원소 갯수 of A,겹치는 원소 갯수 of B))

  //어떻게 합집합을 구할 수 있을까??? => 그냥 두개의 길이를 더하면? =>안되지
  //findIndex를 해서 return 값이 0이상 => for문돌려서 몇개인지 찾기.
  //각각의 집합에서 겹치면서, 중복된 값이 몇개가 있는지 알아내야 한다.
  const overlap = {}
  const intersection = []
  const union = []
  //교집합, 합집합을 구하는 함수.
  function getSet(input, compareTo) {
    for (let i = 0; i < input.length; i++) {
      if (overlap[input[i]]) continue
      //상대와 중복되는 값이 있다면, 교집합에 바로 넣지 말고, overlap에 겹치는 것의 갯수를 세어보자.
      if (compareTo.findIndex((item) => item === input[i]) >= 0) {
        const r1 = s1.filter((el) => el === input[i]).length
        const r2 = s2.filter((el) => el === input[i]).length
        const max = Math.max(r1, r2) //max만큼 합집합에 넣고, min만큼 교집합에 넣자.
        const min = Math.min(r1, r2)
        union.push(...new Array(max).fill(input[i]))
        intersection.push(...new Array(min).fill(input[i]))
        //나중에 다시 방문하지 않고, 넘어가기 위해서
        overlap[s1[i]] = 1
      } else {
        //중복되는게 없다면, 바로 합집합에만 추가.
        union.push(input[i])
      }
    }
  }

  getSet(s1, s2)
  getSet(s2, s1)

  if (intersection.length === 0 && union.length === 0) return 1 * 65536

  return Math.floor((intersection.length / union.length) * 65536)
}

//중복갯수 구하는 함수.
function getOverlap(arr, target) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) count++
  }
  return count
}

//자카드 유사도? => 교집합크기 / 합집합크기
//만약 집합 두개 모두 공집합인 경우 => 즉, 원소가 없으므로, 자카드 유사도는 1이 된다. (0/0 => 나눗셈 정의 안됨)

//이는 원소중복을 허용하는, 다중집합에 대허서도 확장 가능하다.
//
