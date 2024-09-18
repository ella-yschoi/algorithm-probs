// 1431. Kids With the Greatest Number of Candies
// 문제 링크: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
// ⏳ Time Complexity: O(N), Space Complexity: O(N)
const kidsWithCandies1 = function(candies, extraCandies) {
  // candies 배열에서 가장 큰 값을 찾음
  const maxCandies = Math.max(...candies);
  let result = [];

  // 각 아이에게 extraCandies를 더했을 때의 결과를 계산하고 비교
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandies) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};


// 다른 풀이 1: 간단하게 map 사용
// ⏳ Time Complexity: O(N), Space Complexity: O(N)
const kidsWithCandies2 = function(candies, extraCandies) {
  // candies 배열에서 가장 큰 값을 찾음
  const maxCandies = Math.max(...candies);

  // 각 아이에게 extraCandies를 더했을 때의 결과를 바로 계산하고 비교
  return candies.map(candy => candy + extraCandies >= maxCandies);
};


// TIL
// 처음에 return을 그냥 boolean 값으로 했다가 에러가 났는데,
// 이 문제의 마지막 포인트는 각 boolean 값을 push한 배열을 return하는 것이다.
// 즉, 최종 결과를 반환할 result 배열을 생성하고,
// 각 아이가 가장 많은 사탕을 가지는지에 대한 boolean 값을 추가한다.
