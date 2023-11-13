// 노드의 개수가 많을 때!! - 메모리 낭비를 줄이기 위해 사용

function solution(n, arr){  
    let answer=0;
    let graph = new Array(n+1).fill(0).map((a) => []);
    let ch = new Array(n+1).fill(0);

    for(let [a, b] of arr){
        graph[a].push(b);
    }

    function DFS(v){
        if(v===n) answer++;
        else{
            for(let nv of graph[v]){
                if(ch[nv]===0){
                    ch[nv]=1;
                    DFS(nv);
                    ch[nv]=0;
                }
            }
        }
    }
    ch[1]=1;
    DFS(1);
    return answer;
}

let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));