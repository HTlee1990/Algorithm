// 문제
// 2차원 N x N 배열을 시계 방향으로 90도 회전시킨 배열을 리턴해야 합니다.

// 입력
// 인자 1 : matrix
// 가로 길이(matrix[i].length)와 세로 길이(matrix.length)가 모두 N인 2차원 배열
// matrix[i][j]는 number 타입

const rotateMatrix = function (matrix, rotation) {
  if (matrix.length === 0) return []

  let M = matrix.length
  let N = matrix[0].length

  let result = []
  for (let i = 0; i < N; i++) {
    let temp = []
    for (let j = 0; j < M; j++) {
      temp.unshift(matrix[j][i])
    }
    result.push(temp)
  }
  rotation = rotation - 1
  if (rotation > 0) return rotateMatrix(result, rotation)

  return result
}

// const rotateMatrix = function (matrix) {
//   // TODO: 여기에 코드를 작성합니다.
//   let result = [];
//   for(let i =0; i< matrix.length; i++){
//       let temp = []
//     for(let j =0; j< matrix.length; j++){
//       temp.unshift(matrix[j][i]);
//     }
//     result.push(temp);
//   }

// return result;
// };
