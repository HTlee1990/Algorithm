function newChickenRecipe(stuffArr, choiceNum) {
    //우선, stuffArr을 정렬.
    stuffArr = stuffArr.sort((a, b) => a-b);
    //상한 재료 가려내기.
    const ingredients = stuffArr.filter(el => {
        let count = 0;
        el = String(el)
        for(let i =0; i< el.length; i++){
            if(el[i] === '0') count++;
        }
        if(count >=3) return false;
        else return true;
    })
    
    //재료의 처음을 제외한, 나머지로 구할 수 있는 경우의수 만들기
    const result = getPermutation(ingredients, choiceNum);

    //순열을 구하는 함수구현하기
    const getPermutation = (arr, choiceNum) => {
        const result = [];
        //탈출 조건 = choiceNum만큼 숫자를 뽑았을때
        if(choiceNum === 1){
            return arr.map(el => el)
        }
        

        arr.forEach((el, idx) => {
            const fixed = el;
            const rest = [...arr.slice(0,idx), ...arr.slice(idx+1)];
            const permutation = getPermutation(rest, choiceNum-1);
            const attached = permutation.map(el => [fixed, el]);
            result.push(...attached);
        })
        return result
    }
    
    return result;
    //재료의 가장 처음 것을 제외한 나머지로 구성한 순열에 stuffArr[0]을 추가. 하는 식으로 진행. 
    //[1, 1010]라고 생각해보자. 
  }
  
  
  //순서가 다르면, 다른 레시피이므로, 순열사용
  //0이 3개 이상이라면, 제외
  //모두 사용불가능한 재료라면 []리턴.
  //만약 사용가능 재료가 choice Num 보다 작으면, return [];
  //치킨 소수가 될 수 있는 모든 경우의 수를 리턴.
  //단, 리턴되는 값은 올림차순으로 리턴. 

  //여기에서 num은 nPr에서 r을 의미한다. 
  const getCombi = (input, num) => {
      
      let result = [];
      //재귀를 돌릴 내부함수 선언.
      //count는 몇 개를 선택했는지 보여주는 지표, temp는 임시로 저장해놓는 저장소.
      const aux = (input, temp, count) => {
        //탈출조건 (내가 원하는 만큼 숫자를 다 뽑았을때)
        if(count === 0){
            //result에 저장된 값을 넣고
            result.push(temp);
            //재귀 종료
            return;
        }

        //순열은 우선, 각각의 숫자를 하나씩 고정시키고 나머지 숫자를 이용해 조합을 구한 후, 고정된 숫자를 해당 조합의 경우의 수에 집어 넣는것과 같다. 
        input.forEach((fixed, idx, self) => {
            //1이라는 요소를 고정, 2라는 요소를 고정... 순서대로 고정하면서 나머지를 이용해 조합을 구하자. 
            //fixed된 현재 요소를 제외한 나머지 요소를 rest에 저장
            const rest = self.slice(idx+1);
            //나머지를 이용해 조합을 구하기. 단, 여기에서 중요한 것은 concat을 이용해 미리 fixed된 숫자를 해당 조합의 경우의 수에 집어 넣어 놓는 것!
            aux(rest, temp.concat(fixed), count-1);
        })
    
      }
      aux(input, [], num)
      return result;
  }

  const getPermu = (input, num) => {
      
    let result = [];
    //재귀를 돌릴 내부함수 선언.
    //count는 몇 개를 선택했는지 보여주는 지표, temp는 임시로 저장해놓는 저장소.
    const aux = (input, temp, count) => {
      //탈출조건 (내가 원하는 만큼 숫자를 다 뽑았을때)
      if(count === 0){
          //result에 저장된 값을 넣고
          result.push(temp);
          //재귀 종료
          return;
      }

      //순열은 우선, 각각의 숫자를 하나씩 고정시키고 나머지 숫자를 이용해 조합을 구한 후, 고정된 숫자를 해당 조합의 경우의 수에 집어 넣는것과 같다. 
      input.forEach((fixed, idx, self) => {
          //1이라는 요소를 고정, 2라는 요소를 고정... 순서대로 고정하면서 나머지를 이용해 조합을 구하자. 
          //fixed된 현재 요소를 제외한 나머지 요소를 rest에 저장
          const rest = [...self.slice(0,idx), ...self.slice(idx+1)];
          //나머지를 이용해 조합을 구하기. 단, 여기에서 중요한 것은 concat을 이용해 미리 fixed된 숫자를 해당 조합의 경우의 수에 집어 넣어 놓는 것!
          aux(rest, temp.concat(fixed), count-1);
      })
  
    }
    aux(input, [], num)
    return result;
}