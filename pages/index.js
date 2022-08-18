import Head from "next/head";
import clientPromise from "../lib/mongodb";
import AliceCarousel from "react-alice-carousel";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Name } from "../components/Header";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Home({ isConnected, colleges }) {
  const handleDragStart = (e) => e.preventDefault();
  // console.log(colleges);
  const items = [
    <img
      src={
        "https://mcmscache.epapr.in/post_images/website_350/post_15670932/thumb.jpg"
      }
      onDragStart={handleDragStart}
      title='NCU Gurugram'
      className='h-64 w-[350px] hover:animate-pulse'
      role='presentation'
    />,
    <img
      src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/9c/5f/d4/stuc-pu-largejpg.jpg?w=1200&h=1200&s=1'
      onDragStart={handleDragStart}
      role='presentation'
      title='Punjab University Chandigarh'
      className='h-64 w-[350px] hover:animate-pulse'
    />,
    <img
      src='https://images.newindianexpress.com/uploads/user/imagelibrary/2022/3/26/w1200X800/IIT.jpg'
      onDragStart={handleDragStart}
      role='presentation'
      title='IIT Delhi'
      className='h-64 w-[350px] hover:animate-pulse'
    />,
    <img
      src='https://www.admissionmba.in/wp-content/uploads/2013/10/ITM-University.jpg'
      onDragStart={handleDragStart}
      role='presentation'
      title='IIM University Ahmedabad'
      className='h-64 w-[350px] hover:animate-pulse'
    />,
  ];
  const responsive = {
    0: { items: 1 },
    550: { items: 2 },
    1250: { items: 4 },
  };
  const finalName = "";
  const [fees, setFees] = useState("");
  // finalName = "arsh"
  const [dept, setDept] = useState("");
  const [loc, setLoc] = useState("");
  const [rank, setRank] = useState("");
  const [state, setState] = useState("");
  // const [hide, setHide] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault;
    setHide(!hide);
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      {/* {isConnected ? (
        <h2 className='subtitle'>You are connected to MongoDB</h2>
      ) : (
        <h2 className='subtitle'>
          You are NOT connected to MongoDB. Check the <code>README.md</code> for
          instructions.
        </h2>
      )} */}

      <main className='flex w-[484px] flex-1 flex-col  justify-center px-20 text-center py-20'>
        <h1 className='text-gray-600 w-full tracking-wider my-6 text-[24px]'>
          Find Universities that fit you better than a tailored suit.
        </h1>
        <div>
          <form className='flex flex-col gap-2'>
            <input
              className='border-2 px-2 py-1 rounded-md'
              placeholder='Enter Fees'
              type='number'
              name='fees'
              onChange={(e) => setFees(e.target.value)}
              required
            />
            <select
              name='department'
              onChange={(e) => setDept(e.target.value)}
              className='text-[#9a9999] border-2 px-2 py-1 rounded-md'>
              <option value='Architecture'>Architecture</option>
              <option value='Dental'>Dental</option>
              <option value='Engineering'>Engineering</option>
              <option value='Law'>Law</option>
              <option value='Management'>Management</option>
              <option value='Medical'>Medical</option>
              <option value='Pharmacy'>Pharmacy</option>
            </select>
            <input
              className='border-2 px-2 py-1 rounded-md'
              placeholder='Enter City'
              onChange={(e) => setLoc(e.target.value)}
              name='city'
            />
            <input
              className='border-2 px-2 py-1 rounded-md'
              placeholder='Enter State'
              onChange={(e) => setState(e.target.value)}
              name='state'
            />
            <input
              className='border-2 px-2 py-1 rounded-md'
              placeholder='Enter Rank'
              onChange={(e) => setRank(e.target.value)}
              name='rank'
            />
            <button
              className='rounded-md mt-5 border-2 bg-red-600 text-white py-1 border-red-600 animate-pulse'
              type='submit'>
              Search
            </button>
          </form>
        </div>
      </main>
      <div className='w-full'>
        <div className='flex justify-around w-full mb-5'>
          {/* <h1 className='text-2xl'>Search Results...</h1> */}
          {/* <h1>Fees : {fees}</h1>
          <h1>Department : {dept}</h1>
          <h1>Location : {loc}</h1>
          <h1>Rank : {rank}</h1> */}
        </div>
        {colleges.map((college) => {
          return (
            <div
              key={college.institute_id}
              className='border-2 flex items-center justify-around'>
              <div className='flex flex-col my-8 px-[24px]'>
                <h1 className='text-2xl font-semibold w-[360px]'>
                  {college.name}
                </h1>
                <h1 className='text-gray-600'>Fees : {college.fees}</h1>
                <h1 className='text-gray-600'>Location : {college.city}</h1>
                <h1 className='text-gray-600'>Domain : {college.department}</h1>
              </div>

              <h1 className='bg-[#0a6478] text-white py-2 px-4'>
                Rank : {college.rank1}
              </h1>
            </div>
          );
        })}
      </div>
      <div className='w-full py-10'>
        <div className='text-center mb-5'>
          <h1
            style={{ textShadow: "2px 2px 6px" }}
            className='text-gray-200 md:text-8xl'>
            Featured
          </h1>
          <h1 className='text-2xl font-semibold relative bottom-12'>
            Featured Colleges
          </h1>
        </div>
        <AliceCarousel
          responsive={responsive}
          mouseTracking
          items={items}
          disableButtonsControls
          disableDotsControls
          autoPlay
          autoPlayInterval={500}
          animationDuration={2000}
          animationType='slide'
          infinite
          touchTracking={false}
        />
      </div>

      <footer className='flex h-24 w-full items-center justify-center border-t'>
        <a
          className='flex items-center justify-center gap-2'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by{" "}
          {/* <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} /> */}
        </a>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  // console.log(context);
  try {
    // await clientPromise;
    const client = await clientPromise;
    const db = client.db("ex2");
    const fees1 = Number(context.query.fees);
    const rank = Number(context.query.rank);
    // console.log(fees1);
    let colleges = await db
      .collection("college")
      .find({
        fees: { $lte: fees1 },
        state: context.query.state,
        department: context.query.department,
        rank1: { $lte: rank },
      })
      .toArray();
    // console.log(colleges + " Arash");
    colleges = JSON.parse(JSON.stringify(colleges));

    return {
      props: { isConnected: true, colleges },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
