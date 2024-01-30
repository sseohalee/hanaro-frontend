const kim = {nid: 3, nm: 'Hong', addr: 'Pusan'};

const newKim = copyObject(kim);
newKim.addr = 'Daegu';
console.log(kim.addr !== newKim.addr);
console.log(newKim);

function copyObject(obj){
    const newObj = {};
    for (const k in obj)
        newObj[k] = obj[k];
    return newObj;
}