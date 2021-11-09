let arr = [1, 2, 3, 4, 5];

//forEach 만들어보기
Array.prototype.myforEach = function (callback, context) {
  for (let i = 0; i < this.length; i++) {
    //만약, forEach에서 2번째 인자로 this를 지정해서 보내줬다면, context값을 넣고, 그렇지 않으면 null
    callback.call(context || null, this[i], i, this);
  }
};

arr.myforEach((el, idx, self) => {
  console.log(el, idx, self);
});

//map 만들어보기
Array.prototype.myMap = function (callback, context) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback.call(context || null, this[i], i, this));
  }
  return arr;
};

console.log(arr.myMap((el, idx) => el * idx));

//reduce 만들어보기
Array.prototype.myReduce = function (callback, initialValue) {
  let answer = initialValue || this[0];
  for (let i = initialValue ? 0 : 1; i < this.length; i++) {
    let acc = answer;
    answer = callback(acc, this[i], i, this);
  }
  return answer;
};

[2, 3, 4, 5].myReduce((a, c) => {
  if (c % 2 !== 0) {
    a.push(c);
  }
  return a;
}, []);
