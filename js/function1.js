function hello(name){
    console.log(`Hello, ${name}`,arguments);
    return `Hello, ${name}`;
}

hello('Hong');
const hi=hello; // 같은 f.o를 보고 있다.
hi('Kim');
console.log('>>', hi.length, hi.name); //length는 arg값

function printFnReturnValue(fn, nm){
    console.log(fn.name, fn(nm));
}
printFnReturnValue(hi, 'Lee');