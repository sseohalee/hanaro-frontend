console.log('Hello, TypeScript!');

//UserType
type TUser ={
    id:number;
    name: string;
};
type UserType ={
    id:number;
    name: string;
} & {city?: string}; //인터페이스 대신 대안으로 많이 쓰이는 방식

//UserIF
interface IUser{
    id:number;
    name: string;
    city?:string;
    //getName():string;
};

class User2 implements IUser{
    public id:number;
    name: string;
    city?: string;
    constructor(id:number, name:string){
        this.id=id;
        this.name=name;
    }
}

class User{
    public id:number;
    name: string;
    city?: string;
    constructor(id:number, name:string){
        this.id=id;
        this.name=name;
    }
}


const hong: User={id:1, name:'Hong'};
const kim: User={id:2, name:'Kim'};

const kim2:{
    id:number;
    name: string;
    city: string;
}={id:2, name:'Kim',city:'Seoul'}; //원래 형태

const s:string = 'abc';
let i =1;

function add(a:number, b:number){
    return a+b;
}


// console.bulb('No pain, No Gain!');

const bt:'A'|'B'|'AB'|'O'='A';

function f(p: number|string){
    if(typeof p==='number')
        return p.toFixed();
    return p.toUpperCase();
}

// function mg(user:Member|Guest){
//     if('discountRate' in user)
//         console.log(user.addr);
//     else console.log(user.age);
// }

// function mg(user:Member|Guest){
//     if('discountRate' in user)
//         console.log(user.addr);
//     else console.log(user.age);
// }

class Dog{
    bark(){}
}

class Cat{
    gguk(){}
}

const lucy=new Dog();
if(lucy instanceof Dog) lucy.bark();

let arr: number[]|number=Math.random()>0.5?[0]:0;
if (Array.isArray(arr)) console.log(arr[0]);

