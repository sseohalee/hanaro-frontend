const f1_org= function(f, val){
    return f(val);
}

const f1 = (f, val) => f(val);

f1(console.log, 'abc');

function fx1(a){
    return a**2;
}

console.log(f1(fx1, 2));

const f2_org = function (f){
    return function(...args){
        return f(...args);
    };
};

const f2 = f =>
    (...args) =>
        f(...args);

const X=f2(Math.max);
const result = X(1, 3, 4, 5, 2);

console.log("🚀 ~ result:", result)

// map( function(item, idx){} )
// function parseInt(str) => number
const arr = ['1', '2', '3'];
const rets_s = arr.map(parseInt); //map 인수 개수만큼 실행

// map함수 설명
Array.prototype.mapX=function(f){
    const result = [];
    for (let i=0; i<this.length;i+=1){
        result.push(f(this[i],i,this));
    }
    return result;
}
// map(parseInt, arr)과 같음
const rets=arr.mapX(parseInt);

//arr.map(function(item, idx, this))
//parseInt('1', 0, ['1', '2', '3'])
//parseInt('2', 1, ['1', '2', '3'])
//parseInt('3', 2, ['1', '2', '3'])

console.log(rets);