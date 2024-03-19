// 나의 풀이
  // 각 문자의 출현 횟수를 계산하며 상쇄시키는 방식으로 접근
  // 순서는 다르지만 구성은 일치하는지 판별 (대소문자 구분됨)
  // -> 각 값을 Map 객체 생성 후 has
  // 두 개 맞으면 "YES", 아니면 "NO" 출력

function solution(str1, str2) {
  // 일단 두 문자열 길이가 다르면 아나그램 아님
  if (str1.length !== str2.length) {
    return "NO";
  }

  // Map 객체 생성
  let map = new Map();

  // str1의 문자 카운트 증가시키기
  for (let char of str1) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  // str2의 문자 카운트 감소시키기
  for (let char of str2) {
    if (!map.has(char) || map.get(char) === 0) {
      return "NO"; // 겹치는 문자가 없거나, (str1은 있는데 str2의) 카운트가 0이면 아나그램 아님
    }
    map.set(char, map.get(char) - 1);
  }

  return "YES";
}

console.log(solution("AbaAeCe", "baeeACA")); // YES
console.log(solution("hello", "billion")); // NO
