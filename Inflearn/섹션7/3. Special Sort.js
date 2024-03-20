// 다른 풀이 1
function solution(arr){
  let answer=arr;
  for(let i=0; i<arr.length-1; i++){
    for(let j=0; j<arr.length-i-1; j++){
      if(arr[j]>0 && arr[j+1]<0){
        [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
      }
    }   
  }
  return answer;
}

let arr1=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr1));


// 다른 풀이 2
function solution(arr){
  let answer=[];
  for(let x of arr){
    if(x<0) answer.push(x);
  }
  for(let x of arr){
    if(x>0) answer.push(x);
  }
  return answer;
}

let arr2=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr2));
