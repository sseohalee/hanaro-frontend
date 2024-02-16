function debounce(cb:(...args: unknown[])=>void, delay:number){
    let timer: ReturnType<typeof setTimeout> | null;
    return (...args: unknown[]) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(cb, delay, ...args);
      };
  };
  
  function throttle(cb:(...args: unknown[])=>void, delay:number){
    let timer: ReturnType<typeof setTimeout> | null;
    return (...args: any[])=>{
        timer=setTimeout(()=>{
            cb(...args);
            timer=null;
        },delay);
    };
  };
  
  // test
  const debo = debounce(a => console.log(a + 1), 1000);
  for (let i = 10; i < 15; i++) debo(i);   // 15
  
  const thro = throttle(a => console.log(a + 1), 1000);
  for (let i = 10; i < 15; i++) thro(i);   // 11