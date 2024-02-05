const afterTIme = sec =>
    new Promise(resolve=>setTimeout(resolve, sec*1000,sec));

const rets1=[1,2,1].map(sec=>afterTIme(sec));
const rets2=[];
for await (const ret of rets1){
    rets2.push(ret);
}
console.log("🚀 ~ forawait ~ rets2:", rets2);

const rets3=await Promise.all(rets1);
console.log("🚀 ~ rets3:", rets3);

const rets4=(await Promise.allSettled(rets1)).map(({value})=>value);
console.log("🚀 ~ rets4:", rets4);


