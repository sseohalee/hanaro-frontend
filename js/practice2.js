const assert = require('assert');

// const memoizationTable={};
// function keyPair(arr, N){
//     let sum=0;
//     for(let i=0; i<arr.length;i+=1){
//         sum=N-arr[i];
//         if(arr.indexOf(sum)!=-1){
//             return [i,arr.indexOf(sum)];
//         }
//     }
//     return -1;
// }

const keyPair=(arr,n)=>{
    const pairIdx={}; //{6:0, 4:1} 6의 짝은 0번째(1), 4의 짝은 1번째(3)...
    for(let i=0;i<arr.length;i+=1){
        const val=arr[i];
        if(pairIdx[val]) return [pairIdx[val],i];
        pairIdx[n-val]=i;
    }
};



// keyPair([1, 3, 4, 5], 7);             // [1, 2]
// keyPair([1, 4, 45, 6, 10, 8], 16);    // [3, 4]
// keyPair([1, 2, 4, 3, 6], 10);         // [2, 4]
// keyPair([1, 2, 3, 4, 5, 7], 9);       // [3, 4]

console.log(keyPair([1, 2, 3, 4, 5, 7], 9));

// assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
// assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
// assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
// assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);
