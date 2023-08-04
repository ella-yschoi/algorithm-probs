// 7. 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 

// 나의 풀이
function solution(n) {
    return n.toString().split('').reverse().map(m => m = Number(m));
}

// 문제 풀이 순서
// (1) 숫자를 문자열로 형변환: toString()
// (2) 문자 하나하나 끊어줌: split('')
// (3) 배열을 뒤집어 줌: reverse()
// (4) 배열을 쭉 돌기: map()
// (5) 하나씩 숫자로 변환: Number() or ParseInt()