// 13. 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.

// 나의 풀이: 조건문과 반복문 활용
function solution(a, b) {
    let answer = 0;
    
    // a가 b보다 크거나 같을 때
    if (a >= b) {
        for (let i = b; i <= a; i++) {
            answer += i;
        }
    // a가 b보다 작거나 같을 때
    } else {
        for (let j = a; j <= b; j++) {
            answer += j;
        }
    }
    return answer;
}

// 다른 풀이 1: 최솟값과 최댓갓 메소드 활용
function solution(a, b) {
    let answer = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        answer += i;
    } 
    return answer;
}

// 다른 풀이 2: 수학적 접근
function solution(a, b) {
    let answer = 0;
    return (a + b) * (Math.abs(a - b) + 1) / 2;
}

// TIL
// (1) Math.abs(): 절대값을 반환하는 메소드
function difference(a, b) {
    return Math.abs(a - b);
    }

  console.log(difference(3, 5)); // 2
  console.log(difference(5, 3)); // 2

// (2) 가우스 공식
// 등차수열의 합 = (첫 항 + 마지막 항) * (항의 개수) / 2
// 위 문제에 적용: (a + b) * (Math.abs(b - a) + 1) / 2