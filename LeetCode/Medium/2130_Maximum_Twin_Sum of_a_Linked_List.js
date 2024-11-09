// 2130. Maximum Twin Sum of a Linked List
// 문제 링크: https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/description/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
// Time Complexity: O(N), Space Complexity: O(N)
const pairSum = function(head) {
  let current = head; // 원본을 변경하지 않는 순회용 변수
  let arr = [];

  // 모든 노드에 순차적으로 접근
  while (current !== null) { // 연결 리스트의 모든 노드 순회
    arr.push(current.val);
    current = current.next;
  } // 각 노드가 next로 연결되어 있기에 이 같은 순회 과정 필수

  let maxSum = 0;
  let n = arr.length;

  // 애초에 반 쪼개서 순회
  for (let i = 0; i < n / 2; i++) { // 최대 O(n)
    let twinSum = arr[i] + arr[n - 1 - i];
    maxSum = Math.max(maxSum, twinSum);
  }

  return maxSum;
};


// Comment
// head를 굳이 current로 할당해주는 이유는 원본 head를 변경하지 않고 순회하기 위함
// head는 연결 리스트의 첫 번째 노드를 가리키는 포인터인데,
// 순회를 위해 head를 직접 변경하면 원본 리스트에 접근할 수 없게 됨
