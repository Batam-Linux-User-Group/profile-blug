import React from "react";
import {ic_eye, ic_target, background, decorativeImage, visiBackground, misiBackground} from "../../assets/LandingPage/index"

const TujuanSection = () => {
  return (
    <div
      className="min-h-screen h-fit text-white relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${background})`,
        filter: "blur(px)",
      }}
    >
      {/* Overlay untuk menghilangkan blur dari konten utama */}
      <div className="absolute inset-0" style={{ filter: "blur(0px)" }}>
        {/* Background decorative elements dengan blur */}
        <div
          className="absolute bottom-40 right-40 w-45 h-30 opacity-60 bg-cover bg-center"
          style={{
            backgroundImage: `url(${decorativeImage})`,
            filter: "blur(2px)",
          }}
        ></div>

        {/* Main container */}
        <div className="container mx-auto px-6 py-20 relative z-10">
          {/* Header section */}
          <div className="text-center mb-12">
            {/* Yellow tag */}
            <div className="inline-block bg-primary text-gray-800 px-3 py-1 text-xs mb-4 gilroy-regular font-bold">
              Pandangan pada Masa Depan
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gilroy-heavy">
              Tujuan Utama <span className="text-primary">BLUG</span>
            </h1>

            {/* Quote marks and description */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex items-start gap-3">
                <div className="text-primary text-4xl font-bold leading-none">
                  "
                </div>
                <p className="text-gray-200 text-base leading-relaxed pt-2 gilroy-regular">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            {/* Card Template */}
            {[
              {
                title: "Visi Kami",
                icon: <img src={ic_eye} className="w-12 h-12 text-gray-800" />,
                bg: visiBackground,
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
              },
              {
                title: "Misi Kami",
                icon: <img src={ic_target} className="w-12 h-12 text-gray-800" />,
                bg: misiBackground,
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative w-full h-80 overflow-hidden group cursor-pointer rounded-2xl"
              >
                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-700 group-hover:opacity-0" style={{ backgroundColor: "rgba(66, 66, 66, 0.5)" }}>
                  <div className="bg-primary w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="gilroy-heavy text-2xl mb-2 text-white">
                    {item.title}
                  </h3>
                  <div className="w-10 h-1 bg-primary mx-auto"></div>
                </div>

                {/* Hover Content */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(75, 85, 99, 0.85), rgba(75, 85, 99, 0.85)), url(${item.bg})`,
                  }}
                >
                  <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                    <h3 className="text-lg font-bold mb-4 text-white gilroy-heavy">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-200 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="w-10 h-1 bg-primary mx-auto mt-4"></div>
                  </div>
                </div>

                {/* Border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-lg transition-all duration-700"></div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="bg-transparent border-2 border-primary text-primary px-6 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-gray-800 transition-all duration-300 transform hover:scale-105">
              Lihat Lebih Lanjut
            </button>
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-primary rounded-full opacity-60"></div>
        <div className="absolute top-1/3 left-16 w-1 h-1 bg-primary rounded-full opacity-40"></div>
        <div className="absolute bottom-1/3 left-8 w-3 h-3 bg-primary rounded-full opacity-50"></div>
      </div>
    </div>
  );
};

export default TujuanSection;
