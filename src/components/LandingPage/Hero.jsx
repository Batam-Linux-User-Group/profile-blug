import React from "react";
import {
  arrow,
  arrowYellow,
  garisVektor,
} from "../../assets/LandingPage";
import { useNavigate } from "react-router-dom";

const Hero = ({ title, subTitle }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/tentang');
  }

  return (
    <>
    <div className="relative bg-cover bg-center flex h-187 overflow-x-hidden" style={{ backgroundImage: `url(/images/bgPoltek.webp)` }}>
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/10 to-white/100 z-0">
      </div>
      {/* konten */}
      <div className="lg:max-w-screen-lg mx-auto w-full z-10">
        <div className="pt-36">
          <p className="text-gray-800 mb-1 w-fit text-lg font-bold bg-primary px-3 py-0.5 rounded" data-aos="fade-down" data-aos-delay="200">
            Selamat datang di
          </p>
          <div className="w-112">
            <h1 className="text-4xl font-black text-gray-800" data-aos="fade-up" data-aos-delay="400">
              BATAM LINUX USER GROUP
            </h1>
            <img className="" src={garisVektor} alt="garis" data-aos="zoom-in" data-aos-delay="600"/>
            <h2 className="text-sm pb-3 text-gray-800 text-justify" data-aos="fade-right" data-aos-delay="800">
              {subTitle}
            </h2>
          </div>

          <div data-aos="zoom-in" data-aos-delay="1000">
            <button onClick={handleClick} className="flex mt-4 items-center cursor-pointer bg-gray-800 pe-0.5 w-60 text-sm group space-x-6 rounded-full text-gray-200 justify-between hover:w-112 hover:bg-primary hover:text-gray-800 transition-all duration-600 ease-out">
            <p className="ps-6 font-bold py-3.5 transition-all duration-500">Telusuri tentang kami!</p>
            <div className="bg-primary group-hover:bg-gray-800 p-3 transition-all duration-500 rounded-full">
              <img src={arrow} className="w-4.5 h-4.5 transform group-hover:text-primary from-purple-400 group-hover:h-0 group-hover:w-0 group-hover:opacity-0" alt="arrow" />
              <img src={arrowYellow} className="w-0 h-0 opacity-0 transform group-hover:text-primary from-purple-400 group-hover:h-4.5 group-hover:w-4.5 group-hover:opacity-100" alt="arrow" />
            </div>
          </button>
          </div>
        </div>
      </div>

      <div className="w-[45%] z-0 absolute right-0 bg-cover hidden md:block" style={{ backgroundImage: `url(/images/ellipse.webp)` }} data-aos="fade-left" data-aos-delay="800">
        <img src="/images/barelang.webp" alt="barelang" />
      </div>

      {/* Bagian kanan (gambar ellipse + barelang) */}
    </div>
    </>
  );
};

export default Hero;
