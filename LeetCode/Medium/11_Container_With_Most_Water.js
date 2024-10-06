// 11. Container With Most Water
// 문제 링크: https://leetcode.com/problems/container-with-most-water/?envType=study-plan-v2&envId=leetcode-75

// 가장 많은 물을 담을 수 있는 두 개의 세로 선을 찾기
// 두 선은 항상 수직으로 유지되어야 함
// 두 개의 선 + x축 -> 하나의 container
// 각각의 선: 배열의 인덱스와 높이로 표현됨
// width: newArr의 length

// [1,8,6,2,5,4,8,3,7]
// -> index 1(8)과 7(7) 선택

// 즉, left pointer와 right pointer로 물 양 계산
// 더 작은 높이를 가진 포인터를 안쪽으로 이동 -> 모든 경우의 수를 탐색

// 나의 풀이
// Time Complexity: O(N), Space Complexity: O(1)

const maxArea = function(height) {
  // 1. 포인터 초기화
  let left = 0;
  let right = height.length - 1; // 마지막 인덱스
  let maxContainer = 0;

  // 2. 두 포인터가 만날 때까지 반복
  while (left < right) {
    // 3. 현재 컨테이너의 너비와 높이 계산
    let width = right - left;
    let currentHeight = Math.min(height[left], height[right]);
    
    // 4. 현재 컨테이너 면적 계산
    let currnetContainer = width * currentHeight;

    // 5. 컨테이너의 최대 면적 갱신
    maxContainer = Math.max(maxContainer, currnetContainer);

    // 6. 낮은 쪽의 포인터를 이동시킴
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxContainer;
};


// TIL
// *TC
// 투포인터 방식은 height 배열을 한 번만 순회
// 두 개의 포인터(left, right)를 사용하여 각 포인터가 서로를 향해 이동하므로,
// while 루프 내에서 모든 요소를 한 번만 확인하면 됨. 반복문 내부에서 수행되는 연산들은 상수 시간(O(1))이기 때문

// *SC
// 이 알고리즘은 추가적인 배열이나 데이터 구조를 사용하지 않음.
// maxArea, left, right 등 몇 개의 변수만을 사용하기 때문에, 상수 공간만 필요하기에 O(1)
