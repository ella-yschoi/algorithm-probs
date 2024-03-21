// 두 부분 집합의 원소 합이 서로 같은 경우 -> YES
// 계속 더하는 함수 생성
// 그리고 그 함수를 가지고 재귀로 계속 요소간의 합을 맞춰봐야 하나?

function solution(arr) {
  let answer = "NO", flag = 0;
  const total = arr.reduce((a, b) => a + b, 0); // reduce로 계산 후 sum에 누적
  const n = arr.length;

  function DFS(L, sum) { // L: level
    // 답이 나옴
    if (flag) return;
    // 배열 길이만큼 뻗었을 때. 즉, 여기서는 L이 6일 때
    if (L === n) {
      // 반대편 원소 총 합이 내가 더한 총 합과 같나
      if ((total - sum) === sum) {
        answer = "YES";
        // 답이 발견되면 1로 변경해 다른 부분집합 보지 않아도 되도록 재귀 끝내기
        flag = 1;
      }
    }
    else {
      // 다음 원소로 진행
      DFS(L + 1, sum + arr[L]); // O: sum + L번 인덱스 더해주기
      DFS(L + 1, sum); // X: 그냥 sum만 내려주기
    }
  }
  DFS(0, 0);
  return answer;
}

let arr=[1, 3, 5, 6, 7, 10]; // {1, 3, 5, 7} = {6, 10} => 16으로 합이 같음
console.log(solution(arr)); // YES


// TIL
  // 서로소 집합으로 합 비교하는 문제는 쓰이지 않는 원소가 없어야 함
  // (total - 내가 만든 집합의 합 === 나머지 집합의 합) 과 같은지 비교