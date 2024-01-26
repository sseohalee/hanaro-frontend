// primitive(call-by-value) vs object(call-by-reference)
// call-by-value는 스택에 값이, reference는 주소값이 들어있음

const userName='Hong'; //string (primitive)
let age;
// 선언 및 정의 (undefined) 
// undefined도 null 처럼 정의가 되었다는 것
// undefined js 식별자, 메모리가 할당되었다 의미
// stack에 저장

console.log("🚀 ~ age:", age); //ctrl+alt
age=33;

console.log('Hello,', userName, '!');
console.log(`Hello, ${userName}!`); 