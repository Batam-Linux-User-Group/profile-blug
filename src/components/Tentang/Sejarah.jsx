import React from "react";
import { poltek } from "../../assets/Tentang";

const Sejarah = () => {
  return (
    <section className="bg-[#2A2A2A] text-white py-16 px-4 md:px-8 font-gilroy">
      <div className="max-w-5xl mx-auto flex flex-col gap-8 items-center">
        {/* Gambar */}
        <div className="relative rounded-[30px] overflow-hidden w-full max-w-5xl">
          <img
            src={poltek}
            alt="Poltek"
            className="w-full h-auto object-cove"
          />
          <div className="absolute inset-0 bg-primary opacity-50" />
        </div>

        {/* Konten */}
        <div className="text-left w-full max-w-5xl">
          {/* Label */}
          <p className="text-sm font-semibold text-black bg-primary inline-block px-6 py-1 rounded-full mb-2" data-aos="flip-up">
            Penasaran ga sih?
          </p>
          <br />
          {/* Judul */}
          <h2 className="text-3xl md:text-4xl font-gilroy font-extrabold mb-8 inline-block border-b-[5px] border-primary pb-1" data-aos="fade-right">
            Sejarah terbentuknya Batam Linux User Group
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Paragraf Kiri */}
            <div className="md:w-[50%]">
              <p className="text-tertiary leading-relaxed text-justify" data-aos="fade-left" data-aos-delay="300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,{" "}
                <span className="font-bold text-white">
                  quis nostrud exercitation ullamco
                </span>{" "}
                laboris nisi ut aliquip ex ea{" "}
                <span className="italic">commodo consequat</span>. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
            </div>

            {/* Garis Vertikal PEMISAH (abu tipis) */}
            <div className="hidden md:block w-px bg-gray-300  self-stretch" />

            {/* Quote + List */}
            <div className="md:w-[45%] flex flex-col gap-6" data-aos="fade-right" data-aos-delay="500">
              {/* Quote Card */}
              <div className="bg-primary text-black font-black  text-2xl rounded-xl py-8 px-10 shadow-xl font-gilroyHeavy text-center">
                “Lorem Ipsum Dolor sit amet”
              </div>

              {/* Bullet List */}
              <div className="flex gap-2">
                {/* Garis kuning + titik */}
                <div className="relative flex flex-col items-center">
                  <div className="w-[2px] bg-primary h-full" />
                  <div className="w-3 h-3 bg-primary rounded-full absolute top-3 -translate-y-1/2" />
                  <div className="w-3 h-3 bg-primary rounded-full absolute bottom-3 translate-y-1/2" />
                </div>

                <ul className="text-white space-y-2 pl-1">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sejarah;
