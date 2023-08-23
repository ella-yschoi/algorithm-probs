// 25. 폰켓몬
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/1845

// 나의 풀이: forEach와 조건문 사용
function solution(nums) {
  let answer = 0;

  // 배열 nums의 길이를 2로 나눈 값을 num에 저장
  const num = nums.length / 2;

  // 객체 obj를 초기화
  let obj = {};

  // 배열 nums의 각 요소에 대해 순회하며 객체 obj에 key-value 쌍 추가
  nums.forEach((element, key) => {
    obj[element] = element;
  });

  // 객체 obj에 저장된 고유한 요소의 개수를 types에 저장
  const types = Object.keys(obj).length;

  // num과 types를 비교하여 결과 변수 answer에 값을 할당
  if (num <= types) {
      answer = num;
  } else {
      answer = types;
  }
  return answer;
}

// 다른 풀이: new Set() 사용
function solution(nums) {
  // 최대 선택 가능한 요소 수를 저장하는 변수 max 초기화
  const max = nums.length / 2;

  // '중복 없는 배열'을 생성하여 저장하는 변수 arr 초기화
  const arr = [...new Set(nums)];

  // arr 배열의 길이와 max 값을 비교하여 반환할 값을 결정
  return arr.length > max ? max : arr.length;

  // arr.length > max를 비교하여, 중복 없는 배열의 길이가 최대 선택 가능한 요소 수보다 크면 max를 반환
  // 그렇지 않으면 중복 없는 배열의 길이를 반환

  // 이렇게 하면 중복 없는 요소를 고를 때 최대한으로 선택할 수 있는 경우와
  // 중복 없이 모든 요소를 선택하는 경우 중에 더 적은 수를 반환함
}

// TIL