"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Great_Vibes } from '@next/font/google';

// Font configuration
const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
});

const Header = () => {
  const router = useRouter();

  // Mock function to check if user is logged in
  const isUserLoggedIn = () => {
    // Replace with actual authentication check
    return !!localStorage.getItem('user');
  };

  const handleProfileClick = () => {
     {
      router.push('/home/profile'); // Navigate to profile page
    }
  };
  
  return (
    <div className="navbar text-black" style={{ backgroundColor: '#DAA06D' }}>
      <div className="flex-1 flex justify-center">
        <a className={`btn btn-ghost text-4xl font-bold ${greatVibes.className}`}>
          Fiore
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              {/* Cart Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l1 4h10l1-4h2m-2 0a2 2 0 00-2 2v1H7V5a2 2 0 00-2-2M3 7l1 12a2 2 0 002 2h12a2 2 0 002-2l1-12M5 17a2 2 0 11-4 0 2 2 0 014 0zm14 0a2 2 0 11-4 0 2 2 0 014 0zM9 14h6m-1-3v6"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View basket</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://tse3.mm.bing.net/th?id=OIP.LfUcKCHKBamgN20k7KQWeAHaHT&pid=Api&P=0&h=180"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a onClick={handleProfileClick} className="justify-between">
                Profile
              </a>
            </li>
            <li><a>Home</a></li>
            <li><a>Shop</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
