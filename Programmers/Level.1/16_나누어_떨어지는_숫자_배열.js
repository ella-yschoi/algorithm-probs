// 16. array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요. divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 나의 풀이
function solution(arr, divisor) {
    let answer = [];
    // arr에 divisor로 나누어 떨어지는 값이 있는 경우: 반복문 안의 조건문
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            answer.push(arr[i]);
        }
    }
    // answer 배열에 element가 하나도 없는 경우 (즉, arr에 divisor로 나누어 떨어지는 값이 없는 경우): 조건문만
    if (answer.length === 0) {
        answer.push(-1);
    }
    // 최종 answer 배열은 오름차순으로 정렬하여 리턴
    answer.sort((a, b) => a - b);
    return answer;
}

// 다른 풀이: filter()와 삼항연산자 사용
function solution(arr, divisor) {
    let answer = arr.filter(v => v % divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}

// TIL
// (1) 처음에는 아래와 같이 if와 else if로 조건문을 사용했는데, 이 문제에서는 아예 다른 조건문을 사용해야 한다.
// 더불어, 두 번째 조건문에서 arr.length === 0 이 아닌, 최종 배열인 answer.length 라는 점도 주의!
function solution(arr, divisor) {
    let answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            answer.push(arr[i]);
        // else if로 하면 안되고, 또다른 if문으로 빼주어야 함
        } else if (answer.length === 0) {
            answer.push(-1);
        }
    }
    answer.sort((a, b) => a - b);
    return answer;
}

// (2) filter() 메소드
// 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);

console.log(result); // ["exuberant", "destruction", "present"]