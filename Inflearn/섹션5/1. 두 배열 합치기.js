// 나의 풀이
function solution(arr1, arr2){
  // arr1의 크기 n, arr2의 크기 m
  // 오름차순으로 정렬된 두 배열을 오름차순으로 합쳐 출력
  // e.g. [1,3,5] + [2,3,6,7,9] -> [1,2,3,3,5,6,7,9] : 중복 포함
  // concat() or spread syntax or push() tkdyd

  let answer = arr1.concat(arr2).sort((a, b) => (a - b));

  return answer;
}

let a1=[1, 3, 5];
let b1=[2, 3, 6, 7, 9];
console.log(solution(a1, b1)); // 1 2 3 3 5 6 7 9


// 다른 풀이
function solution(arr1, arr2){
  let answer=[];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = p2 = 0; // 초기화

  // 두 배열 비교
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]); // 더 작은 쪽을 push()
    else answer.push(arr2[p2++]);
  }

  // 나머지 넣기
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);

  return answer;
}

let a2 = [1, 3, 5];
let b2 = [2, 3, 6, 7, 9];
console.log(solution(a, b)); // 1 2 3 3 5 6 7 9
