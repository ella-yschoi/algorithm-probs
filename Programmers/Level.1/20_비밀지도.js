// 20. 2018 KAKAO BLIND RECRUITMENT [1차] 비밀지도
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/17681
// 문제 해설: https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/

// 나의 풀이
function solution(n, arr1, arr2) {
    let answer = [];
    for (let i = 0; i < n; i++) {

        // 각 배열의 요소를 2진수로 변환하여 문자열로 저장
        let temArr1 = arr1[i].toString(2);
        let temArr2 = arr2[i].toString(2);
        
        // 변환된 2진수 문자열의 길이가 n보다 작을 경우, 앞에 0을 채워서 길이를 맞춤
        temArr1 = '0'.repeat(n - temArr1.length) + temArr1;
        temArr2 = '0'.repeat(n - temArr2.length) + temArr2;
        
        // 지도의 해당 행을 저장할 문자열 초기화
        let final = '';
        
        // n번 반복하며 각 지도의 요소를 비교하여 최종 지도를 만듦
        for (let j = 0; j < n; j++) {
            // 두 지도 중 하나라도 해당 위치에 벽(1)이 있으면 최종 지도에 # 추가
            if (temArr1[j] == 1 || temArr2[j] == 1) {
                final += "#";
            } else {  // 둘 다 0일 경우 공백 추가
                final += " ";
            }
        }
        // 완성된 최종 지도 문자열을 결과 배열에 추가
        answer.push(final);
    }
    return answer;
}

// 다른 풀이
let solution = (n, arr1, arr2) =>
    // arr1 배열을 map 함수를 이용하여 새로운 배열로 변환
    arr1.map((arr1, i) =>
        // 현재 arr1과 arr2 배열의 같은 인덱스 요소를 비트 OR 연산하여 2진수로 변환 후 문자열로 저장
        (arr1 | arr2[i]).toString(2)
            // 변환된 2진수 문자열의 길이가 n보다 작을 경우, 앞에 0을 채워서 길이를 맞춤
            .padStart(n, '0')
            // 2진수 문자열에서 0을 공백으로 대체하여 최종 지도의 빈 공간으로 처리
            .replace(/0/g, ' ')
            // 2진수 문자열에서 1을 #으로 대체하여 최종 지도의 벽으로 처리
            .replace(/1/g, '#')
    );

// TIL
// (1) 문제 풀이 포인트
    // 1. 각 요소를 비트 OR 연산을 수행한 뒤 2진수로 변환
    // 2. 변환된 2진수를 길이가 n이 될 때까지 0으로 채워주기
    // 3. 2진수 문자열에서 0은 공백으로, 1은 #으로 대체하여 최종 지도를 만들기
    // 4. 최종적으로 지도를 만들어내는 새로운 배열을 리턴

// (2) 비트 연산 시 자릿수를 맞춰주는 이유
    // 비트 연산을 할 때 앞에 0을 채워서 자릿수(길이)를 맞추는 이유는 **같은 자릿수의 비트 연산을 수행하기 위함임.
    // 만약 두 숫자의 자릿수가 다르다면, 비교되는 자릿수마다 서로 다른 비트 연산이 수행되어 예상과 다른 결과를 얻을 수 있음.
    // 따라서 같은 자릿수를 가지도록 앞에 0을 채워주어 정확한 비트 연산이 가능하도록 함

// (3) padStart()
    // 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환함.
    // 채워넣기는 대상 문자열의 시작(좌측)부터 적용
    const str1 = '5';
    console.log(str1.padStart(2, '0')); // "05"

// (4) repeat()
    // 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환함.
    "abc".repeat(-1); // RangeError
    "abc".repeat(0); // ''
    "abc".repeat(1); // 'abc'
    "abc".repeat(2); // 'abcabc'