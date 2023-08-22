// 22. 2019 KAKAO BLIND RECRUITMENT: 실패율
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42889

// 나의 풀이
// 인자로 N(스테이지 개수), stages(사용자들의 현재 스테이지 정보를 담은 배열)를 받음
function solution(N, stages) {
    // 각 스테이지의 실패율과 사용자 수를 저장할 배열 초기화
    let result = [];

    // 1부터 N까지 반복하여 각 스테이지의 실패율 계산
    for (let i = 1; i <= N; i++) {
        // 해당 스테이지에 도달한 총 사용자 수 계산
        let reach = stages.filter((x) => x >= i).length;
        // 해당 스테이지에서 클리어를 하지 못해 아직 머물러 있는 사용자 수 계산
        let noClear = stages.filter((x) => x === i).length;
        // 실패율을 계산하여 [스테이지 번호, 실패율] 형태로 결과 배열에 추가
        result.push([i, noClear / reach]);
    }
    
    // 실패율을 기준으로 결과 배열을 내림차순으로 정렬
    result.sort((a, b) => b[1] - a[1]);
    
    // 결과 배열에서 스테이지 번호만 추출하여 반환
    return result.map((x) => x[0]);
}

// 다른 풀이 1
// 인자로 N(스테이지 개수), stages(사용자들의 현재 스테이지 정보를 담은 배열)를 받음
function solution(N, stages) {
    // 각 스테이지의 실패율과 사용자 수를 저장할 배열 초기화
    let result = [];
    // 해당 스테이지에 도달한 총 사용자 수 계산
    let reach = stages.length;

    // 1부터 N까지 반복하여 각 스테이지의 실패율과 사용자 수 계산
    for (let i = 1; i <= N; i++) {
        // 해당 스테이지를 클리어하지 못한 사용자 수 계산
        let noClear = stages.filter((user) => i === user).length;
        // 실패율 계산
        let ratio = noClear / reach;
        // 해당 스테이지의 사용자 수를 빼서 다음 스테이지의 사용자 수 계산을 위해 줄임
        reach -= noClear;
        // 스테이지 번호와 실패율을 객체로 저장하여 배열에 추가
        result.push({ stage: i, ratio: ratio });
    }

    result.sort ((a, b) => {
        // 실패율을 기준으로 정렬, 실패율이 같을 경우 스테이지 번호 오름차순 정렬
        if (a.ratio === b.ratio) {
            return a.stage - b.stage;
        // 실패율을 기준으로 정렬, 실패율이 다를 경우 스테이지 번호 내림차순 정렬
        } else {
            return b.ratio - a.ratio;
        }
    });

    // 결과 배열에서 각 객체의 스테이지 번호를 추출하여 반환
    return result.map(x => x.stage);
}

// TIL
// 메서드들을 알고 있지만 적재적소에 쓰는건 아직 어렵다.
// 이 문제는 두고두고 뜯어보며 복습해야지