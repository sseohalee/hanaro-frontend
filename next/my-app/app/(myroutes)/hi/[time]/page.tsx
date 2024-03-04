import { TIMES } from '../layout';

type Props = {
  params: {time:string};
}

export async function generateStaticParams() {
  return TIMES.map((time)=>({
      time,
  }));
}

export default function HiTime ({params}:Props){
  const {time} = params;
  
  return (
    <>Good {time}</>
  );
};