import React from "react";
import Header from "../Components/Header";
import HubungiKami from "../Components/HubungiKami";
import Hero from "../Components/hero";

const LandingPage = () => {
  return (
    <div>
      <Header />
      
      <Hero label={"Tertarik?"} title={"Silahkan Hubungi Kami"} />
    </div>
  );
};

export default LandingPage;
