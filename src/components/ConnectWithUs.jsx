"use client";
import React from 'react';
const ConnectWithUs = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center px-20 tracking-wide bg-white max-md:px-5">
      <div className="flex overflow-hidden flex-col items-center py-40 w-full max-w-[1050px] max-md:py-24 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-center max-w-full text-center text-stone-700 w-[692px]">
          <div className="flex overflow-hidden flex-col items-center w-full">
            <h1 className="text-4xl font-bold leading-none">
              Connect with Us
            </h1>
            <p className="mt-2.5 text-sm leading-5 max-md:max-w-full">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
        <div className="flex gap-8 justify-center items-start mt-20 max-w-full text-sm leading-7 w-[688px] max-md:mt-10">
          <div className="flex flex-col items-center min-w-[240px] w-[688px]">
            <div className="flex flex-col w-full max-w-[688px] max-md:max-w-full">
              <form className="flex overflow-hidden flex-wrap gap-5 justify-between pl-5 rounded-md border border-solid bg-neutral-200 border-zinc-600 max-md:max-w-full">
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="my-auto text-stone-950 bg-transparent border-none outline-none"
                  aria-label="Your Email"
                />
                <button
                  type="submit"
                  className="overflow-hidden px-6 py-4 text-center whitespace-nowrap bg-lime-400 rounded-none border border-solid border-zinc-600 text-stone-950 max-md:px-5"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;