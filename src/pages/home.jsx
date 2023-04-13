import React from "react";
import Navbar from "../components/home/navbar";
import HomeSection from "../components/home/homeSection";
import Service from "../components/home/service";
import About from "../components/home/about";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <About />
      <Service />
    </div>
  );
};

export default Home;
