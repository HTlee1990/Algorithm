function solution(price, money, count) {
  let c = 1;
  while (c <= count) {
    money = money - price * c;
    c++;
  }

  return money > 0 ? 0 : -money;
}
