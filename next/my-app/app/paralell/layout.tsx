import Link from "next/link";

// app/paralell/layout.tsx
export default function ParalellLayout({
  children,
  profile,
  login,
}: {
  children: React.ReactNode;
  profile: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLogin = true;
  // const toggleLogin = () => isLogin=!isLogin;

  return (
    <>
      <h1>ParalellLayout</h1>
      <button className='text-blue-400'>Toggle</button>
      {isLogin? (
      <div className='border border-dotted border-red-500 flex justify-around p-5'>
        <div className='border p-3'>
          {profile}
        </div>
        <div className='border p-3'>
          {login}
        </div>
      </div>
      ) : (
        login
      )}
      {children}
      <div className='text-blue-400 flex justify-around'>
        <Link href='/paralell/bbb'>Profile/BBB</Link>
        <Link href='/paralell/aaa'>Login/AAA</Link>
      </div>
      <div className='text-blue-400 flex justify-around'>
        <Link href='/paralell/ccc'>Profile/CCC</Link>
        <Link href='/paralell/ddd'>Login/DDD</Link>
      </div>
      <div className='text-blue-400'>
        <Link href='/paralell/xxx'>XXX</Link>
      </div>
    </>
  );
}
