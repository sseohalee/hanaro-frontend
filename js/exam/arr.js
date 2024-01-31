const arr2 = [1, 2, 3, 4, 5];

// ex1) [2,3]
console.log(arr2.slice(1,3));

// ex2) [3]부터 추출
console.log(arr2.slice(2,));

// ex3) [2,3,4] 제거
arr2.splice(1,3);
console.log(arr2);

// ex5) 복원
arr2.splice(1,0,2,3,4);
console.log(arr2);

// ex6) 3부터 끝까지 제거
arr2.splice(2);
console.log(arr2);

// ex7) 복원
arr2.splice(2,0,3, 4, 5);
console.log(arr2);

//  ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
// arr2.splice(2, 1, 'X', 'Y', 'Z');
// console.log(arr2);

// ex8) splice 사용 x
const arr3= Array(...arr2.slice(0,2),'X','Y','Z',...arr2.slice(3,5));
console.log(arr3);

console.log(arr2);

const objs = [ {id: 1}, {name: 'Hong'}, {addr: 'Seoul', id: 5}];

const obj=objs.reduce(
    (acc, item) => ({...acc, ...item}), {}
    //객체로 인식 ()
    //뒤에 거가 최종이라 id:5가 됨
);

console.log(obj);
