// 다른 풀이 1
// 선택한 요소를 이전 요소와 비교 -> 한 칸씩 이동시킴 -> 위치 찾으면 삽입
// 모든 요소를 앞에서부터 차례대로 이미 정렬된 배열 부분과 비교하여, 자신의 위치를 찾아 삽입하는 방식
// 즉, 이미 정렬된 배열에서부터 자기 자신의 위치를 찾아 삽입된다고 하여 삽입 정렬이라고 함.
// j는 i 바로 앞에 있는 값들을 탐색 (i -1)
// temp를 arr1[i]로 초기화

function solution(arr1) {
  let answer = arr1;

  for (let i = 0; i < arr1.length; i++) { // 우선 전체 범위 반복
    let tmp = arr1[i], j; // 아직 정렬되지 않은 배열에서 삽입될 i 번째 정수를 미리 저장

    // 삽입할 요소의 올바른 위치 찾기: 역순으로 순회 (j--)
    // j가 0보다 크거나 같을 때까지만 비교를 계속함 -> 배열의 시작점에 도달했을 때 루프를 중단하기 위함
    for (j = i - 1; j >= 0; j--) { // 이미 정렬된 앞 부분도 탐색하기에 i - 1부터
      if (arr1[j] > tmp) arr1[j + 1] = arr1[j]; // 크면 j + 1 지점 뒷 편에 복사
      else break; // 작아서 멈춤
    }
    arr1[j + 1] = tmp; // 멈춘 j 지점 바로 다음에 삽입
  }
  return answer;
}

function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.lenth; i++) {
    let temp = arr[i];

    for (j - 1; j >= 0; j--) {
      if (arr[j] > temp) arr[j+1] = arr[j];
    }
    arr[j+1] = temp;
  }
  return answer;
}

let arr1 = [11, 7, 5, 6, 10, 9];
console.log(solution(arr1)); // 5 6 7 9 10 11


// 다른 풀이 2
function solution(arr2) {
  let answer = [];
  answer.push(arr2[0]);

  for (let i = 1; i < arr2.length; i++) {
    for (let j = 0; j <answer.length; j++) {
      if (arr2[i] < answer[j]) {
        answer.splice(j, 0, arr2[i]);
        break;
      } 
    }
  }
  return answer;
}

let arr2 = [11, 7, 5, 6, 10, 9];
console.log(solution(arr2));
