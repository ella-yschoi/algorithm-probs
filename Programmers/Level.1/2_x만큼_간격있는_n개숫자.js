// 2. 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴

// 나의 풀이
function solution(x, n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i*x)
    }
    return arr;
}

// 이 문제의 포인트
// (1) 인덱스 n개까지만 도출해야하므로 n이하까지만 반복
// (2) 배열에 데이터를 넣으려면 push 메소드 사용
// (3) 숫자 x만큼 늘어나야 하니 i에 x를 곱해줌