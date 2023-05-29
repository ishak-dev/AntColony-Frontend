import React from "react";
import Navbar from "../components/home/navbar";
import HomeSection from "../components/home/homeSection";
import Service from "../components/home/service";
import About from "../components/home/about";

/*
Landing page that consist from several components each of them have id that is declared inside of the component,
navbar is used to scroll through those components
*/
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
