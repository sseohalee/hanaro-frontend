globalThis.y=10;

function bfn_fd(x){
    console.log(x, this.y);
}

bfn_fd.bind({y:999})(7);

// 화살표 함수 this는 부모의 this
const bfn = x => console.log(x,this.y);
bfn(9);