function solution(fees, records) {
  //[기본시간, 기본요금, 단위시간, 단위요금] = fees
  //[시각, 차량번호, 내역]= records
  var answer = [];
  let parkedCar = {};
  //입차된 차량이 다음날 출차되는 경우 없다. 즉, 무조건 다 23:59에 출차된다.(출차 기록이 없는 경우도, 다 23:59에 출차된 것으로 간주)
  //1. records 데이터 가공
  records.forEach((record, idx) => {
    const [time, car, direction] = record.split(" ");
    const changedTime = changeToMinute(time, direction);
    //자동차 번호를 키값으로, time을 기록.
    if (!parkedCar[car]) {
      parkedCar[car] = [changedTime];
    } else {
      parkedCar[car].push(changedTime);
    }
  });
  //return 할 때 자동차 번호가 작은 순서부터 주차요금을 return
  return Object.entries(parkedCar)
    .sort((a, b) => a[0] * 1 - b[0] * 1)
    .map(([number, parkTime]) => calculateFees(fees, parkTime));
}

function changeToMinute(time, direction) {
  const [h, m] = time.split(":");
  const changedTime = h * 60 + m * 1;
  return direction === "IN" ? -changedTime : changedTime;
}

function calculateFees([bTime, bCost, pTime, pCost], parkingTime) {
  //입차후 출차기록이 없는 경우
  if (parkingTime.length % 2 !== 0) parkingTime.push(23 * 60 + 59);
  const totalParkingTime = parkingTime.reduce((a, c) => a + c);
  if (totalParkingTime <= bTime) return bCost;
  return bCost + Math.ceil((totalParkingTime - bTime) / pTime) * pCost;
}
