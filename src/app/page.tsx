"use client"
import { Button } from '@/components/ui/button'
import { auth } from '@clerk/nextjs'
import Link from 'next/link';
import { ArrowRight, BrainCircuit, CheckCheck, ChevronDownSquare, ChevronsRight, LogIn } from 'lucide-react';
import { eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { squareBackground } from '@/constants/colors';
import { useState } from 'react';
import WaitlistModal from '@/components/WaitlistModal';
import CurvyZigzagLine from '@/components/CurvyZigzagLine';
import FeaturesSection from '@/components/FeaturesSection';
import Head from 'next/head';
import Team from '@/components/Team';

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const { userId } = await auth();
  // const isAuth = !!userId;
  const socialLogins = 'https://talking-with-pdf.s3.ap-south-1.amazonaws.com/assets/signIns.png';
  const brokers = 'https://talking-with-pdf.s3.ap-south-1.amazonaws.com/assets/brokers.png';
  const talkWithPortfolioChatbox = 'https://talking-with-pdf.s3.ap-south-1.amazonaws.com/assets/talkWithPortfolioChatbox.png';
  const newsAIchatbox = 'https://talking-with-pdf.s3.ap-south-1.amazonaws.com/assets/newsAIchatbox.png';
  const networthPage = 'https://talking-with-pdf.s3.ap-south-1.amazonaws.com/assets/networthPage.png';

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/portfolioAILogo.ico" />
      </Head>
      <div className={`absolute inset-0 -z-10 h-full w-full ${squareBackground}`}>
        <div className="w-screen min-h-screen">
          <Navbar />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center">
                <div className="w-[30px] h-[70px] -translate-y-[10px] translate-x-1">

                  <Image
                    src="/logo.png"
                    width={10000}
                    height={10000}
                    alt="Picture of social logins"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="mr-3 text-6xl font-semibold my-2">ortfolio AI</h1>
              </div>

              <div className='absolute h-18 w-72 bg-slate-200 rounded-lg translate-x-80 -translate-y-44 overflow-hidden content-center p-2 shadow-lg'>Natural language conversations with your portfolio and entire market</div>
              <div className='absolute h-18 w-80 bg-slate-200 rounded-lg -translate-x-[500px] -translate-y-36 overflow-hidden content-center p-2 shadow-lg'>Seamless Exchanges connectivity
                <div className='p-4 rounded-lg shadow-xl w-[300px] h-[200px]'>
                  <div style={{ width: '100%', height: '100%' }}>
                    <Image
                      src={brokers} // Replace with the URL to your image on AWS S3
                      width={600} // Set the desired width
                      height={400} // Set the desired height
                      alt="brokers"
                      layout="responsive" // Use responsive layout
                      objectFit="contain" // Ensure image fits without cutting
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -translate-x-48 translate-y-12 ">
                <CurvyZigzagLine width={400} height={100} waveLength={160} waveHeight={10} />
              </div>
              <div className='absolute h-18 w-72 bg-slate-200 rounded-lg -translate-x-56 translate-y-36 overflow-hidden content-center p-2 shadow-lg'> AI Portfolio management and optimisation with state-of-the-art deep learning models</div>
              <div className='absolute h-18 w-96 bg-slate-200 rounded-lg translate-x-48 translate-y-48 overflow-hidden content-center p-2 shadow-lg'> Future forecasting with highly advance LSTM deep learning models, advance algorithmic agents, Simulations and stacking models</div>
              <div className='absolute h-18 w-72 bg-slate-200 rounded-lg translate-x-[450px] -translate-y-0 overflow-hidden content-center p-2 shadow-lg'> Real time stocks, crypto news alerts to exit/buy before crash/pump</div>
              <div className='absolute -translate-x-[420px] translate-y-80 w-[550px] flex flex-col'>
                <span>Tracking assets every day, every second is tough and a real headache</span>
                <span className='text-xl'>We&apos;re here to swoop in and <span className='text-red-700'>eradicate</span> those troublesome losses.</span>
              </div>

              <button onClick={handleOpenModal} className='bg-gray-900 text-gray-100 px-4 py-2 rounded-lg shadow-lg relative'>
                <div>Join the waitlist</div>
              </button>

              {isModalOpen && (
                <WaitlistModal onClose={handleCloseModal} /> // Use the WaitlistModal component
              )}

            </div>
          </div>
        </div>

        <div className={`w-screen min-h-[120vh] ${squareBackground}`}>

          <div className="flex flex-col items-center h-screen">

            <div className='flex -translate-x-32'>
              <span className="mb-4 text-slate-900 translate-y-6 -translate-x-6">We have your favorite social logins!</span>
              <div className=" p-4 rounded-lg shadow-xl w-[400px] h-[100px]">
                <Image
                  src={socialLogins}
                  width={10000}
                  height={10000}
                  alt="Picture of social logins"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="relative translate-x-80 -translate-y-16">
              <CurvyZigzagLine width={400} height={100} waveLength={140} waveHeight={30} />
            </div>

            <div className='text-3xl mb-6 -translate-x-12 flex'><BrainCircuit size={36} className='mr-2' />Talk with Portfolio and market</div>

            <div className="flex justify-center">
              <div className="w-1/3">

                <div className='p-4 rounded-lg w-[400px] h-[500px]'>
                  <div style={{ width: '100%', height: '100%' }}>
                    <Image
                      src={talkWithPortfolioChatbox} // Replace with the URL to your image on AWS S3
                      width={600} // Set the desired width
                      height={400} // Set the desired height
                      alt="brokers"
                      layout="responsive" // Use responsive layout
                      objectFit="contain" // Ensure image fits without cutting
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="w-1/3">
                <ul className="mb-6 px-3 text-lg text-gray-900 font-medium">
                  <li className="mb-3 flex"> <CheckCheck className='mr-2 text-green-600' />Engage in natural language interaction</li>
                  <li className="mb-3 flex"> <CheckCheck className='mr-2 text-green-600' />Personalize chat with your portfolio</li>
                  <li className="mb-3 flex"> <CheckCheck className='mr-2 text-green-600' />Access comprehensive market data through chat</li>
                  <li className="mb-3 flex"> <CheckCheck className='mr-2 text-green-600' />Chat with real-time news</li>
                </ul>


                <div className='p-2'>
                  <div className='text-2xl mb-2 mt-8'>Ask things like:</div>

                  <ul className="">
                    <li className="mb-2 flex">
                      <ChevronsRight size={28} className='mr-2' />
                      <span className='w-full'>Tell me the top 5 stocks in each power, finance, railway, and infrastructure sectors with a minimum 25% year-over-year growth and at least 3% dividend in the last 5 years</span>
                    </li>
                    <li className="mb-2 flex">
                      <ChevronsRight size={28} className='mr-2' />
                      <span className='w-full'>How much of my money is invested in meme coins?</span>
                    </li>
                    <li className="mb-2 flex">
                      <ChevronsRight size={28} className='mr-2' />
                      <span className='w-full'>How is my portfolio performing? What adjustments can I make to increase returns?</span>
                    </li>
                    <li className="mb-2 flex">
                      <ChevronsRight size={28} className='mr-2' />
                      <span className='w-full'>Provide the latest news about TATA Motors and analyze how long I should hold it for maximum returns</span>
                    </li>
                    <li className="mb-2 flex">
                      <ChevronsRight size={28} className='mr-2' />
                      <span className='w-full'>Which stock should I sell now based on stock behavior, market conditions, and news?</span>
                    </li>
                    <li className="mb-2 flex">
                      <ChevronsRight size={28} className='mr-2' />
                      <span className='w-full'>Suggest the best stock to invest in the agriculture sector</span>
                    </li>
                    <li className="">
                      <span className='w-full text-lg text-green-800 '>...and really anything you can think of</span>
                    </li>
                  </ul>
                </div>


              </div>

              <div className="w-1/3">
                <div className='p-4 rounded-lg shadow-sm w-[400px] h-[500px] ml-20 translate-y-24'>
                  <div style={{ width: '100%', height: '100%' }}>
                    <Image
                      src={newsAIchatbox}
                      width={1}
                      height={1}
                      alt="brokers"
                      layout="responsive"
                      objectFit="contain"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>


        <div className={`w-screen h-[80vh] ${squareBackground}`}>

          <div className="flex justify-center">

            <div className="w-1/2 pt-56 pr-40">
              <div className="flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">Track your <span className='text-green-600'>net worth</span></span>
                <h2 className="text-3xl font-bold">like a pro!</h2>
                <span className='mt-8 text-lg'>All your investments, one platform.</span>
              </div>

            </div>


            <div className="w-1/2">
              <div className='p-4 rounded-lg w-[1000px] h-[800px] -translate-x-72'>
                <div style={{ width: '100%', height: '100%' }}>
                  <Image
                    src={networthPage}
                    width={600}
                    height={400}
                    alt="brokers"
                    layout="responsive"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>





          </div>


        </div>

        <FeaturesSection />

        <Team />

        <div className='flex justify-center'>
          <button onClick={handleOpenModal} className='bg-gray-900 text-gray-100 px-4 py-2 rounded-lg shadow-lg absolute'>
            <div>Join the waitlist</div>
          </button>
          {isModalOpen && (
            <WaitlistModal onClose={handleCloseModal} />
          )}

        </div>




        <Footer />

      </div>
    </>
  )
}