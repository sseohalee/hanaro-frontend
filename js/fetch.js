// const sampleUrl = 'https://jsonplaceholder.typicode.com/users/1';
// // const myFetch = url => fetch(url).then(res => res.json());
// const isAsyncAwait=true;

// if(isAsyncAwait){
//     const res=await fetch(sampleUrl);
//     const data = await res.json();
//     console.log("🚀 ~ data:", data);
// } else{
// // myFetch를 이용하는 코드
//     myFetch(sampleUrl)
//         .then(res => res.json())
//         .then(user => {console.log('user>>>', user);});
// }

// const myFetch = url => fetch(url).then(res => res.json());

// myFetch(sampleUrl).then(user => {
//   console.log('user>>>', user);
// });

const sampleUrl = 'https://jsonplaceholder.typicode.com/users/1';
const sampleUrl2 = 'https://jsonplaceholder.typicode.com/users/1';

// const promiFetch = url => new Promise((resolve, reject)=>{
//     // fetch(url).then(res=>res.json()).then(data=>resolve(data));
//     fetch(url)
//         .then(res=>res.json())
//         .then(resolve);
// });

// const asyncFetch = url => async url => {
//     const res = await fetch(url);
//     const data=await res.json();
//     return data;
// };

// const data = await promiFetch(sampleUrl);
// console.log("🚀 ~ data:", data);

// const data2=await asyncFetch(sampleUrl);
// console.log("🚀 ~ data2:", data2);

// const rets=[sampleUrl,sampleUrl2].map(async(url)=>{
//     const res=await fetch(url);
//     const data=await res.json();
//     return data;
// });
// console.log("🚀 ~ rets ~ rets:", rets);


const f = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  
    if (!res.ok) throw new Error("Failt to Fetch!!");
  
    await new Promise((resolve)=>setTimeout(resolve, 2000));

    const data = await res.json();
    return data.name;
  };
  
console.log(await f());