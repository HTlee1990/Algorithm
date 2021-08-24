//my code 
function solution(priorities, location) {
    var answer = 0;
    let isRight = priorities.slice(0);
    //stack을 저장할 배열 선언
    const stack = [];
    //출력된 문서의 수를 count
    let count = 0;
    //0번째 인덱스값을 stack에 push.
    let loca = location + 1;
    while (loca >= 0) {
      let max = Math.max(...priorities);
  
      stack.push(priorities[0]);
      priorities.shift();
      loca--;
  
      //stack에 있는 수보다 더 중요한 문서가 없다면, 출력
      if (stack[0] === max) {
        count++;
        stack.pop();
  
        //출력되는 값이 location에 해당한다면, return count;
        if (loca === 0) {
          loca = -1;
          return count;
        }
      }
      //더 큰수가 있다면,
      else{
          priorities.push(stack[0]);
          stack.pop();
          //만약, stack에 있던게 location이었다면, 재조정
          if(loca === 0) loca = priorities.length;
      }
    }
  }


  //optimized
  function solution(priorities, location) {
	//가장 처음에 location에 해당하는지 여부를 바로 marking을 하여 객체로 저장한 모습이다.
    var list = priorities.map((t,i)=>({
        my : i === location,
        val : t
    }));
    var count = 0;        

//while문의 조건을 참으로 주어 무조건 작동하게 한 부분이다.
    while(true){
        var cur = list.shift();        
//some을 통해 더 큰수가 있는지 여부 부분을 구현한 부분이다.
        if(list.some(t=> t.val > cur.val )){
            list.push(cur);                        
        }
        else{            
            count++;
            if(cur.my) return count;
        }
    }
}