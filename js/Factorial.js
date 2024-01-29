// O(N)
function factorial(n){
    if (n===1) return 1;
    return n*factorial(n-1);
}

// O(logN)
const memoizedTable={}; // 결과 담아놓고 한 번 연산한 것은 넘어가기
let runCnt=0;
function factorial(n){
    if (n===1) return 1;
    return memoizedTable[n]||(memoizedTable[n]=n*factorial(n-1));
}
// {}
// {3: 3* f(2)}
// {3: 3*f(2), 2:2*f(1)}
// {3: 3*2, 2:2*1}

// {5: 5*f(4), 4: 4*f(3)}
// {5: 5*24, 4: 4*6}

//{15: 15*f(14), ..., 6: 6*f(5)}


function memoized(fn){
    const memoizedTable={}; // 결과 담을 캐시 객체
    return function(k){
        if(memoizedTable[k])
            return memoizedTable[k];
        return (memoizedTable[k]=fn(k));
        return memoizedTable[k] || (memoizedTable[k]=fn(k));
    }
}

function memoizedFactorial(n){
    return memoized(function(n) {
        if(n===1) return 1;
        return n+memoizedFactorial(n-1);
    });
}


// const f3= memoizedFactoria(3);
// console.log("🚀 ~ mf3:", f3)

// const f5= memoizedFactoria(5);
// console.log("🚀 ~ mf5:", f5);


const mf3=memoizedFactorial(3);
console.log("🚀 ~ mf3:", mf3)

const mf5= memoizedFactorial(5);
console.log("🚀 ~ mf5:", mf5)