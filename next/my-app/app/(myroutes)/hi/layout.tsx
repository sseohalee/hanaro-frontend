import Link from 'next/link';
import { ReactNode } from 'react';

export const TIMES = ['morning', 'afternoon', 'evening'];

export default function HiLayout({children}: {children:ReactNode}){
  return(
    <>
      <h1>Hi~</h1>
      <ul className='gird grid-cols-3 text-blue-500'>
        {TIMES.map((time)=>(
          <li key={time}><Link href={`/hi/${time}`}>{time}</Link></li>
        ))}
      </ul>
      <div className='border border-dotted border-red-400'>{children}</div>
    </>
  );
}