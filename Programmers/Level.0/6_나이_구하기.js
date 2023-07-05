// 0. 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 함수를 완성

// 나의 풀이
function solution(age) {
    let answer = 0;
    answer = 2023 - age
    
    return answer;
}

// 다른 풀이: 화살표 함수 활용
const solution = (age) => 2023 - age
