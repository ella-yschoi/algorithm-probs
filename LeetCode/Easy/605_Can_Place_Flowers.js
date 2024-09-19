// 605. Can Place Flowers
// 문제 링크: https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
// Time Complexity: O(N), Space Complexity: O(1)

// 배열을 순회했을 때 0의 index - 1과 index + 1이 모두 0이라면 -> possibleN++
// possibleN이 n보다 크면 -> false, 아니면 true

let possibleN = 0;
const canPlaceFlowers1 = function(flowerbed, n) {
  let possibleN = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    // 인덱스가 범위를 넘어가지 않는지 확인
    if (flowerbed[i] === 0 && 
      (i === 0 || flowerbed[i - 1] === 0) && 
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
      // 꽃을 심고 해당 위치를 1로 변경
      flowerbed[i] = 1;
      possibleN++;

      // 필요한 만큼 심었으면 즉시 종료
      if (possibleN >= n) {
        return true;
      }
    }
  }

  // 반복문이 끝난 후 여부 확인
  return possibleN >= n;
};


// 다른 풀이 1
// Time Complexity: O(N), Space Complexity: O(1)

// 꽃을 심을 수 있는 위치를 찾으면 그 자리에 꽃을 심고 n을 감소시킴
// n이 0 이하가 되면 필요한 모든 꽃을 심을 수 있으므로 즉시 true 반환

const canPlaceFlowers = function(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
      // 꽃을 심고, n을 감소
      flowerbed[i] = 1;
      n--;

      // 필요한 만큼 꽃을 심었다면 즉시 true 반환
      if (n <= 0) {
        return true;
      }
    }
  }
  // 모두 순회한 후에도 n이 0보다 크면 false 반환
  return n <= 0;
};


// TIL
// 특히 첫 번째 요소와 마지막 요소 검사 시 인덱스 범위를 넘어가지 않는지 확인해야 한다는 것을 알았다.
// 그리고 꽃을 심었다고 가정하는 경우 해당 위치를 1로 변경해주어야 연속으로 심지 않도록 보장된다.
// 처음엔 이를 처리하지 못했는데, 생각해보니 단순히 0인 요소를 찾는 것 뿐만 아니라 심는 행위를 하는거니까..?
