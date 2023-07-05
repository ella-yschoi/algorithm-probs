// 5. 정수 num1과 num2가 주어졌을 때, 두 수가 같으면 1 다르면 -1을 return 하는 함수 완성

// 나의 풀이
function solution(num1, num2) {
    if (num1 !== num2) {
        return -1;
    } else {
        return 1;
    }
}

// 다른 풀이 : 삼항연산자 활용
function solution(num1, num2) {
    var answer = num1 === num2 ? 1 : -1;
    return answer;
}
