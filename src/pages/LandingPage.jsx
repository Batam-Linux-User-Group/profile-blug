import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/AltHero";

const LandingPage = () => {
  return (
    <div>
      <Header />
      
      <Hero label={"Tertarik?"} title={"Silahkan Hubungi Kami"} />
    </div>
  );
};

export default LandingPage;
