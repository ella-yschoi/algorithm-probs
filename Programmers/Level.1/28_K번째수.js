// 28. K번째수
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42748?language=javascript

// 나의 풀이
function solution(array, commands) {
  let answerArray = [];

  for (let i = 0; i < commands.length; i++) {
    let [start, end, position] = commands[i];
    let slicedArray = array.slice(start - 1, end); // 시작 인덱스는 1부터 시작하므로 1을 빼줌

    slicedArray.sort((a, b) => a - b); // 숫자 배열 정렬을 위한 콜백 함수 제공
    answerArray.push(slicedArray[position - 1]); // position번째 요소를 가져오기 위해 1을 빼줌
  }

  return answerArray;
}

// 다른 풀이: 구조 분해 할당
function solution(array, commands) {
  return commands.map(command => {
    const [start, end, position] = command // command 배열의 각 요소를 start, end, position 세 변수에 각각 할당
    const newArray = array
      .filter((value, index) => index >= start - 1 && index <= end - 1)
      .sort((a, b) => a - b)    

    return newArray[position - 1];
  })
}

// TIL
// 구조 분해 할당 풀이 방법에서는 map()으로 순회 후 → 각 command의 요소를 구조분해 할당으로 추출한 후
// filter()을 사용해 start와 end 사이의 요소를 필터링 → 오름차순 정렬 → 필요한 위치의 원소 반환 → 최종적으로 새로운 배열로 반환
// 적절한 내장함수와 최신 문법까지 잘 사용한 풀이라고 생각된다.
