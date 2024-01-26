// console.log(i); // error
let i = 1;
console.log('x=', x);
var x = 1;
console.log(ff, f);
f(); // error
function f(){
    console.log('****');
} //이거 정의하면 6라인 함수 오류 안남.

{
  f();
  var x = 2;
  // 블록 속 진입했을 때 함수로 인정받음
  function f() {
    console.log('f>', x, xx);
  }
  const b = 1;
}

function ff() {
  // console.log('ff>', y, yy);
}

if (x >= 2) {
  var y = 5;
  let yy = 55; // 블록 뚫고 선언 부분 못 올라옴
}

var xx = 100;
ff();
