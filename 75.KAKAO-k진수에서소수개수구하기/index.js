function solution(n, k) {
  let nums = n.toString(k).split("0");
  return nums.filter((el) => el !== "" && isPrime(Number(el))).length;
}

//아래코드는 왠지 모르겠지만 계속 테스트 케이스 3개가 실패한다...
function solution(n, k) {
  var answer = 0;
  const kNum = n
    .toString(k)
    .split("")
    .map((num) => num * 1);
  //소수 양쪽에 아무것도 없는경우 -> 1 리턴
  if (kNum.indexOf(0) < 0 && isPrime(kNum, k)) return 1;
  //0을 기준으로 하여 4가지 경우를 출력한다.
  let zeroPosition = 0;
  for (let i = 0; i < kNum.length; i++) {
    //현재 숫자가 0이라면
    if (kNum[i] === 0) {
      //0이전의 숫자 => 0P0과 P0을 커버할 수 있다.
      const previosNum = kNum.slice(zeroPosition, i).join("");
      zeroPosition = i;
      if (isPrime(previosNum, k)) {
        answer++;
      }
      const restNum = kNum.slice(i + 1);
      const hasZeroMore = restNum.includes(0);
      if (restNum.length > 0 && !hasZeroMore) {
        if (isPrime(restNum.join(""), k)) {
          answer++;
        }
      }
    }
  }
  return answer;
}

function isPrime(num, k) {
  num = num * 1;
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
