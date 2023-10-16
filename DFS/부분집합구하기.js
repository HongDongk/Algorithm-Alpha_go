// dfs는 트리를 그릴줄 알아야 한다!!(중요)

function solution(n){
    let answer=[];
    let ch = new Array(n+1).fill(0);
    
    function DFS(L){
        if(L===n+1){
            let tmp="";
            for(let i=1; i<=n; i++){
                if(ch[i]===1) tmp+=(i+" ");
            }
            
            if(tmp.length>0) answer.push(tmp.trim()); // 공집합 제외!!
        }
        else{
            ch[L]=1;
            DFS(L+1);
            ch[L]=0;
            DFS(L+1);
        }
    }

    DFS(1);
    return answer;
}

console.log(solution(3));