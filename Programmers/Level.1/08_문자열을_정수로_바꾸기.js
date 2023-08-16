// 8. 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

// 나의 풀이
function solution(s) {
    return Number(s)
}

// 다른 풀이 1
function strToInt(str){
    return str / 1
    }

// 다른 풀이 2
function strToInt(str){
    return + str;
    }

// TIL
// JavaScript의 큰 특징이기도 한데, 문자열을 숫자 연산자와 함께 사용하면 JavaScript가 계산을 하기 위해 자동으로 문자열을 숫자로 바꾸어 줌