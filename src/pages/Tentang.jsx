import React from "react";
import AltHero from "../Components/AltHero"
import Sejarah from "../Components/Tentang/Sejarah";
import VisiMisiBlug from "../Components/Tentang/VisiMisiBlug";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Tentang = () => {
  return (
    <div>
      <Header />
      <AltHero label="Slogan BLUG" title="Indonesia" addStyle="tentang"/>
      <Sejarah />
      <VisiMisiBlug />
      <Footer />
    </div>
  );
};

export default Tentang;
