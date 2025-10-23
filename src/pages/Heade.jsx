import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

const Heade = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isCatalogPage = location.pathname === "/catalog";

  return (
    <header className="relative w-full py-4">
      {/* Background images on sides */}
      <div className="absolute inset-0 flex justify-between pointer-events-none">
        <div
          className="w-1/12 h-full bg-[url('/path/to/left-bg.png')] bg-cover bg-center"
          style={{ minWidth: "10%" }}
        ></div>
        <div
          className="w-1/12 h-full bg-[url('/path/to/right-bg.png')] bg-cover bg-center"
          style={{ minWidth: "10%" }}
        ></div>
      </div>

      {/* Rounded header container */}
      <div className="relative mx-auto w-11/12 md:w-10/12 bg-white rounded-full shadow-md flex items-center justify-between px-6 py-3 z-10">
        {/* Logo */}
        <h1
          className="text-lg font-semibold cursor-pointer hover:text-purple-600 transition-colors"
          onClick={() => navigate("/")}
        >
          Try This
        </h1>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-white bg-opacity-30 border-2 border-black flex items-center justify-center cursor-pointer overflow-hidden hover:bg-opacity-50 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="white"
              stroke="black"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42
         4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81
         14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
         11.54L12 21.35z"
              />
            </svg>
          </div>

          <SignedOut>
            <div className="flex gap-2">
              <SignInButton>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors">
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {/* Catalog page subheader */}
      {isCatalogPage && (
        <div className="flex items-center justify-center px-6 py-3 border-t relative mt-2">
          <button
            className="flex items-center gap-2 text-gray-700 absolute left-6 hover:text-gray-900 transition-colors"
            onClick={() => navigate("/")}
          >
            <FaChevronLeft />
          </button>
          <h2 className="text-xl font-semibold">Catalog</h2>
        </div>
      )}
    </header>
  );
};

export default Heade;
