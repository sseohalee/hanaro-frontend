// function addUser(obj){
//     const arr2 = [...users];
//     arr2.push(obj);
//     return console.log(arr2);
// }

const addUser=user => [...users, user];
const removeUser = user => users.filter(_user=>user.id != _user.id);

// function removeUser(obj){
//     const arr2 = [...users];
//     arr2.findIndex();
//     return console.log(arr2);
// }

const hong = { id: 1, name: 'Hong' };
const choi = { id: 5, name: 'Choi' };
const kim = { id: 2, name: 'kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };

const users = [kim, lee, park];

console.log(addUser(hong));
console.log(removeUser(lee));
// changeUser(kim, choi);

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

const arr2 = [1, 2, 3, true];
const ret1=arr2.map(item => item.toString());
console.log("🚀 ~ ret1:", ret1);

// ex2-2)
const classNames=(...args) => args.reduce((acc,item)=>`${acc} ${item}`,'');
const ret2=classNames('', 'a b c', 'd', '', 'e');

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

// ex3) 수행 순서 변경
const arr = [1, 2, 3, 4, 5];
arr.map(a => a ** 2).map(a => Math.sqrt(a)).map(a => a ** 3);
// .map(Math.sqrt) 는 (a) => fn(a) => fn, 같은 것 생략 가능