function solution(n, arr){  
    let answer=0;
    let graph = new Array(n+1).fill(0).map((a) => new Array(n+1).fill(0));
    let ch = new Array(n+1).fill(0);
    path=[];

    for(let [a, b] of arr){
        graph[a][b]=1;   // 방향 그래프
        // graph[b][a]=1;   무방향 그래프일때!!
    }

    function DFS(v){
        if(v===n){
            answer++;
            console.log(path);
        }
        else{
            for(let i=1; i<=n; i++){
                if(graph[v][i]===1 && ch[i]===0){
                    ch[i]=1;
                    path.push(i);
                    DFS(i);
                    ch[i]=0;
                    path.pop();
                }
            }
        }
    }

    path.push(1);
    ch[1]=1;  // 1번 정점은 무조건 체그되어있어야함!
    DFS(1);
    return answer;
}

let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));