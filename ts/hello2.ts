type TUser1={
    id: number;
    name:string;
};

type TUser2={
    id:number;
    name: string;
    addr?: string;
};

const hong1: TUser1={
    id:1,
    name:'Hong'
};

const lee: TUser2={
    id: 1,
    name: 'Lee',
    addr: 'Seoul'
};

let partner:TUser1={
    ...lee,
    id:2,
    name:'Kim'
};

// let partner2:TUser1={
//     ...hong1,
//     id:3,
//     addr:'Daejeon'
// };

let friend:TUser1={
    ...lee
};

const xxx={
    id:9,
    addr:'Sokcho'
};

// let friend2 : TUser1={
//     ...xxx,
//     id:8
// };

type X = {
    id: number;
    name: string;
};

type Y={
    id:number, addr:string
};

//합쳐라
type Z = X|Y;

// 인덱스 시그니처 사용
type Z1={
    [i:string]: string|number;
    id:number;
}

type Z2={
    [i:string]: string|number;
    id:number;
} & Y; // & 기호 곱하기 기호와 같다고 생각

const compos:Z1={id:1, name:'Hong', addr:'Seoul'};

type ANY=number;
function addx(a:ANY, b?:ANY){
    return a+(b??0);
}

type F = (a:ANY, b: number|undefined, c:number)=>number;