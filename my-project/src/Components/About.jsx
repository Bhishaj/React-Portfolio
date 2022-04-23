import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen bg-[#34495E] text-black" name="about">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text-right text-4xl font-bold text-white">
            <p>Hi, I'm Bhishaj, nice to meet you.Please take a look around.</p>
          </div>
          <div>
            <p className="text-gray-300">
              I am passionate about building exellent websites that improves the
              lines of those around me.I specialize in creating websites for
              clients ranging from individuals and small-businesses all the way
              to largeenterprise corporations.What would you do if you have web
              developer at your fingerprints.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
