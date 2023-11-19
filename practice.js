let answer = '';

function DFS(n, k){
    if(n > k){
        console.log(answer);
    }else{
        answer += n + ' ';
        DFS(n+1, k);
    }
}

DFS(1, 3);
