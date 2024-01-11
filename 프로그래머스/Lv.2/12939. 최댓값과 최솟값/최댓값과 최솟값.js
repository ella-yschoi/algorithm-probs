function solution(s) {
  const numbers = s.split(' ').map(Number); // 문자열을 공백으로 분리하고 숫자로 변환하여 배열 생성

  // apply를 사용하여 배열 내 최솟값과 최댓값 계산
  const min = Math.min.apply(null, numbers);
  const max = Math.max.apply(null, numbers);

  return `${min} ${max}`; // 최솟값과 최댓값 문자열로 반환
}
