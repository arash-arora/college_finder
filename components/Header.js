export default function Header() {
  return (
    <header className='py-5 w-full text-center flex flex-col bg-[#043659] text-white'>
      <div className='flex justify-between mx-[100px]'>
        <a href='/'>
          <h1 className='text-3xl'>College Finder</h1>
        </a>
        <a className='relative top-1' href='/about'>
          <h1 className='text-xl'>About</h1>
        </a>
      </div>
    </header>
  );
}

export function Name() {
  console.log("Arash");
}
