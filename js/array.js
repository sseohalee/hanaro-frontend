const arr=[1,2,3];

arr.length=5;
console.log("🚀 ~ arr:", arr);

const ax = [1, 2, 3];
//ax.shift(1);
// 출력: [2, 3]
ax.unshift(4);
console.log("🚀 ~ ax:", ax);

function myConcat(...args){
    const argsArr=Array.isArray(args[0])? args[0] : args;
        return [...a22, ...argsArr];
}