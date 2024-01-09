import Link from 'next/link';

const Ic3 = () => {
  return (
    <div>
      <div>This is IC3 Real</div>
      <Link href='/intercept/ic2' className='btn'>
        IC2
      </Link>
      <Link href={'/about'}>About</Link>
    </div>
  );
};

export default Ic3;
