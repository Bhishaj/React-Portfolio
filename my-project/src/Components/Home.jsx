import React from "react";
import { HiDownload } from "react-icons/hi";
const Home = () => {
  return (
    <div className="bg-[#34495E] w-full h-screen" name="/">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-0 flex flex-col justify-center h-full">
        <p className="text-gray-300">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Bhishaj Kumar Sharma
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front end web developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a Front end web developer specializing in building and
          occasionally designing exceptional digital experience.Currently,I'm
          focused on building responsive full-stack web applications.
        </p>
        <div>
          <button className=" group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded">
            Download Resume
            <span className="">
              <HiDownload className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
