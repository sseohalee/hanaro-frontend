// 137p range sum
import assert from 'assert'; // ESM 
// const assert = require('assert');
const arr = [1, 3, 4, 2, 5, 8, 6, 7, 9];

function rangeSum(startIdx=0, endIdx=-1){
    let sum=0;
    for(let i=startIdx; i<=endIdx;i+=1) sum+=arr[i];
    return sum;
}

// assert.deepstrictEqual(rangeSum(2, 5), 19);
// assert.deepstrictEqual(rangeSum(3, 5), 15);
// assert.deepstrictEqual(rangeSum(1, 4), 14);
// assert.deepstrictEqual(rangeSum(0, 4), 15);
// assert.deepstrictEqual(rangeSum(5, 8), 30);
// assert.deepstrictEqual(rangeSum(6, 8), 22);
// assert.deepstrictEqual(rangeSum(2, 8), 41);
// assert.deepstrictEqual(rangeSum(4, 4), 5);
// assert.deepstrictEqual(rangeSum(5), 30);
// assert.deepstrictEqual(rangeSum(2), 41);
// assert.deepstrictEqual(rangeSum(), 45);