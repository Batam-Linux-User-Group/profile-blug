import React from "react";
import {
  Bintang,
  BintangBesar,
  ArrowVisiMisi,
  FotoBlug,
  Lingkaran,
  Next,
} from "../../assets/LandingPage/index";

const VisiMisiBlug = () => {
  return (
    <div className="bg-white relative min-h-screen flex items-center justify-center overflow-x-hidden">
      {/* Background Decorations */}
      <div
        className="absolute top-132 left-32 w-48 h-48 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${BintangBesar})` }}
      />
      <div
        className="absolute top-24 right-24 w-36 h-36 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${Bintang})` }}
      />

      <section className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-4">
          {/* Left Column - Image & Year Badge */}
          <div className="relative w-full md:w-1/2 flex items-center justify-center">
            <img
              src={FotoBlug}
              alt="Foto BLUG"
              className="rounded-2xl w-full max-w-md shadow-lg z-10"
            />
            <div className="absolute -top-2 -left-4 w-52 z-20">
              <div
                className="w-full h-52 bg-cover bg-center relative z-20"
                style={{ backgroundImage: `url(${Lingkaran})` }}
              />
              <div className="absolute top-18 left-6 w-40 text-center z-30">
                <h2 className="text-yellow-500 font-bold text-4xl">2025</h2>
                <p className="text-sm font-semibold">BPH BLUG</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visi & Misi */}
          <div className="w-full md:w-1/2 relative z-10 flex items-center">
            <div className="max-w-xl">
              <div
                className="absolute -right-12 top-48 w-24 h-48"
                style={{ backgroundImage: `url(${ArrowVisiMisi})` }}
              />

              <span className="inline-block bg-yellow-300 text-xs font-bold px-3 py-1 mb-2 rounded">
                Siapa Kami?
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Visi BLUG
              </h2>
              <p className="text-gray-700 mb-6 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                Misi BLUG
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[...Array(4)].map((_, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <img
                      src={Next}
                      alt="Next Icon"
                      className="w-10 h-10 mt-1"
                    />
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisiMisiBlug;
