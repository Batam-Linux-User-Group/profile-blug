import React, { useState } from "react";
import {ic_eye, ic_target, background, decorativeImage, visiBackground, misiBackground} from "../../assets/LandingPage/index"

const TujuanSection = () => {
  return (
    <div
      className="text-white relative bg-cover bg-center bg-no-repeat py-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${background})`,
        filter: "blur(px)",
      }}
    >
      {/* Overlay untuk menghilangkan blur dari konten utama */}
      <div className="inset-0" style={{ filter: "blur(0px)" }}>
        {/* Background decorative elements dengan blur */}
        <div
          className="absolute bottom-40 right-40 w-45 h-30 opacity-60 bg-cover bg-center"
          style={{
            backgroundImage: `url(${decorativeImage})`,
            filter: "blur(2px)",
          }}
        ></div>

        {/* Main container */}
        <div className="lg:max-w-screen-lg mx-auto py-20 relative z-10">
          {/* Header section */}
          <div className="text-center mb-12">
            {/* Yellow tag */}
            <div className="inline-block bg-primary text-gray-800 px-3 py-1 text-xs mb-4 font-bold">
              Pandangan pada Masa Depan
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              Tujuan Utama <span className="text-primary">BLUG</span>
            </h1>

            {/* Quote marks and description */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex items-start gap-3">
                <div
                  className="absolute top-48 left-16 w-22 h-16 bg-cover bg-center rotate-180"
                  style={{
                    backgroundImage: `url(${decorativeImage})`,
                  }}
                ></div>
                <p className="text-gray-200 text-base leading-relaxed pt-2">
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
                desc: "Menjadikan BLUG sebagai organisasi yang memprioritaskan kepedulian terhadap setiap anggota,membatu mereka berkembang dalam hardskill & softskill, serta memberikan kontribusi yang bermakna bagi masyarakat luas",
              },
              {
                title: "Misi Kami",
                icon: <img src={ic_target} className="w-12 h-12 text-gray-800" />,
                bg: misiBackground,
                desc: `Melibatkan semua anggota dalam kolaborasi setiap kegiatan BLUG, aktif dalam pengembangan mutu anggota, dan memberikan kontribusi yang bermanfaat bagi masyarakat luas, terutaman di kalangan mahasiswa Polibatam `,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col relative w-full h-80 bg-[#3e3e3e] overflow-hidden group rounded-2xl border-4 border-transparent hover:border-primary transition-colors duration-700 justify-center items-center"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(${item.bg})`
                  }}
                />
                <p className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-gray-200 w-3/4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      {item.desc}
                    </p>
                {/* Overlay */}
                  <div className="bg-primary w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                    <h3 className="transition-transform duration-700 transform group-hover:-translate-y-25 font-black text-2xl mb-2 text-white">
                    {item.title}
                    </h3>
                  <div className="w-10 h-1 bg-primary mx-auto z-1 rounded"></div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="bg-transparent border-3 border-primary text-primary  px-6 py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-gray-800 hover:border-3 hover:shadow-md hover:shadow-primary hover:border-secondary-dark transition-all duration-300 cursor-pointer">
              Lihat Lebih Lanjut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TujuanSection;
