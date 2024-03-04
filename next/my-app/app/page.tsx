import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Link href='/hello' className='text-xl font-semibold border-4 border-red-300'>Go Hello</Link>
      <Image
        src='/vercel.svg'
        alt='Vercel Logo'
        className='dark:invert'
        width={100}
        height={24}
        priority
      />
    </main>
  );
}
