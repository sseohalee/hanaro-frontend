const user = {
    '': 1,        
    ' ': 1,
    123: 1,
    12345n: 2,
    true: 1, 
    id: 2,          
    [`name`]: 'Hong', 
    [Symbol()]: 'Hong', 
    [`${new Date()}`]: 365, 
    'my-friends': ['Han', 'Kim'],
    getInfo: () => `${this.id}-${this.name}`,  
    getInfo() { return `${this.id}-${this.name}`; },
} 
  

function myEntries(obj){
    const rets=[];
    // for(let k in obj){
    //     console.log(k);
    // }
    // 심볼까지 포함된 값 줌
    for(let k of Reflect.ownKeys(obj)){
        console.log(k);
        rets.push([k, obj[k]]);
    }
    return rets;
}

myEntries(user);