class Animal {
    // instance(this) + prototpye 생성! (무엇보다 먼저 실행!)
    constructor(name) {
      this.name = name || super.name;
    }
}
  
class Dog extends Animal {}
  
const dog=new Dog();
  
// lucy instanceof Dog;
// lucy instanceof Animal;
  // 둘다 true -> 다형성
  
  
class Cat extends Animal {
    gguk(){
        console.log('꾹');
    }
}
  
const navi = new Cat();
Cat.prototype;
    // Animal {}
Cat.prototype.gguk();
    // 꾹
  
Animal.prototype;
  // {} (최상위 Object)

const objProxy = new Proxy(obj, {
  set(target, rop, value){
    console.log('proxy.set>>',prop, value);
    return target[prop]=value;
  },
  get(target,prop){
    console.log('proxy.get>>',prop);
    if(prop==='id_name') return `${target['id']}. ${target['name']}` 
    return target[prop];
  },
});

objProxy.id=100;
console.log('obj.id>>',objProxy.id);