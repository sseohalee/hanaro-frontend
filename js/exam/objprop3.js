const arr = [
    ['A', 10, 20], 
    ['B', 30, 40], 
    ['C', 50, 60, 70]
];

const newObj=makeObjectFromArray(arr);
console.log("🚀 ~ newObj:", newObj);
const newArr=makeArrayFromObject(newObj);
console.log("🚀 ~ newArr:", newArr);

function makeObjectFromArray(arr){
    const retObj={};
    for (const [k, ...v] of arr){
        retObj[k]=v;
    }
    return retObj;
}

function makeArrayFromObject(obj){
    const retArr=[];
    for(const k in obj){
        retArr.push([k, ...obj[k]]);
    }
    return retArr;
}   
