// 다른 풀이 1
function solution(m, arr){         
  let answer=[];
  n=arr.length;

  let ch=Array.from({length:n}, ()=>0);
  let tmp=Array.from({length:m}, ()=>0);

  function DFS(L){
    if(L===m){
      answer.push(tmp.slice()); 
    }
    else{
      for(let i=0; i<n; i++){
        if(ch[i]===0){
          ch[i]=1;
          tmp[L]=arr[i];
          DFS(L+1);
          ch[i]=0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

let arr1=[3, 6, 9];
console.log(solution(2, arr1));


// 다른 풀이 2
function solution(m, arr){         
  let answer=[];
  n=arr.length;
  let ch=Array.from({length:n}, ()=>0);
  let tmp=[];
  
  function DFS(L){
    if(L===m){
      answer.push(tmp.slice()); 
    }
    else{
      for(let i=0; i<n; i++){
        if(ch[i]===0){
          ch[i]=1;
          tmp.push(arr[i]);
          DFS(L+1);
          ch[i]=0;
          tmp.pop();
        }
      }
    }
  }
  DFS(0);
  return answer;
}

let arr2=[3, 6, 9];
console.log(solution(2, arr2));
