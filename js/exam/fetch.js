const userUrl='https://jsonplaceholder.typicode.com/posts?userId=1';
const commentsUrl='https://jsonplaceholder.typicode.com/posts/';

// const post = url => fetch(url).then(res=>res.json());

// post(userUrl).then(user=>{
//     console.log('user',user);
// });

// const posts=async()=>{
//     const response = await fetch(userUrl);
//     return await response.json();
// };
// (async ()=>console.log(await posts()))();

const comments = async(id)=>{
    const url= commentsUrl+id+'/comments';
    const res=await fetch(url);
    return await res.json();
};
(async ()=>console.log(await comments(1)))();