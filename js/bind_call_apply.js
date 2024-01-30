// function f(id){
//     console.log(this, id, this.name);
// }

// const obj={name:'Hong'};
// const bf=f.apply.bind(obj);

// f(1);


const f1 = (f, val) => f(val);
f1(console.log, 'f1');

const f2 = (f) => (...args) => 
    console.log(f.name, f(...args));

f2(Math.max)(1, 3, 2, 5, 4);


const ff = f1;
const fns = [f1, f2];

const f3 = function(f){
    return function(...args) {
            console.log(f.name, f(...args));
        }
}
f3(Math.max)(1, 3, 2, 5, 4);

