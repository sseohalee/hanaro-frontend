const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);

console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined

// 한 번 실행됐는지 플래그 true
// didRun=false, 첫 실행하고 나서 true로
// return ; -> undefined
// is, did, has -> boolean 변수명
// closure를 사용한 고차함수로 풀기 