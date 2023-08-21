// 23. 같은 숫자는 싫어 (스택, 큐)
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12906

// 나의 풀이: for문과 if문 사용
function solution(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// 다른 풀이 1: filter 함수 사용
function solution(arr) {
    return arr.filter((x, i) => x != arr[i+1]);
}

// TIL
// (1) 하나의 배열 안에서 서로를 비교할 때는 i와 i+1을 비교한다.
// (2) filter 함수를 사용한 풀이의 포인트
    // filter 함수의 콜백 함수는 현재 요소 x와 그 다음 인덱스의 요소 arr[i+1]를 비교
    // 만약 현재 요소 x와 다음 요소 arr[i+1]가 같지 않다면(true), 새로운 배열에 현재 요소 x를 포함시킴
    // 최종적으로 중복이 제거된 배열이 반환