// 2390. Removing Stars From a String
// 문제 링크: https://leetcode.com/problems/removing-stars-from-a-string/description/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
// 별 제거 시 가장 가까운 왼쪽 문자도 함께 제거

const removeStars = function(s) {
  let stack = [];

  // 문자열을 순차적으로 순회
  for (let char of s) {
    if (char === '*') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  // 스택에 남아있는 문자들을 하나씩 문자열로 합치기
  return stack.join('');
};


// Comment
// Medium보다는 Easy에 가까웠던 문제 같다. (워낙 Stack이 쉬운 편에 속하는 주제라서 그런 것 같기도..)
// 처음엔 stack에서 빼기만 하면 된다고 생각해 else문을 굳이 안 넣었는데, 이렇게 되면 문자열이 하나도 남지 않게 되었다.
// 어쨌든 char에 다시 넣어 주어야 함
// 시간 복잡도의 경우, 문자열을 한 번만 순회해서 각 문자를 처리하기 때문에 O(N)이다.
// 공간 복잡도의 경우, 모든 문자가 *이 아니라면 스택에 저장되므로 스택 최대 크기는 어차피 n이다.
