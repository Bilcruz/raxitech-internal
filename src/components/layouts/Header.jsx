import { ChevronDownIcon } from "@heroicons/react/solid";
import React from "react";
import raxi from "../../assets/images/raxii.png";
import raxitech from "../../assets/images/raxitech.png";

import HandBugger from "../HandBugger";

export default function Header() {
  return (
    <>
      <div className=" bg-white fixed w-full z-50">
        <div className="mx-4 my-2">
          <div className="flex flex-row justify-between items-center bg-white md:w-3/4 mx-auto lg:hidden">
            <img src={raxi} alt="logo" className="mx-1 w-8 h-8 lg:hidden" />
            <HandBugger />
          </div>
        </div>
      </div>

      <div className="hidden fixed w-screen mx-auto lg:block bg-white h-16 z-50">
        <div className="text-gray-600 mx-[13.5%] flex flex-row justify-between items-center h-full">
          <div className="justify-items-start">
            <img src={raxitech} alt="logo" className="basis-0 w-15 h-7 -ml-2" />
          </div>
          <div className="flex flex-row gap-0 lg:gap-6 justify-end">
            <div className=" hover:cursor-pointer flex gap-1 items-center transform hover:scale-[1.1] lg:hover:scale-125 transition duration-500 ease-in-out">
              <a href="/" className="text-blue-900 font-semibold">
                About Us
              </a>
              <ChevronDownIcon className="w-5 h-5 text-blue-400" />
            </div>
            <div className=" hover:cursor-pointer flex gap-1 items-center transform hover:scale-[1.1] lg:hover:scale-125 transition duration-500 ease-in-out">
              <a href="/" className="text-blue-900 font-semibold">
                What we do
              </a>
              <ChevronDownIcon className="w-5 h-5 text-blue-400" />
            </div>
            <div className=" hover:cursor-pointer flex gap-1 items-center  transform hover:scale-[1.1] lg:hover:scale-125 transition duration-500 ease-in-out">
              <a href="/" className="text-blue-900 font-semibold">
                Mission
              </a>
              <ChevronDownIcon className="w-5 h-5 text-blue-400" />
            </div>
            <div className=" hover:cursor-pointer flex gap-1 items-center transform hover:scale-[1.1] lg:hover:scale-125 transition duration-500 ease-in-out">
              <a href="/" className="text-blue-900 font-semibold">
                Vision
              </a>
              <ChevronDownIcon className="w-5 h-5 text-blue-400" />
            </div>
            <div className="hover:cursor-pointer flex gap-1 items-center transform hover:scale-[1.1] lg:hover:scale-125 transition duration-500 ease-in-out">
              <a href="/" className="text-blue-900 font-semibold">
                Contact Us
              </a>
              <ChevronDownIcon className="w-5 h-5 text-blue-400" />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-blue-100 h-16 w-full"></div>
    </>
  );
}
