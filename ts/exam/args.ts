function add(a: number, b: string) { 
    return `${a} - ${b}`;
  }
  
  function add2(a: number, b: string, c:boolean) { 
    return `${a} - ${b} - ${c}`;
  }
  
  type FirstArgs<F> = F extends (a: infer First, ...b: any) => any? First:never;
  type SecondArgs<F> = F extends (a: any, b: infer Second, ...r:any) => any? Second:never;
  type Args<F> = F extends (...args:infer P)=>any?P[number]:never;
  
  
  type A = FirstArgs<typeof add>;  // number
  type B = SecondArgs<typeof add>; // string

  type SecondArgs2<F>=F extends (...args:infer P)=>any ? P[number]: never;

  type BLog2=SecondArgs2<typeof add2>;

  type C = Args<typeof add>; // number | string
  
  // type AX = Args<String.prototype.endsWith>;
     // ⇒ string | number | undefined
  
  // args.ts