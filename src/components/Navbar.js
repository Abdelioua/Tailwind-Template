import React, { useState } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNav = () => {
    setIsOpen((v) => (v = !v));
  };
  return (
    <div className="relative container p-6 mx-auto">
      <div className="flex justify-between items-center">
        <Link to="/home">
          <img src={logo} alt="" />
        </Link>
        <ul className="hidden md:flex space-x-6 ">
          <li>pricing</li>
          <li>Product</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Community</li>
        </ul>
        <button className="hidden md:block text-white bg-orange-600 rounded-full hover:bg-slate-400 p-3 px-6 pt-2">
          Get started
        </button>
        <div
          onClick={handleNav}
          className={`${isOpen ? "open" : ""} hamburger md:hidden`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`${isOpen ? "" : "hidden"} md:hidden`}>
        <ul className="absolute flex flex-col items-center bg-white py-11 pt-11 space-y-6 sm:w-auto left-6 right-6 drop-shadow-md rounded-md">
          <li className="hover:text-orange-600 cursor-pointer">pricing</li>
          <li className="hover:text-orange-600 cursor-pointer">Product</li>
          <li className="hover:text-orange-600 cursor-pointer">About Us</li>
          <li className="hover:text-orange-600 cursor-pointer">Careers</li>
          <li className="hover:text-orange-600 cursor-pointer">Community</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
