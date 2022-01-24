import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-100 p-5">
      <div className="flex justify-between align-itemcenter mx-auto max-w-7xl">
        <div className="flex itemcenter space-x-4">
          <Link href="/">
            <img class="w-44" src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png" alt="" />
          </Link>
          <ul className="hidden md:inline-flex items-center space-x-5">
            <li>About</li>
            <li>Contact</li>
            <li className='text-white bg-green-600 px-4 py-1 rounded-full'>Follow</li>
          </ul>
        </div>
        <ul className='flex items-center space-x-5 text-green-600'>
          <li >Sign In</li>
          <li className="border border-green-600 px-4 py-1 rounded-full">Get Started</li>
        </ul>
      </div>
    </header>
  )
};

export default Header;
