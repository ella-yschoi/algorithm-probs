function solution(n, kth, card){
  // n장의 card(index) -> for문 n번
  // n장 중, 3장을 뽑아 합한 값을 기록
  // 중복 제거 -> set() 

  let answer;
  let temp = new Set(); // Set 객체 생성

  // 이전 loop 인덱스에 + 1부터 시작하여 다음 loop를 돌려야 조합이 됨
  for (let i = 0; i < n; i++) {
    for (let j = i+1; j < n; j++) {
      for (let k = j+1; k < n; k++) {
        temp.add(card[i] + card[j] + card[k]); // Set에 자료 추가하는 add() 사용
      }
    }
  }

  // Set은 sort를 지원하지 않으므로 배열로 만들어 줌
  // 내림차순 정리 후 k번째로 큰 수 (kth) 찾기
  let sortedCard = Array.from(temp).sort((a, b) => (b - a));
  answer = sortedCard[kth - 1];

  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr)); // 143
