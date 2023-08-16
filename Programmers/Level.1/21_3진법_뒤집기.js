// 21. 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 나의 풀이
function solution(n) {
    let answer = n.toString(3).split("").reverse().join("");
    return parseInt(answer, 3);
}

// 다른 풀이 1: 화살표 함수, parseInt를 크게 묶어줌
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

// 다른 풀이 2: 내장함수를 사용하지 않은 진법 변환
function solution(n) {
    const answer = [];

    // 숫자 n이 0이 아닐 때까지 반복
    while (n !== 0) {
        // n을 3으로 나눈 나머지를 배열의 맨 앞에 추가
        answer.unshift(n % 3);
        // n을 3으로 나눈 몫을 새로운 n으로 설정 (소수점 이하 버림)
        n = Math.floor(n / 3);
    }

    // 배열에 저장된 숫자를 3진법으로 변환하여 10진수로 계산
    // 배열의 요소를 순회하며 3의 거듭제곱(3^i)를 곱한 값을 누적하여 합산한 뒤 반환
    return answer.reduce((acc, v, i) => acc + (v * Math.pow(3, i)), 0);   
}


// TIL

// 진법 변환: 10진수 -> N진수
var number = 1023; 
number.toString(2);	// 10진수에서 2진수로 변환
number.toString(8);	// 10진수에서 8진수로 변환
number.toString(16); // 10진수에서 16진수로 변환

// 진법 변환: N진수 -> 10진수
var number = "1111111111";
parseInt(number, 2); // 2진수에서 10진수로 변환

var number = "1777";
parseInt(number, 8); // 8진수에서 10진수로 변환