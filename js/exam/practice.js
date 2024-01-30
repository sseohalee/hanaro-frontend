// var v;
// let l=2;
// let o={id:1};
// o='Sico';
// const a=[1,l];
// l=5;
// console.log(v,l,o,a);

// for(let i=0.1;i<1;i = +(i+0.1).toFixed(1)) console.log(i);

function addPoints(a,b){
    let result = a+b ;
    let resultString=result.toString();
    let Pos = resultString.indexOf('00000');
    let dotPos=resultString.indexOf('.');
    
    result= Number(result).toFixed(Pos-dotPos-1);

    return console.log(result);
}


// addPoints(0.21354,0.1);
// addPoints(0.14, 0.28);
// addPoints(0.34, 0.226);
addPoints(0.34, 0.2006);

console.log(0.34+0.2006)