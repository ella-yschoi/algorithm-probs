// 735. Asteroid Collision
// 문제 링크: https://leetcode.com/problems/asteroid-collision/description/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
// Time Complexity: O(N), Space Complexity: O(N)
const asteroidCollision = function(asteroids) {
  let stack = [];  // 충돌 후 남은 소행성들을 저장할 스택

  for (let i = 0; i < asteroids.length; i++) {
    let current = asteroids[i];

    // 스택의 마지막 소행성이 양수, 현재 소행성이 음수일 때까지 반복
    while (stack.length > 0 && stack[stack.length - 1] > 0 && current < 0) {
      let top = stack[stack.length - 1];

      // 소행성 크기가 같으면 둘 다 폭발
      if (Math.abs(top) === Math.abs(current)) {
        stack.pop();  // 스택에서 마지막 소행성 제거
        current = 0;  // 현재 소행성도 폭발
        break; // 굳이? 폭발하니까
    } else if (Math.abs(top) > Math.abs(current)) {
        // 스택의 소행성이 더 크면, 현재 소행성은 폭발
        current = 0;
        break;
    } else {
        // 스택의 소행성이 더 작으면 스택 소행성은 폭발, 현재 소행성은 진행
        stack.pop();
      }
    }

      // 현재 소행성이 남아 있다면 스택에 추가
      if (current !== 0) {
        stack.push(current);
      }
  }

  return stack;
};


// Comment
// 시간 복잡도의 경우, 각 소행성은 스택에서 한 번 추가되고, 한 번 제거될 수 있으므로 O(N)
// 공간 복잡도의 경우, 스택에 저장된 소행성들이 있을 수 있으므로 공간 복잡도는 최대 소행성 개수에 비례한다. 따라서 O(N)
// for, while 중첩 -> O(N)이라 생각하는 경우가 많은데 이를 clear하게 설명하는 방법?
// 이 경우, 소행성이 다시 부활해서 왔다갔다 하는게 아니라, 폭발하면 next로 가기 때문
// 최악의 경우는 소행성을 n~~~~ -> maximum (앞 -> 뒤, 뒤 -> 앞)
