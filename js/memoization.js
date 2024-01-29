// function fibonacci(n){
//     if(n===0) return 0;
//     if(n===1) return 1;
//     return fibonacci(n-2)+fibonacci(n-1);
// }

function memoized(fn){
    const memoizedTable={};
    return function B(k){
        return memoizedTable[k] || (memoizedTable[k]=fn(k));
    };
}

const memoizedFibonacci = memoized(function A(n){
    memoizedFibonacciRunCnt +=1;
    console.log(`pre=${n}`);
    if(n===0) return 0;
    if(n===1) return 1;
    return memoizedFibonacci(n-2)+memoizedFibonacci(n-1); 
})

let memoizedFibonacciRunCnt=0;
console.log(memoizedFibonacci(5));
console.log(memoizedFibonacci(7));