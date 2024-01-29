// const user={id:1, name:'P', age:30};
// const { name:n, age=30 } = { name:'Lee'};
// const {age2 = 30}={name:'Park', age2:20};
// const fn = ({age}) => age;
// const { age2:age3 =fn(user)} = {age22:20};
// console.log(age2)

//3번 문제
// const user = {id: 1, name:'Hong', passwd:'xxx', addr:'Seoul'};

// const userInfo={id:user.id, name:user.name, addr:user.addr};
// const {passwd, ...userInfo} = user;

// console.log(userInfo);

const arr = [[{id: 1}], [{id:2}, {id: 3}]]
// const id1 = arr[0][0].id;
const [[{id:id1}], [{id:id2}, {id:id3}]]= arr;
console.log(id1, id2, id3); 