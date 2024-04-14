"use client"
import { UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { auth } from '@clerk/nextjs'
import React from 'react';

const Navbar = () => {
  const router = useRouter();
  function handleClick() {
    router.push('/gettingStarted');
  }

  return (
    <div className="mx-auto translate-y-6">
      <div className="bg-[conic-gradient(var(--tw-gradient-stops))] from-gray-300 via-slate-100 to-gray-100
       border border-white py-2 px-4 rounded-lg fixed w-[80%] top-0 left-1/2 transform -translate-x-1/2">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4">

            <div className="w-[30px] h-full">
              <a href="/">
                <Image
                  src="/logo.png"
                  width={10000}
                  height={10000}
                  alt="Picture of social logins"
                  className="w-full h-full object-cover rounded-lg"
                />
              </a>
            </div>
            <button className="text-gray-600 font-semibold px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-200 transition-colors duration-300"
              onClick={handleClick}
            >Getting Started</button>

            <div className="flex items-center text-gray-600 text-xl font-bold">
              <UserButton afterSignOutUrl='/' />
            </div>
          </div>
          <div className="flex space-x-8">
            <a href="/talkwithportfolio" className="text-gray-600 font-semibold">
              Talk With Portfolio
            </a>
            <a href="/buyasset" className="text-gray-600 font-semibold">
              Buy
            </a>
            <a href="/manageportfolio" className="text-gray-600 font-semibold">
              Manage Portfolio
            </a>
            <a href="/news" className="text-gray-600 font-semibold">
              News
            </a>
            <a href="/learn" className="text-gray-600 font-semibold">
              Learn
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
