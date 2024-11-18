// 450. Delete Node in a BST
// https://leetcode.com/problems/delete-node-in-a-bst/?envType=study-plan-v2&envId=leetcode-75

// My Solution
// if the key is in the root
// delete that key and return the BST

// Time Complexity: O(N), Space Complexity: O(N)
var deleteNode = function(root, key) {
  if (!root) return null;
  
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.left && !root.right) {
      return null;
    } else if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    }

    let minNode = findMin(root.right);
    root.val = minNode.val;
    // delete the substituted node
    root.right = deleteNode(root.right, minNode.val)
  }

  return root;
};

// To find the min value in right subtree
function findMin(node) {
  while (node.left !== null) {
    node = node.left;
  }
  return node;
}


// Comment
// [예상 질문]
// BST에서 항상 효율적인 탐색이 보장되는지?
  // 트리가 한쪽으로 치우친 경우는 효율성이 떨어질 수 있어 Red-Black 트리와 같이 자체 균형을 유지하는 트리 사용 가능 -> O(log n)
  // 다만 JS에서는 제공해주지 않으므로 직접 구현하거나 라이브러리 사용 필요
// BST에서 노드 삭제 시 각 경우?
  // 자식이 없는 경우: 단순히 노드를 Null로 설정해 부모와의 연결 끊기
  // 자식이 하나인 경우: 삭제할 노드를 자식으로 대체
  // 자식이 두개인 경우: 삭제할 노드를 대체할 노드 필요. 오른쪽 서브 트리에서 가장 작은 노드나 왼쪽 서브 트리에서 가장 큰 노드 선택 -> 현재 노드와 교환 -> 대체한 노드 삭제
// [시간 복잡도]
  // findMin 함수의 경우, 가장 작은 노드를 찾기 위해 왼쪽 자식 방향으로만 이동하므로 O(n)
// [공간 복잡도]
  // findMin 함수의 경우, 별도의 스택을 사용하지 않음

