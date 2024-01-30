// 연습문제 1-1

// const arr = [100, 200, 300, 400, 500, 600, 700];

// for(let k in arr){
//     console.log(k);
// }

// for(let k in arr){
//     console.log(arr[k]);
// }

//연습문제 1-2
// const obj = { name: 'lim', addr: 'Yongsan', level: 1, role: 9, receive: false };

// for(let k in obj){
//     console.log(k);
// }

// for(let k in obj){
//     console.log(obj[k]);
// }

// for (const k of Object.values(obj)){
//     console.log(k);
// }

// delete obj.level;
// Object.freeze(obj); 


// 연습문제 2-1
const arr2= [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]


for(let arr of arr2){
    console.log(arr);
    [k, ...arr]
}

const obj2=Object.fromEntries(arr2);
console.log(obj2);

const u1 = Object.assign({}, arr2);
console.log(u1);