// 4. 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 나의 풀이: 삼항 연산자 사용
function solution(num) {
    return num % 2 === 0 ? "Even" : "Odd"
}

// 다른 풀이 1: 삼항 연산자에 비교 연산자 생략
function solution(num) {
    return num % 2 ? "Odd" : "Even"
}

// 다른 풀이 2: 기본 조건문
function solution(num) {
    if (num % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

// TIL
// 삼항 연산자에 비교 연산를 넣은 수식?을 생략해도 되는군