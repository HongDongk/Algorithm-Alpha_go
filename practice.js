var x = 100; // 전역변수

{
  var x = 1; // 전역변수
}

function ex() {
  var x = 5; // 지역변수
  console.log(x); // 5
}

console.log(x);
