import React from "react";
import Hero from "../components/Hero";
import Feautures from "../components/Feautures";
import Testimonial from "../components/Testimonial";
import Bottom from "../components/Bottom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Feautures />
      <Testimonial />
      <Bottom />
      <Footer />
    </div>
  );
};

export default Home;
