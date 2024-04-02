import { FaBell, FaUser } from "react-icons/fa";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-50 px-8 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="mr-1">
          <img src="candle.png" alt="Logo" className="h-8" />
        </div>
        <div className="flex space-x-4">
          <a
            href="/"
            className="text-black hover:bg-blue-200 py-2 rounded-lg text-lg"
          >
            theCandle
          </a>
          <a
            href="/portfolio"
            className="text-black hover:bg-blue-200 px-3 py-2 rounded-lg text-lg"
          >
            Talk
          </a>
          <a
            href="/buy"
            className="text-black hover:bg-blue-200 px-3 py-2 rounded-lg text-lg"
          >
            Buy
          </a>
          <a
            href="/manage"
            className="text-black hover:bg-blue-200 px-3 py-2 rounded-lg text-lg"
          >
            Manage
          </a>
          <a
            href="/news"
            className="text-black hover:bg-blue-200 px-3 py-2 rounded-lg text-lg"
          >
            News
          </a>
          <a
            href="/learn"
            className="text-black hover:bg-blue-200 px-3 py-2 rounded-lg text-lg"
          >
            Learn
          </a>
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
