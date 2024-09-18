// 1071. Greatest Common Divisor of Strings
// 문제 링크: https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
const gcdOfStrings1 = function(str1, str2) {
  // 두 문자열을 붙였을 때 같은지 확인
  if ((str1 + str2) !== (str2 + str1)) {
    return "";
  }
  
  // 최대 공약수 계산 함수
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

  // 최대 공약수 길이를 구하고 해당 부분 문자열을 반환
  const gcdLength = gcd(str1.length, str2.length);
  
  return str1.slice(0, gcdLength);
};


// 다른 풀이 1
const gcdOfStrings2 = function(str1, str2) {
  // 최대 공약수 계산 함수
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

  // str1과 str2의 길이의 최대 공약수를 구함
  const gcdLength = gcd(str1.length, str2.length);

  // 최대 공약수 길이만큼의 부분 문자열을 가져옴
  const candidate = str1.slice(0, gcdLength);

  // str1과 str2가 모두 해당 부분 문자열로 구성되어 있는지 확인
  if (str1.split(candidate).join('') === '' && str2.split(candidate).join('') === '') {
    return candidate;
  } else {
    return '';
  }
};


// TIL
// 최대 공약수를 구할 때는 유클리드 알고리즘을 활용한다.
// 두 문자열의 길이에 대한 최대 공약수를 찾고, 그 길이를 이용해 부분 문자열을 구한다.
// 즉, num1를 num2로 나눈 나머지를 r이라고 했을 때, GCD(num1, num2) = GCD(num2, r)과 같다는 것이다.
// r이 0이라면, 그 때의 num2가 최대공약수이다.
// num1=24, num2=16을 가정하면, GCD(24, 16) = GCD(16, 8) = GCD(8, 0) -> GCD = 8