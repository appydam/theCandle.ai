import { UserButton } from '@clerk/nextjs';
import { FileText } from 'lucide-react';
import React from 'react';

const Navbar = () => {
  return (
    <div className="mx-auto translate-y-6">
      <div className="bg-[conic-gradient(var(--tw-gradient-stops))] from-gray-300 via-slate-100 to-gray-100
       border border-white p-4 rounded-lg fixed w-[80%] top-0 left-1/2 transform -translate-x-1/2">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 font-semibold px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-200 transition-colors duration-300">Getting Started</button>

            <div className="flex items-center text-gray-600 text-xl font-bold">
              <UserButton afterSignOutUrl='/' />
            </div>
          </div>
          <div className="flex space-x-8">
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
