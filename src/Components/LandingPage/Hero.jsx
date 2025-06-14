import React from "react";
import {
  arrow,
  barelang,
  bgPoltek,
  ellipse,
  garisVektor,
} from "../../assets/LandingPage";

const Hero = ({ title, subTitle }) => {
  return (
    <div className="relative h-screen bg-cover bg-center flex" style={{ backgroundImage: `url(${bgPoltek})` }}>
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/10 to-white/100 z-0"></div>
    {/* konten */}
      <div className="md:ps-60 ps-6 w-2/3 pt-36 z-10">
        <p className="text-primary mb-1 w-fit text-sm bg-orange-300 px-3 py-0.5 rounded">
          Selamat datang di
        </p>
        <div>
          <h1 className="text-3xl font-bold text-primary">
            {title}
          </h1>
          <img className="w-3/4" src={garisVektor} alt="garis" />
        </div>

        <h2 className="text-sm pb-3 w-3/4 text-black">
          {subTitle}
        </h2>
        <div className="flex items-center cursor-pointer bg-black w-fit text-xs space-x-6 p-1 rounded-2xl text-white justify-between hover:bg-orange-300 hover:text-black transition-all duration-200">
          <p className="ps-3">Telusuri tentang kami!</p>
          <button className="bg-orange-300 hover:border-2 transition-all duration-100 rounded-full">
            <img src={arrow} className="w-7 h-7" alt="arrow" />
          </button>
        </div>
      </div>

      {/* Bagian kanan (gambar ellipse + barelang) */}
      <div
        className="h-screen z-10 bg-cover hidden md:block"
        style={{ backgroundImage: `url(${ellipse})` }}
      >
        <img src={barelang} alt="barelang" />
      </div>
    </div>
  );
};

export default Hero;
