function solution(n){
    let answer="";
    function DFS(n){
         if(n===0) return; // 초보는 if문에서 dfs 종료조건 설정하는게 조음
         else{
             DFS(parseInt(n/2));
             answer+=String(n%2);
         }
    }
    DFS(n);
    return answer;
}

console.log(solution(11));