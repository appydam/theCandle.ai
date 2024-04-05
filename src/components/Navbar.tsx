import { UserButton } from '@clerk/nextjs';
import { FileText } from 'lucide-react';
import React from 'react';



const Navbar = () => {
  return (
    <div className="mx-auto translate-y-6">
      <div className="bg-[conic-gradient(var(--tw-gradient-stops))] from-blue-200 via-blue-300 to-blue-400 border border-white p-4 rounded-lg fixed w-[80%] top-0 left-1/2 transform -translate-x-1/2">
        <nav className="flex items-center justify-between">
          <div className="text-gray-600 text-xl font-bold flex">
            <FileText className='text-gray-600 w-8 h-8 mr-2' />
            <UserButton afterSignOutUrl='/' />
          </div>
          <div className="flex space-x-24">
            <a href="/" className="text-gray-600 font-semibold">
              Talk With Portfolio
            </a>
            <a href="/about" className="text-gray-600 font-semibold">
              Buy
            </a>
            <a href="/tech" className="text-gray-600 font-semibold">
              Manage Portfolio
            </a>
            <a href="/contact" className="text-gray-600 font-semibold">
              News
            </a>
            <a href="/contact" className="text-gray-600 font-semibold">
              Learn
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
