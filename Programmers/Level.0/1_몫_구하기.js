// 1. num1을 num2로 나눈 몫을 return 하는 함수 완성해주세요.

// 나의 풀이
function solution (num1, num2) {
    let answer = 0;

    answer = num1 / num2
    parsedAnswer = parseInt(answer)
    
    return parsedAnswer;
}

// 다른 풀이 1
function solution(num1, num2) {
    return parseInt(num1 / num2);
}

// 다른 풀이 2
function solution(num1, num2) {
    return Math.floor(num1/num2); 
}

// TIL
// Math.floor(): 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
console.log(Math.floor(5.05)); // 5
console.log(Math.floor(-5.05)); // -6