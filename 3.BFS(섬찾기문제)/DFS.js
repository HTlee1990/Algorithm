// 세로와 가로의 길이가 각각 R, M인 2차원 R X M 배열 grid가 주어졌을 때,
// '1'은 땅을 의미하고 '0' 은 물을 의미합니다. 주어진 2차원 배열에 존재하는 섬의 개수를 리턴해야 합니다.

const countIslands = function (grid) {
    let result = 0;
    //방문체크배열생성
    let isVisited = [];
    //깊은 복사로 원본배열에 영향주지 않게 하기
    for(let i =0; i< grid.length; i++) isVisited.push(grid[i].slice());
  
    let queue = []
    for(let i =0; i < grid.length; i++ ){
      for(let j = 0; j < grid[0].length; j++){
        // 1. '1'인지점을 찾았을때, 그곳과 연결된 모든 1인곳들을 queue에 넣고, 방문한 곳들은 -1로 바꾼다.
        if(grid[i][j] === "1"){
          queue.push([i, j])
            while(queue.length>0){
              let [r, c] = queue[0]
              queue.push(...checkLand(grid, queue[0]))
              queue.shift();
              grid[r][c] = -1;
          }
          result+=1;
        }
      }
    }
    //어디까지 연결이 되어 있는지 파악하고 기록하는 것이 중요. 
    // 2. queue가 다 비었을때, 섬하나가 완성된 것이므로, result++;
    // 3. 새로운 땅을 찾고, 1의과정 반복.
  
  
    
    return result;
};
//사방에 어디가 땅인지 체크하는 함수
function checkLand(arr, [row, col]) {
  const R = arr.length;
  const M = arr[0].length;

  const direction = [[row-1, col], [row, col+1], [row+1, col], [row, col-1]];
  let result = [];
  for(let cordinate of direction){
    let [r, c] = cordinate;
    if(r < 0 || r >= R || c < 0 || c >= M){
      continue;
    }
    if(arr[r][c] === "1"){
      result.push([r, c])
    }
  }

  return result;
}
  



//최적화 시킨 함수
const countIslands = function (grid) {
    // dfs solution
    const HEIGHT = grid.length;
    const WIDTH = grid[0].length;
    let count = 0;


    for (let row = 0; row < HEIGHT; row++) {
      for (let col = 0; col < WIDTH; col++) {
        //물이라면 넘어가기
        if (grid[row][col] === '0') continue;
        //아니라면 땅체크하고, 
        count++;
        //연결된 모든 땅의 값 0으로 바꾸기
        searchIsland(row, col);
      }
    }
    //연결된 모든 땅의 값을 0으로 바꿔주는 재귀함수.
    //원래 queue에다가 while로 풀었었는데.. 훨씬 깔끔하다.. 
    function searchIsland(row, col) {
      if (row < 0 || col < 0 || row >= HEIGHT || col >= WIDTH) return;
      if (grid[row][col] === '0') return;
  
      grid[row][col] = '0';
      searchIsland(row - 1, col);
      searchIsland(row + 1, col);
      searchIsland(row, col - 1);
      searchIsland(row, col + 1);
    }
  
    return count;
  };