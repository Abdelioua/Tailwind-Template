import React from "react";
import illu from "../images/undraw_charts_re_5qe9.svg";
const Hero = () => {
  return (
    <div className="flex-col-reverse flex md:flex-row container space-y-0 md:space-y-0 mt-10 mx-auto p-6 text-center">
      <div className="mx-auto">
        <h1 className="max-w-md font-bold text-4xl md:text-left md:text-5xl">
          Bring every one together to build better products
        </h1>
        <p className="max-w-md my-6 text-gray-400 md:text-left">
          manage makes it simple for software to plan day-to-day tasks while
          keeping the larger team goals in view
        </p>
        <button className="text-white bg-orange-600 rounded-full hover:bg-slate-400 p-3 px-6 pt-2">
          Get started
        </button>
      </div>
      <div className="md:w-1/2">
        <img src={illu} alt="not found" className="mb-10" />
      </div>
    </div>
  );
};

export default Hero;
