function solution(student){  
	// student들은 무작위로 선택
	// voted 배열에 student 수인 n만큼 투표용지가 나와야 함
	// answer -> Math.max() student 출력 

	let answer;
	// voted는 key와 value 한 쌍으로 이루어짐 (e.g. voted.set(B, 1) ...)
	// Map이라는 해시 객체 생성자 호출
	let voted = new Map();
	
	for (let candidate of student) {
		// has: 키가 존재하나
		if (voted.has(candidate)) {
			// 존재한다면, get으로 기존 키를 가져오고 +1씩 증가시켜 다시 set
			voted.set(candidate, voted.get(candidate)+1);
		} else {
			// 기존 키가 없다면 1로
			voted.set(candidate, 1);
		}

		// winner는 안전한 최소 정수값으로 초기화
		let winner = Number.MIN_SAFE_INTEGER;
		// 키, 값 대응
		for (let [key, value] of voted) {
			// value가 기존 winner의 값보다 크다면 answer
			if (value > winner) {
				winner = value;
				answer = key;
			}
		}
	}
	return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str)); // C
