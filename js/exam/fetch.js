// const userUrl='https://jsonplaceholder.typicode.com/posts?userId=';
// const commentsUrl='https://jsonplaceholder.typicode.com/posts/';

// // const post = url => fetch(url).then(res=>res.json());

// // post(userUrl).then(user=>{
// //     console.log('user',user);
// // });

// // const posts=async()=>{
// //     const response = await fetch(userUrl);
// //     return await response.json();
// // };
// // (async ()=>console.log(await posts()))();

// const comments = async(id)=>{
//     const url= commentsUrl+id+'/comments';
//     const res=await fetch(url);
//     return await res.json();
// };
// (async ()=>console.log(await comments(1)))();

// const getPosts = async(id)=>{
//     const postUrl=userUrl+id;
//     const res=await fetch(postUrl);
//     return await res.json();
// };
// (async ()=>console.log(await getPosts(1)))();

const userId=1;
const res= await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
);
const posts=(await res.json()).map(({id:postId,title})=>({postId,title}));
console.log("🚀 ~ posts:", posts.length);

for(const post of posts){
    const cRes=await fetch(`https://jsonplaceholder.typicode.com/posts/${post.postId}/comments`);
    post.comments=await CredentialsContainer.json();
}
