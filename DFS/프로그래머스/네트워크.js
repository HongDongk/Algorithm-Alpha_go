function solution(n, computers) {
    let visited = new Array(n).fill(false);
    let answer = 0;
  
    function dfs(i) {
      if(visited[i] === true) return;
      else{
          visited[i] = true;
          for (let j = 0; j < computers[i].length; j++) {
              if (computers[i][j] === 1) {
                  dfs(j);
              }
          }
      }
    }
  
    for (let i = 0; i < n; i++) {
      if (visited[i] === false) {
        dfs(i);
        answer += 1;
      }
    }
  
    return answer;
}
