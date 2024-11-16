// 700. Search in a Binary Search Tree
// 문제 링크: https://leetcode.com/problems/search-in-a-binary-search-tree/description/?envType=study-plan-v2&envId=leetcode-75

// My Solution: recursion
// Time Complexity: O(Log(N)), Space Complexity: O(N)
var searchBST = function(root, val) {
  // if there is val in the root 
  // return the subtree rooted with that node
  // or not -> return null

  if (root === null || root.val === val) {
    return root; // case1: find val or null
  }

  // recursion
  if (val < root.val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
};


// Another Solution: while loop
// Time Complexity: O(1), Space Complexity: O(N)
function searchBST(root, val) {
  while (root !== null) {
    if (root.val === val) {
      return root;
    } else if (val < root.val) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return null;
}


// Comment
// [예상 질문]
// 이진 탐색 트리에서 탐색의 시간 복잡도와 최악의 경우?: BST에서 평균 시간 복잡도는 O(log n)이나, 이는 균형을 이룰 때다.
// 노드 수 n에 대해 절반씩 탐색 범위를 줄여가기 때문이다. 다만, 트리가 편향된 경우에는 O(n)이 된다.
// 재귀를 반복문으로 바꾸는 경우의 장점?: 재귀 호출은 편리하지만, 호출 스택을 추가로 사용하기 때문에 트리가 매우 클 경우 Stack overflow의 위험이 있다.
// 다만, 반복문은 스택을 사용하지 않으므로 이러한 위험이 없다.
