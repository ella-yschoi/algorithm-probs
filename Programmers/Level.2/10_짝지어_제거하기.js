// 10. 짝지어 제거하기
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12973

// 나의 풀이
function solution(s) {
    // 문자열을 배열로 변환하고, reduce 함수를 사용하여 짝을 이루는 문자를 제거
    const result = s.split('').reduce((stack, current) => {
        // 스택이 비어있지 않고, 스택의 맨 위 문자와 현재 문자가 같으면
        if (stack.length > 0 && stack[stack.length - 1] === current) {
            // 스택에서 짝을 이루는 문자를 제거
            stack.pop();
        } else {
            // 아니면 현재 문자를 스택에 추가
            stack.push(current);
        }
    
    // 변환된 스택을 반환
    return stack; 
    }, []);

    // 모든 문자가 짝지어 제거되었으면 1을, 남아있으면 0을 반환
    return result.length === 0 ? 1 : 0; 
}

// 다른 풀이 1: 통과되기는 하나 효율이 매우 떨어짐
function solution(s) {
    const arr = s.split('');
    let answer = 0;
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i+1]) {
            arr.splice(i, 2); // 두 문자를 제거
            i = -1; // 처음부터 다시 검사하기 위해 인덱스를 -1로 설정
        }
    }

  return arr.length === 0 ? 1 : 0; // 모두 제거되었으면 1, 남아있으면 0 반환
}


/* TIL: 다른 풀이 1의 효율이 떨어지는 이유
splice 함수로 요소를 제거하는 경우,
해당 요소를 제거한 뒤 배열의 모든 요소를 한 칸씩 앞으로 당겨야 하는데, 이 과정에서 시간 복잡도가 O(n)이 되어 비효율적임.
특히, 코드에서 i를 -1로 설정하여 처음부터 다시 검사하는 부분은 시간 복잡도를 더욱 높이는 꼴.
따라서 splice를 호출하고, 배열을 재정렬해야 하므로 문자열 길이가 길어질수록 많은 비용이 들어감.
대신, 이 문제는 stack 자료구조를 활용하면 연속된 짝을 찾아 제거하는 작업을 O(n) 시간에 수행할 수 있음.
*/