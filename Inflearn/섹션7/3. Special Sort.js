// 나의 풀이 -> 틀린 풀이!
// 음의 정수는 앞, 양의 정수가 뒤
// 단, 양의 정수와 음의 정수 순서는 변함 없어야 함
function solution(arr1) {
  let answer = arr1;
  for (let i = 0; i < arr1.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[j] < 0) idx = j;
    }
    [arr1[i], arr1[idx]] = [arr1[idx], arr1[i]];
  }
  return answer;
}

let arr1 = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr1)); // -6, -2, -3, 3, 2, 5, 6, 1


// 다른 풀이 1 -> 버블 정렬 사용! 이웃한 것끼리만 바꾸므로 순서가 바뀌지 않음
function solution(arr2) {
  let answer = arr2;
  for (let i = 0; i < arr2.length - 1; i++) {
    for (let j = 0; j <arr2.length - i - 1; j++) {
      if (arr2[j] > 0 && arr2[j + 1] < 0){
        [arr2[j], arr2[j + 1]] = [arr2[j + 1], arr2[j]];
      }
    }   
  }
  return answer;
}

let arr2 = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr2)); // -3 -2 -6 1 2 3 5 6


// 다른 풀이 2
function solution(arr3){
  let answer=[];
  for (let x of arr3) {
    if(x < 0) answer.push(x);
  }
  for (let x of arr3) {
    if(x > 0) answer.push(x);
  }
  return answer;
}

let arr3=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr3)); // -3 -2 -6 1 2 3 5 6
