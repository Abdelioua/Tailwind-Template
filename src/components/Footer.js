import React from "react";
import fb from "../images/icon-facebook.svg";
import inst from "../images/icon-instagram.svg";
import pin from "../images/icon-pinterest.svg";
import tw from "../images/icon-twitter.svg";
import yt from "../images/icon-youtube.svg";
import logo from "../images/logo-white.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col-reverse bg-gray-900 md:flex-row p-6 justify-between text-center">
      <p className="text-white md:hidden mt-6">
        Copyright &copy; 2022 - All rights reserved
      </p>
      <div className="flex flex-col justify-between mx-auto md:mx-0">
        <Link className="text-white" to="/home">
          <img src={logo} alt="" />
        </Link>
        <ul className="flex space-x-3 mx-auto mt-3">
          <li>
            <img src={fb} alt="" />
          </li>
          <li>
            <img src={inst} alt="" />
          </li>
          <li>
            <img src={pin} alt="" />
          </li>
          <li>
            <img src={tw} alt="" />
          </li>
          <li>
            <img src={yt} alt="" />
          </li>
        </ul>
      </div>
      <div className="flex flex-row justify-around space-x-12 my-12">
        <div>
          <ul className="flex flex-col space-y-3 text-white">
            <li>Home</li>
            <li>Pricing</li>
            <li>Products</li>
            <li>About</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col space-y-6 text-white">
            <li>Careers</li>
            <li>Community</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <form className="flex flex-row space-x-2">
            <input
              type="text"
              className="flex-1 rounded-full px-4 py-1 focus:outline-none"
              placeholder="Updated in your inbox"
            />
            <button className="bg-orange-600 text-white font-bold rounded-full px-3">
              Go
            </button>
          </form>
        </div>
        <p className="hidden text-white md:block">
          Copyright &copy; 2022 - All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
