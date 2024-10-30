// 394. Decode String
// 문제 링크: https://leetcode.com/problems/decode-string/description/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
// Time Complexity: O(n + m), Space Complexity: O(n + m)

// k[encoded_string]: encoded_string that is included in [] repeating K times
// sequential processing : digits, [, string, and ]

const decodeString = function(s) {
  let stack = [];
  let currentStr = ''; // current decoding
  let currentNum = 0;

  for (let i = 0; i < s.length; i++) { // [TC] O(N): traverse s once
    let char = s[i]; // setting the specific form

    if (!isNaN(char)) { // because char should be a num
    // To correctly handle each digit when the number has multiple digits
    // In other words, converting numbers from strings
    // e.g. s = '12[a]' -> 1 * 10 + 2 = 12
    currentNum = currentNum * 10 + Number(char); // [TC] O(1): processed once
  } else if (char === '[') { // save
    stack.push(currentStr); // [TC] O(1): processed once
    stack.push(currentNum); // [TC] O(1): processed once

    // a new num and str
    currentStr = '';
    currentNum = '';
  } else if (char === ']') { // take it out
    let num = stack.pop(); // number of repetitions
    let prevStr = stack.pop(); // [TC] O(1): processed once
    
    // [TC] O(currentStr * num): worst. proportional to the string length
    currentStr = prevStr + currentStr.repeat(num);
  } else {
    // if normal string -> add to current string
    currentStr += char;
    }
  }

  return currentStr;
};


// Comment
// TC: O(n + m)
// n : 입력 문자열의 길이
// m : 디코딩 후 최종 문자열의 길이

// SC: O(n + m)
// 스택에 저장된 내용은 []로 묶인 문자열의 길이에 비례
// 결국 string을 n만큼 만들려면 -> max K
