function once(f, thisValue) {
    let didRun = false;
  
    return function (...args) {
        // if(didRun==false){
        //     didRun=true;
        //     return f(...args);
        // }

        return (didrun=ture),f.apply(this,args);

      // return f.call(thisValue, ...args);
      // return f.apply(thisValue, args);
      // return f.bind(thisValue)(...args);
    };
  }
  
  const thisObj1 = { id: 100 };
  const thisObj2 = { id: 200 };

  function f(x, y) {
    return `끝번호 ${x}, ${y}입니다! ${this}`;
  }

  const fn = once(f);

  console.log(fn(1, 6));
  console.log(fn(2, 7));
  console.log(fn(3, 8)); // undefined

  //this bind를 사용자가 자유롭게