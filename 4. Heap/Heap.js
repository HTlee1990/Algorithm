//값을 바꿔주는 함수.
function swap(idx1, idx2, arr){
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}
//부모노드 인덱스 찾는 함수.
function getParentIdx(idx){
    if(idx % 2 === 0) return (idx/2) -1
    return (idx-1)/2
}
//완전이진트리로 정렬해줄 함수.
function insert(heap, item){
    heap.push(item)
    let idx = heap.length-1;
    let pidx = getParentIdx(idx);
    //더이상 부모노드중에 자신보다 작은 값이 없을때까지 반복
    while(heap[pidx] < item){
        swap(idx, pidx, heap);
        idx = pidx;
        pidx = getParentIdx(idx);
    }

    return heap;
}

//하나씩 순회 하면서 부모노드보다 큰지 작은지 확인하고 넣기
function MaxHeap(arr){
    return arr.reduce((heap, item) => insert(heap, item), [])
}

//루트 노드(최댓값 혹은 최소값)를 제거하고 그 다음 큰 수를 찾고 정렬하는 과정
function remove(heap){
    //최댓값과 마지막인덱스 의 위치 스왑
    swap(0, heap.length-1, heap);
    //마지막인덱스로 옮겨진 최댓값을 삭제.
    heap.pop();
    let idx = 0;
    //자식노드 중 가장 큰 값을 찾는 것이 필요.
    let cIdx = largestChild(heap, idx);
    //자식노드가 존재하고, 부모노드가 자식노드보다 작을때
    while(cIdx !== undefined && heap[idx] < heap[cIdx]){
        swap(idx, cIdx, heap);
        idx = cIdx;
        cIdx = largestChild(heap, idx);
    }

    //만약 루트노드는 조건을 만족하여 while이 돌지 않지만, 자식노드 쪽에서 조건을 만족 시키지 못한다면???;

    return heap;
}
//자식노드중 큰 노드의 인덱스를 출력하는 함수.
function largestChild (heap, idx){
    const child1 = 2*idx + 1;
    const child2 = 2*idx + 2;

    if(heap[child1] === undefined && heap[child2] === undefined ) return;
    if(heap[child1] >= heap[child2]) return child1;
    else return child2;
}