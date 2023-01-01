import React from "react";
import jenna from "../images/undraw_female_avatar_wqf0.svg";
import ali from "../images/undraw_male_avatar_g98d.svg";
import josh from "../images/undraw_pic_profile_re_7g2h.svg";

const Testimonial = () => {
  return (
    <div className="container mx-auto mt-32 max-w-6xl px-6 text-center">
      <h2 className="font-bold text-4xl text-center ">
        What's different about Manage?
      </h2>
      <div className="flex flex-col mt-16 md:flex-row md:space-x-6">
        <div className="flex flex-col bg-gray-200 md:w-1/3 rounded-lg shadow-xl">
          <img src={jenna} alt="" className="-mt-12 w-20 h-20 mx-auto" />
          <p className="text-center md:text-left p-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            suscipit delectus illo incidunt error nihil ad nesciunt aliquam eos,
            fuga vero sequi maiores architecto fugiat minus perspiciatis
            deserunt, ullam sint?
          </p>
        </div>
        <div className="hidden md:flex flex-col bg-gray-200 md:w-1/3 rounded-lg shadow-xl">
          <img src={ali} alt="" className="-mt-12 w-20 h-20 mx-auto" />
          <p className="text-center md:text-left p-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            suscipit delectus illo incidunt error nihil ad nesciunt aliquam eos,
            fuga vero sequi maiores architecto fugiat minus perspiciatis
            deserunt, ullam sint?
          </p>
        </div>
        <div className="hidden md:flex flex-col bg-gray-200 md:w-1/3 rounded-lg shadow-xl">
          <img src={josh} alt="" className="-mt-12 w-20 h-20 mx-auto" />
          <p className="text-center md:text-left p-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            suscipit delectus illo incidunt error nihil ad nesciunt aliquam eos,
            fuga vero sequi maiores architecto fugiat minus perspiciatis
            deserunt, ullam sint?
          </p>
        </div>
      </div>
      <button className="text-white bg-orange-600 rounded-full hover:bg-slate-400 p-3 px-6 my-6 pt-2">
        Get started
      </button>
    </div>
  );
};

export default Testimonial;
