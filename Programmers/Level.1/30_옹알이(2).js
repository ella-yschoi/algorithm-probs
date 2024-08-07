// 30. 옹알이 (2)
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/133499

// 나의 풀이
function solution(babbling) {
  const possibleWords = ["aya", "ye", "woo", "ma"];
  let count = 0;
  
  // 각 문자열을 확인
  babbling.forEach(word => {
    let isValid = true;
    let previous = "";
    
    // 가능한 단어로 구성되어 있는지 확인
    while (word.length > 0 && isValid) {
      let found = false;
      
      for (const possibleWord of possibleWords) {
        if (word.startsWith(possibleWord)) {
          if (previous === possibleWord) {
            isValid = false; // 연속되면 불가
            break;
          }
        previous = possibleWord;
        word = word.substring(possibleWord.length);
        found = true;
        break;
        }
      }
      
      if (!found) {
        isValid = false;
      }
    }
    
    if (isValid && word.length === 0) {
      count++;
    }
  })
  return count;
}


// 다른 풀이 1
function solution(babbling) {
  const babblables = ["aya", "ye", "woo", "ma"];

  // 배열을 순회하며 가능한 발음 개수를 셈
  return babbling.reduce((possible, babbl) => {
    // 연속된 발음이 있는지 확인하고, 있으면 카운트하지 않고 건너뜀
    for (let i = 0; i < babblables.length; i += 1) {
      if (babbl.includes(babblables[i].repeat(2)))
        return possible;
    }

    // 남은 문자가 있는지 확인하기 위해 각 발음을 공백으로 대체
    // 만약 남은 문자가 없다면, 유효한 단어로 간주
    for (let i = 0; i < babblables.length; i += 1) {
      babbl = babbl.split(babblables[i]).join(' ').trim();
    }

    // 모든 발음이 제거되었는지 확인
    if (babbl === '') {
      return possible + 1;
    }

    return possible;
  }, 0);
}


// TIL
// trim() 메서드는 앞뒤 공백을 제거하여 빈 문자열 비교를 정확히 하기 위해 사용된다.
