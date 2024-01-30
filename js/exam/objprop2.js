// 연습문제 1-1

const arr = [100, 200, 300, 400, 500, 600, 700];

for(let k in arr){
    console.log(k);
}

for(let k in arr){
    console.log(arr[k]);
}

// 연습문제 1-2
const obj = { name: 'lim', addr: 'Yongsan', level: 1, role: 9, receive: false };

for(let k in obj){
    console.log(k);
}

for(let k in obj){
    console.log(obj[k]);
}

for (const k of Object.values(obj)){
    console.log(k);
}

// delete obj.level;
Object.defineProperty(obj, 'level',{enumerable: flase});
console.log(Object.entries(obj));
