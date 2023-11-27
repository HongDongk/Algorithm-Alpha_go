function solution(n, arr){  
    let answer=0;
    let info = new Array(n+1).fill(0).map(() => new Array(n+1).fill(0));
    let check = new Array(n+1).fill(0);
    check[1] = 1;

    for(let i of arr){
        info[i[0]][[i[1]]] = 1;
    }

    function DFS(L){
        if(L === n){
            answer++;
        }
        else{
            for(let i = 1; i<=n; i++){
                if(info[L][i] === 1 && check[i] === 0){
                    check[i]=1;
                    DFS(i);
                    check[i]=0;
                }
            }
        }
    }


    DFS(1);

    return answer;
}

let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));