// 24. 최소 직사각형
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/86491

// 나의 풀이
function solution(sizes) {
    // 가로와 세로 크기를 저장할 변수 초기화
    let width = 0;
    let height = 0;

    // sizes 배열을 순회하며 각 사각형의 크기 정보 처리
    for (let i = 0; i < sizes.length; i++) {
        // 만약 가로 크기가 세로 크기보다 작다면, 크기 정보를 뒤집어줌
        if (sizes[i][0] < sizes[i][1]) {
            sizes[i].reverse();
        }
        // 현재 사각형의 가로 크기가 기존 최대 가로 크기보다 크다면 업데이트
        if (sizes[i][0] > width) {
            width = sizes[i][0];
        }
        // 현재 사각형의 세로 크기가 기존 최대 세로 크기보다 크다면 업데이트
        if (sizes[i][1] > height) {
            height = sizes[i][1];
        }
    }

    // 최대 가로 크기와 최대 세로 크기를 곱하여 최종 결과 반환
    return width * height;
}

// 다른 풀이: 삼항연산자와 forEach 사용
function solution(sizes) {
    // 사각형 크기 정보를 회전하여 저장할 배열 초기화
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

    // 가로와 세로의 최대 크기를 저장할 배열 초기화
    let maxSize = [0, 0];
    
    // 회전된 사각형 크기 정보 배열을 순회하며 최대 크기 계산
    rotated.forEach(([w, h]) => {
        // 현재 사각형의 가로 크기가 기존 최대 가로 크기보다 크다면 업데이트
        if (w > maxSize[0]) maxSize[0] = w;
        // 현재 사각형의 세로 크기가 기존 최대 세로 크기보다 크다면 업데이트
        if (h > maxSize[1]) maxSize[1] = h;
    })
    
    // 최대 가로 크기와 최대 세로 크기를 곱하여 최종 결과 반환
    return maxSize[0] * maxSize[1];
}

// TIL
// forEach()
    // (1) 정의: 주어진 함수를 배열 요소 각각에 대해 실행한다.
    const array1 = ["a", "b", "c"];
    array1.forEach((element) => console.log(element));

    // "a"
    // "b"
    // "c"

    // (2) 용례: for 반복문을 forEach()로 바꾸기
    const items = ["item1", "item2", "item3"];
    const copy = [];

    // for 반복문 ver.
    for (let i = 0; i < items.length; i++) {
    copy.push(items[i]);
    }

    // forEach() ver.
    // forEach()는 배열의 각 요소를 순회하면서 콜백 함수를 실행
    // 여기서는 배열 items의 각 요소가 item 매개변수로 전달됨
    items.forEach(function(item) {
    copy.push(item);
    });