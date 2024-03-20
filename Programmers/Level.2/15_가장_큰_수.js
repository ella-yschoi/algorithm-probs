// 15. 가장 큰 수
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42746?language=javascript

// 나의 풀이
// 가장 큰 수 찾기
// for문 순회 -> 맨 앞 자리는 numbers 배열 중 가장 큰 수를 뽑아야 함: Math.max()
// 배열의 각 요소의 첫 번째 숫자 크기가 제일 큰 것 찾기 e.g. 6 > 30
// 그 다음 다음에 올 숫자 찾기 ... 반복
// 배열 -> 문자열로 바꾸어 리턴

function solution(numbers) {
  // 배열 -> 문자열 변환
  let answer = numbers.map(num => num.toString())
                      // 문자열을 조합한 결과가 가장 큰 순으로 정렬
                      .sort((a, b) => (b + a) - (a + b))
                      // 정렬된 문자열 이어 붙이기
                      .join('') 
  
  // 단, 만약 가장 큰 수로 나온게 0이라면 전체 수는 0이라는 예외 처리
  return answer[0] === '0' ? '0' : answer;
}
