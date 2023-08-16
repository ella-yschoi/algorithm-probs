// 9. 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 나의 풀이: 반복문 조건문 활용
function solution(s){
    let lowerS = s.toLowerCase();
    
    for (let i = 1; i <= 50; i++) {
        if (lowerS.split("p").length === lowerS.split("y").length) {
            return true;
        } else {
            return false;
        }
    }
}

// 다른 풀이 1: 비교 연산자 활용
function solution(s){
    return s.toLowerCase().split("p").length === s.toLowerCase().split("y").length;
    }

// 다른 풀이 2: reduce()와 삼항연산자의 조합
function solution(s){
    return [...s.toLowerCase()].reduce((acc, cur) => {
        if (cur ==="p") return acc + 1;
        else if (cur ==="y") return acc - 1;
        return acc;
    }, 0) ? false : true;
}

// TIL
// (1) JavaScript의 특성상 조건문을 굳이 쓰지 않고 비교연산자만으로 boolean 값을 도출할 수 있다.
// (2) reduce()를 적재적소에 써주면 좋다