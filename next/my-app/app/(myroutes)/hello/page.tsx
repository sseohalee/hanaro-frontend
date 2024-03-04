// localhost:3000/hello
// a.com/hello
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function Hello() {
  redirect('/hello/morning');
  return (
    <>
      <h1 className='text-lg'>Hello</h1>
      <Link href='/' type='button'>
        Go Home
      </Link>
    </>
  );
}
