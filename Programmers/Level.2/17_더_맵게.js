// 17. 더 맵게
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42626

// 나의 풀이: 효율성 떨어짐
function solution(scoville, K) {
  // 문제 이해
    // mixedScoville = minScoville + (minSecondScoville * 2);
    // while(mixedScoville가 K 이상이 될 때까지 반복)
    // if not -> return -1
    // scoville 배열, 원하는 스코빌 K
    // 섞어야 하는 최소 횟수를 return
  
  // 풀이 방향
    // scoville 배열에서 최솟값과 그 다음 최솟값을 찾아서 공식에 대입해 연산
    // while 문으로 K 이상이 될 때까지 반복
  
  // 최소 힙 구현: 얕은 복사본 생성해 원본 배열 보호 && 항상 첫 번째 값이 최솟값이 되도록 정렬
  const minHeap = scoville.slice().sort((a, b) => (a - b));
  let count = 0;
  
  while (minHeap.length > 1 && minHeap[0] < K) {
    // 가장 작은 두 요소 꺼내서 섞기 : shift()로 배열의 첫 번째 요소를 제거하고 그 값을 반환
    const minScoville = minHeap.shift();
    // shift() 두 번 호출해 그 다음 최솟값 꺼내기 -> *효율성이 떨어질 수 있음
    const minSecondScoville = minHeap.shift();
    
    const mixedScoville = minScoville + (minSecondScoville * 2);
    
    minHeap.push(mixedScoville);
    // 배열이 여전히 최소 힙을 유지하게끔 다시 오름차순 정렬
    minHeap.sort((a, b) => (a - b));
    
    count ++;
  }
  
  // 최종적으로 모든 음식의 스코빌 지수 K 이상 여부 확인
  if (minHeap[0] < K) {
    return -1;
  }
  return count;
}


// 다른 풀이 1: 직접 최소 힙 구현
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 부모 인덱스
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // 왼쪽 자식 인덱스
  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  // 오른쪽 자식 인덱스
  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  // 요소 교체
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  // 요소 삽입
  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // 요소 제거
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  // 힙 유지 - 삽입 후 위로
  heapifyUp() {
    let index = this.heap.length - 1;
    const lastInsertedValue = this.heap[index];

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.heap[parentIndex] > lastInsertedValue) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // 힙 유지 - 제거 후 아래로
  heapifyDown() {
    let index = 0;

    while (this.getLeftChildIndex(index) < this.heap.length) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      const smallerChildIndex =
        rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[leftChildIndex]
        ? rightChildIndex
        : leftChildIndex;

      if (this.heap[index] > this.heap[smallerChildIndex]) {
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      } else {
        break;
      }
    }
  }

  // 최솟값 반환
  peek() {
    return this.heap[0];
  }

  // 힙이 비었는지 확인
  size() {
    return this.heap.length;
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();
  scoville.forEach(num => minHeap.push(num));

  let count = 0;

  while (minHeap.size() > 1 && minHeap.peek() < K) {
    const minScoville = minHeap.pop();
    const minSecondScoville = minHeap.pop();

    const newScoville = minScoville + (minSecondScoville * 2);
    minHeap.push(newScoville);

    count++;
  }

  return minHeap.peek() >= K ? count : -1;
}


// TIL
// 효율성을 높이기 위해 JavaScript에서 제공하는 기본 정렬 메서드를 사용하는 대신,
// Min-Heap (최소 힙) 자료 구조를 직접 구현하거나, PriorityQueue와 같은 라이브러리를 사용하는 것이 좋다.
// 최소 힙은 항상 최솟값을 효율적으로 추출할 수 있어 이 문제에 매우 적합하다.
// 단, JavaScript에는 내장된 PriorityQueue가 없기 때문에, 우선순위 큐 또는 최소 힙을 직접 구현해야 한다.
