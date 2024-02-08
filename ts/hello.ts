// console.log('Hello, TypeScript!');

// //UserType
// type TUser ={
//     id:number;
//     name: string;
// };
// type UserType ={
//     id:number;
//     name: string;
// } & {city?: string}; //인터페이스 대신 대안으로 많이 쓰이는 방식

// //UserIF
// interface IUser{
//     id:number;
//     name: string;
//     city?:string;
//     //getName():string;
// };

// class User2 implements IUser{
//     public id:number;
//     name: string;
//     city?: string;
//     constructor(id:number, name:string){
//         this.id=id;
//         this.name=name;
//     }
// }

// class User{
//     public id:number;
//     name: string;
//     city?: string;
//     constructor(id:number, name:string){
//         this.id=id;
//         this.name=name;
//     }
// }


// const hong: User={id:1, name:'Hong'};
// const kim: User={id:2, name:'Kim'};

// const kim2:{
//     id:number;
//     name: string;
//     city: string;
// }={id:2, name:'Kim',city:'Seoul'}; //원래 형태

// const s:string = 'abc';
// let i =1;

// function add(a:number, b:number){
//     return a+b;
// }


// // console.bulb('No pain, No Gain!');

// const bt:'A'|'B'|'AB'|'O'='A';

// function f(p: number|string){
//     if(typeof p==='number')
//         return p.toFixed();
//     return p.toUpperCase();
// }

// // function mg(user:Member|Guest){
// //     if('discountRate' in user)
// //         console.log(user.addr);
// //     else console.log(user.age);
// // }

// // function mg(user:Member|Guest){
// //     if('discountRate' in user)
// //         console.log(user.addr);
// //     else console.log(user.age);
// // }

// class Dog{
//     bark(){}
// }

// class Cat{
//     gguk(){}
// }

// const lucy=new Dog();
// if(lucy instanceof Dog) lucy.bark();

// let arr: number[]|number=Math.random()>0.5?[0]:0;
// if (Array.isArray(arr)) console.log(arr[0]);


// type TUser22 = {
//     id:number;
//     name:string;
// }

// const kim22={id:2, name:'Kim', addr:'Pusan'};

// const users: TUser22[]=[kim22, {id:3, name:'aa', addr:'1212'}];

// type A1=[string, number, string];
// // type B1=[boolean, A1]; //[boolean, [string, number, string]]
// type B1=[boolean, ...A1]; // 안에 튜플이면 풀어줘야함.

// const a1:A1=['str',1, 'B'];
// const b1:B1=[true, ...a1];

//SIZE에 있는 값만
// type SizeId='XS'|'S'|'M'|'L'|'XL';
// type SizeType={id:SizeId, price:number}[];
// type sizeOptionType={[i in SizeId]:number};

// const SIZE:SizeType = [
//     {id: 'XS', price: 8000},
//     {id: 'S', price: 10000},
//     {id: 'M', price: 12000},
//     {id: 'L', price: 14000},
//     {id: 'XL', price: 15000},
//   ];


// const sizeOption:sizeOptionType={XS: 1, S: 5, M: 2, L: 2, XL: 4};

// const totalPrice = SIZE.reduce((currPrice, size) =>
//   currPrice + (sizeOption[size.id] * size.price), 0
// );
// console.log("🚀 ~ totalPrice:", totalPrice);

// interface  Page {
//     readonly text: string;
// }

// function read(page: Page) {
//     console.log(page.text);

//     page.text = 'Hello';
// }

// const pageIsh = {
//     text: 'Hello, world!',
// };
// pageIsh.text = 'Hello'; //OK

// read(pageIsh)

// interface Ud2 extends Partial<User>, Partial<Dept>{
//     id:number,
//     name?:string,
//     dname?:string,
//     captain?:string,
//     addr: string;
//   }

interface User {
    id: number;
    name: string;
  };
  
  interface Dept {
    id: number;
    dname: string;
    captain: string;
  };
  interface Ud2{
    [key:string]:string|number;
    id: number;
    addr: string;
  };

//   type Ud2=(User|Dept)&{addr:string};
  
  const ud2: Ud2 = {id: 1, name: 'HH', addr: 'Seoul'};
  const ud3: Ud2 = {id: 1, dname: 'HH', captain: 'HH', addr: 'Seoul'};
  console.log("🚀 ~ ud2:", ud2);
  console.log("🚀 ~ ud3:", ud3);
