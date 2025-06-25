import React from "react";
import Sejarah from "../Components/Tentang/Sejarah";
import VisiMisiBlug from "../components/LandingPage/VisiMisiBlug";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Tentang = () => {
  return (
    <div>
      <Header />
      <Sejarah />
      <VisiMisiBlug />
      <Footer />
    </div>
  );
};

export default Tentang;
