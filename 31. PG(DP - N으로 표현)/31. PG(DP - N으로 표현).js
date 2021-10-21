const operations = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => Math.floor(a / b),
];

const DP = (ea, N, bucket) => {
  let t = new Set();
  t.add(+String(N).repeat(ea)); // => 55
  for (let i = 1; i < ea; i++) {
    // => 5를 1~ ea-1개 만큼 사용하여 ea개를 사용 하겠다는 뜻
    for (let item of bucket[i].values()) {
      for (let item2 of bucket[ea - i].values()) {
        for (let operation of operations) {
          const cal = operation(item, item2);
          t.add(cal);
        }
      }
    }
  }
  return t;
};

function solution(N, number) {
  if (N === number) return 1;
  let temp = [];
  temp[1] = new Set([N]);

  for (let i = 2; i < 9; i++) {
    temp[i] = DP(i, N, temp);
    if (temp[i].has(number)) {
      return i;
    }
  }

  return -1;
}

//** N과 사칙연산만을 사용해 number를 표현할 수 있는 방법중 N의 최소사용수를 리턴.
//1. 숫자를 8번보다 더 많이 사용해야 한다면, if answer > 8 return -1
//2. 나누기 연산에서 나머지는 무시.

//N보다 작은 수를 만들 수 있는 방법
// 1 = N/N
// 2 = 2 * x    || 2N - 2x + 1
// 3 = 2 * x    || 2N - 2x + 1
// ...
// i.e min(2*x, 2N - 2x + 1);

//N보다 큰 수를 만들 수 있는 방법
// 1. N을 8번 써서 만들 수 있는 가장 큰 수는 NNNNNNNN
// cuz NN처럼 이어 붙이는 것이 N^2보다 큰가??
//     if(NN > N^2 ) ? when N < 11보다 작으면, So, yes!
// => if(+(""+N+N+N+N+N+N+N+N) < numbers) return -1;

// 2. NN/N => 10N || (NN-N)/N = 9N...
// 즉, N의 배수라면, 이 방법이 가장 베스트?

// 3. N*N의 방식으로 만들기

// 4. N+N의 방식으로 만들기

// 2. NN처럼 자릿수를 늘려가며 비교
// 만약 작다면???
// 얼마나 작아야 reasonable? if 55-12 = 43 => reasonable하지 않다.
//

// if(|cur - number|) < N 이라면, N보다 작은 수 만드는 방법으로 접근.
// if(|cur - number|) === N 이라면, 단순히 + N || -N 하여 종료
// if(|cur - number|) > N 이라면???
