import Header from "../components/Header";

export default function about() {
  return (
    <>
      <Header />
      <div className='flex flex-col justify-center items-center mt-16'>
        <h1 className='text-5xl'>Contributors</h1>
        <ul className='mt-20'>
          <li className='text-2xl tracking-wide mb-2'>Arash Arora</li>
          <li className='text-2xl tracking-wide mb-2'>Anish Bansal</li>
          <li className='text-2xl tracking-wide mb-2'>Radhika Sinhal</li>
          <li className='text-2xl tracking-wide mb-2'>Ravi Yadav</li>
          <li className='text-2xl tracking-wide mb-2'>Yogesh Arora</li>
        </ul>
      </div>
    </>
  );
}
