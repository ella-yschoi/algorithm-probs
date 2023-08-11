// 17. 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// 나의 풀이
function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        signs[i] === true ? answer += absolutes[i] : answer -= absolutes[i];
    }
    return answer;
}

// 다른 풀이 1
function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
    }
    return answer;
}

// 다른 풀이 2
function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((v, i) => {
        if (signs[i]) {
            answer += v;
        } else {
            answer -= v;
        }
    })
    return answer;
}

// TIL
// (1) 아래 두 식이 같은 것을 보니, 삼항 연산자에 boolean 값을 굳이 넣지 않아도 JavaScript가 알아서 인식하는군
signs[i] === true ? answer += absolutes[i] : answer -= absolutes[i];
signs[i] ? answer += absolutes[i] : answer -= absolutes[i]

// (2) forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행한다.
const array1 = ['a', 'b', 'c'];
array1.forEach((element) => console.log(element));
// "a"
// "b"
// "c"
