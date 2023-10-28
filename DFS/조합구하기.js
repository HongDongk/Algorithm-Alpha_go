function solution(n, m){         
    let answer=[];
    let temp= new Array(m).fill(0);

    function DFS(L, s){
        if(L===m){
            answer.push(temp.slice()); 
        }
        else{
            for(let i=s; i<=n; i++){
                temp[L]=i;
                DFS(L+1, i+1);
            }
        }
    }
    
    DFS(0, 1);
    return answer;
}

console.log(solution(4, 2));