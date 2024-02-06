const users = [
    { id: 1, name: '홍길동', tel: '01088889991', addr: '서울' },
    { id: 2, name: '김길동', tel: '01088889992', addr: '부산' },
    { id: 3, name: '이길동', tel: '01088889993', addr: '서울' },
    { id: 4, name: '박길동', tel: '01088889994', addr: '서울' },
  ];

// console.log(usersValue);
const userTable= document.querySelector('.userTable');

for(let i=0; i<=users.length;i+=1){
  const newRow=userTable.insertRow();
  const user=users[i];
  const userValue=Object.values(user);

  for(let j=0; j<userValue.length;j+=1){
    const cell=newRow.insertCell(j);
    cell.innerHTML=userValue[j];

    if(j==(userValue.length-1)){
      const btn=document.createElement('button');
      btn.textContent='삭제';
      btn.addEventListener('click',evt=>{
        newRow.remove();
      });
      newRow.insertCell().append(btn);
    }
  }
}


var deleteBtn = document.createElement("button");
deleteBtn.innerHTML = "Delete";

const dRow = userTable.deleteRow(-1);