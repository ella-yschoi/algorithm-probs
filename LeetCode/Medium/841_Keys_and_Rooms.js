// 841. Keys and Rooms
// https://leetcode.com/problems/keys-and-rooms/description/?envType=study-plan-v2&envId=leetcode-75

// My Solution
// Time Complexity: O(N + E), Space Complexity: O(N)
var canVisitAllRooms = function(rooms) {
  const visited = new Set(); // visited room
  
  function dfs(roomNum) {
    if (visited.has(roomNum)) return; // already visited
    visited.add(roomNum); // add visited room

    for (const key of rooms[roomNum]) {
      dfs(key); // move to current room's key
    }
  };

  dfs(0); // start from No.0 room
  return visited.size === rooms.length; // confirm that visited all rooms
};


// Comment
// [시간 복잡도]
  // rooms = [[1, 2], [3], [3], []] 라면,
  // 노드(n): 방은 총 4개이므로 n = 4
  // 간선(e): 방 0에는 열쇠 2개(1, 2), 방 1에는 열쇠 1개(3), 방 2와 방 3에는 열쇠가 없음
  // 따라서 간선의 총 개수 e = 2 + 1 + 0 + 0 = 3
  // 총 시간 복잡도: O(n + e) = O(4 + 3) = O(7)
