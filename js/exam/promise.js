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

// 1) then 방식
// depthTimer(1)
//     .then(depthTimer(2))
//     .then(depthTimer(3))
//     .catch(err=>console.error(err));

// console.log('START!', new Date());

// 2) await 방식
// try{
//     const r1 = await depthTimer(1);
//     const r2 = await depthTimer(2);
//     const r3 = await depthTimer(3);
// } catch (err){
//     console.error(err);
// }

// 3) for-await-of 방식

// const depthTimers=[1,2,3].map(async depth=> depthTimer)

//1. title, body 출력
//2. 댓글목록(posts, postId, comments) 출력