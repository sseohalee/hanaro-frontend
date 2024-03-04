import Link from 'next/link';
import { ReactNode } from 'react';

export default function HelloLayout({children} : {children: ReactNode}){
  return(<>
    <h1 className='text-lg'>Hello Layout</h1>
    <div>
      <ul className='flex justify-between text-blue-300'>
        <li><Link href='/hello'>Hello</Link></li>
        <li><Link href='/hello/morning'>morning</Link></li>
        <li><Link href='/hello/afternoon'>afternoon</Link></li>
        <li><Link href='/hello/evening'>evening</Link></li>
      </ul>
    </div>
    <div className='border border-red-400'>{children}</div>
  </>);
}