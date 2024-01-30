// function makeObjectFromArray(arr){
//     const rets=[];
//     for(let k=0;k<arr.length;k+=1){
//         rets.push([arr[k][0],[...arr[k]]]);
//     }
//     return rets;
// }

// function makeObjectFromArray(arr){
//     const rets=[];
//     for(let k=0;k<arr.length;k+=1){
//         const [first, ...rest]=arr[k];
//         rets.push([first, rest]);
//     }
//     return Object.fromEntries(rets);
// }

// console.log(Object.values(arr));

const arr = [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]];
const arr2 = { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] };

console.log('Object -> Array');
function makeObjectFromArray(arr){
    const rets=[];
    for(const k of arr){
        const [first, ...rest]=k;
        rets.push([first, rest]);
    }
    return Object.fromEntries(rets);
}

console.log(makeObjectFromArray(arr));

console.log('-----------------------------------------');
console.log('Array -> Object');

function makeArrayFromObject(arr){
    const rets=[];
    for(const k in arr2){
        rets.push([k, ...arr2[k]]);
    }
    return rets;
}

console.log(makeArrayFromObject(arr2));