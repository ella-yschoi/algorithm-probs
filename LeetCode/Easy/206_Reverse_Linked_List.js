// 206. Reverse Linked List
// 문제 링크: https://leetcode.com/problems/reverse-linked-list/description/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
const reverseList = function(head) {
  let prev = null; // prev node - 처음에는 null
  let current = head; // current node - 처음에는 head

  while (current !== null) {
    let next = current.next; // next node를 임시 저장

    current.next = prev; // current node의 link를 이전 node로 변경
    prev = current; // prev node를 current node로 이동
    current = next; // current node를 next node로 이동
  }
  
  return prev; // 이제 prev는 reversed list의 new head가 됨
};


// Comment
// 참고 블로그: https://underdog11.tistory.com/entry/JavaScript-22-Generate-Parentheses-1
// TC: while 반복문에서 current가 null이 될 때까지, 즉 연결 리스트의 모든 노드를 한 번씩 방문할 때까지 반복하므로 TC는 O(n)
// SC: 모든 변수는 상수 공간만 차지하고 별도의 추가 공간이 없이 연결리스트를 뒤집기 때문에 O(1)
