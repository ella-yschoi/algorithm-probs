// 15. String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. 

// 나의 풀이
function solution(seoul) {
    let answer = seoul.indexOf("Kim")
    return `김서방은 ${answer}에 있다`;
}

// TIL
// indexOf()는 배열에서 특정 요소를 찾을 수 있는 첫 번째 인덱스를 반환, 존재하지 않으면 -1을 반환함
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// 특정 요소를 찾아 인덱스 값을 뱉는 케이스
console.log(beasts.indexOf('bison')); // 1

// index 2부터 시작하는 케이스
console.log(beasts.indexOf('bison', 2)); // 4

// 특정 요소가 없는 케이스
console.log(beasts.indexOf('giraffe')); // -1