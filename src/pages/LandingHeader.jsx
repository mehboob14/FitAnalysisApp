import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

const LandingHeader = () => {
  return (
    <header className="bg-white flex w-full flex-col overflow-hidden items-stretch text-center justify-center px-8 py-[17px] rounded-[100px] max-md:max-w-full max-md:px-5">
      <nav
        className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="text-black text-xl font-medium self-stretch my-auto">
          Try This
        </div>

        <div className="self-stretch flex min-w-60 items-center gap-[40px_162px] font-normal flex-wrap my-auto max-md:max-w-full">
          <div className="self-stretch flex min-w-60 items-center gap-2 text-base text-[#8C8C8C] my-auto">
            <button
              className="justify-center items-center self-stretch flex gap-2.5 text-[#9870EA] font-medium whitespace-nowrap leading-none my-auto px-3 py-[9px] rounded-md hover:bg-purple-50 transition-colors"
              aria-label="Navigate to home page"
            >
              <span className="self-stretch my-auto">Home</span>
            </button>
            <button
              className="justify-center items-center self-stretch flex gap-2.5 my-auto px-3 py-[9px] rounded-md hover:bg-gray-50 transition-colors"
              aria-label="Learn how it works"
            >
              <span className="self-stretch my-auto">How it works</span>
            </button>
            <button
              className="justify-center items-center self-stretch flex gap-2.5 my-auto px-3 py-[9px] rounded-md hover:bg-gray-50 transition-colors"
              aria-label="Learn about us"
            >
              <span className="self-stretch my-auto">About us</span>
            </button>
          </div>

          <div className="self-stretch flex min-w-60 items-center gap-3 text-xs tracking-[-0.2px] my-auto">
            <SignedOut>
              <SignUpButton>
                <button
                  className="justify-center items-center border self-stretch flex gap-[13px] text-black w-[124px] my-auto px-[15px] py-2.5 rounded-[1037.037px] border-solid border-[#BABDC5] hover:bg-gray-50 transition-colors"
                  aria-label="Sign up for an account"
                >
                  <span className="self-stretch my-auto">Sign up</span>
                </button>
              </SignUpButton>
              <SignInButton>
                <button
                  className="justify-center items-center shadow-[0_20.364px_50.909px_0_rgba(64,106,255,0.08)] bg-[#9870EA] self-stretch flex gap-[13px] text-white whitespace-nowrap w-[124px] my-auto px-[15px] py-[11px] rounded-[1037.037px] hover:bg-purple-600 transition-colors"
                  aria-label="Login to your account"
                >
                  <span className="self-stretch my-auto">Login</span>
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default LandingHeader;
