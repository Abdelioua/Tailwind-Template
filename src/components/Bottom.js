import React from "react";

const Bottom = () => {
  return (
    <div className="flex flex-col space-y-3 justify-between items-center px-6 py-20 text-white md:flex-row md:spacey-0 bg-orange-600">
      <h2 className="text-4xl font-bold text-center md:text-left md:font-4xl ">
        Simplify how your team works today.
      </h2>
      <div>
        <button className="text-orange-600 bg-white rounded-full hover:bg-gray-900 p-3 px-6 my-6 pt-2">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Bottom;
