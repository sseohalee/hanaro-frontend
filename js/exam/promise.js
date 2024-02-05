// setTimeout( function() {
//     console.log('depth1', new Date());
//     setTimeout( function() {
//       console.log('depth2', new Date());
//       setTimeout( function() {
//         console.log('depth3', new Date());
//         throw new Error('Already 3-depth!!');
//       }, 3000 );
//     }, 2000);
//   }, 1000);
  
  
// console.log('START!', new Date());
  
// const f = async () => {
//     await new Promise(resolve=>{
//         setTimeout((resolve)={
//             console.log('depth1',new Date())
//         },1000);
//     })
// }

// console.log('START!', new Date());
// console.log(await f());

const depthTimer = (id=1)=>
    new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('depth'+id,new Date());
            if(id<3) resolve(id+1);
            else reject(new Error('Already 3-depth!!'));
        }, id*1000);
    });

depthTimer(1)
    .then(depthTimer(2))
    .then(depthTimer(3))
    .catch(err=>console.error(err));

console.log('START!', new Date());