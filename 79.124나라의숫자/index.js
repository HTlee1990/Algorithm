function solution(n) {
  var answer = "";
  const map = [0, 1, 2, 4];

  function divide3(num, remainder) {
    if (num <= 3) {
      if (num !== 0) {
        remainder = map[num] + remainder;
      }
      answer = remainder;
      return;
    }

    let quotient = Math.floor(num / 3);
    let adjustedRemainder = num % 3;
    if (adjustedRemainder === 0) {
      quotient--;
      adjustedRemainder = 3;
    }
    divide3(quotient, map[adjustedRemainder] + remainder);
  }
  divide3(n, "");

  return answer;
}

function test() {}

test("simple", () => {
  expect(solution(1)).toBe("1");
  expect(solution(2)).toBe("2");
  expect(solution(3)).toBe("4");
});
// n % 3 = 1 이면 1의자리는 1, 2이면 2, 0이면 4

// 1 - 1
// 2 - 2
// 3 - 4

// 4 - 11  => 3*1 + 1
// 5 - 12  => 3*1 + 2
// 6 - 14  => 3*2

// 7 - 21 => 3*2 + 1
// 8 - 22 => 3*2 +2
// 9 - 24 => 3*3

// 10 - 41 => 3*3 + 1
// 11 - 42 => 3*3 + 2
// 12 - 44 => 3*4

// 13 - 111 => 3*(3*1 + 1) + 1
// 14 - 112 => 3*4 + 2
// 15 - 114 => 3*5

// 16 - 121
// 17 - 122
// 18 - 124

// 19 - 141
// 20 - 142
// 21 - 144
