// answer+=(v+' '); 삽입 위치에 따라 전위순회, 중위순회, 후위순회로 나뉘어짐

function solution(n){
    let answer="";
    function DFS(v){
        if(v>7) return;
        else{
            answer+=(v+' ');  // 여기 들어가면 전위순회
            DFS(v*2);  // 여기 들어가면 중위순회
            DFS(v*2+1);  // 여기 들어가면 후위순회
        }
    }
    DFS(n);
    return answer;
}

console.log(solution(1));