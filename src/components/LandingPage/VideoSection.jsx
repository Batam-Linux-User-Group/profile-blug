import React from 'react';
import bintang from "../../assets/LandingPage/Hero/bintang1.png";
import Vector from '../../assets/LandingPage/Hero/Vector.png';
const VideoSection = () => {
  return (
    
    <section className="py-12 bg-white">
     
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Video Placeholder */}
          <div className="w-full md:w-[609px]">
          
            <div className="w-[550px] h-[320px] bg-[#333] rounded-xl flex items-center justify-center">
              <div className="w-0 h-0 border-l-[30px] border-l-yellow-400 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent"></div>
            </div>
            
          </div>
           <img src={Vector} alt="Bintang Besar" className="absolute top-32 -left-4 w-40 z-0" />
          {/* Content */}
          <div className="w-full md:flex-1">
            <img src={bintang} alt="Bintang" className="absolute bottom-0 right-4 w-24 z-10 " />
            <span className="inline-block bg-yellow-400 text-black text-sm font-semibold px-2 py-1 mb-2 rounded">
              Siapa Kami?
            </span>
             
            <h2 className="text-3xl font-extrabold text-black mb-4 leading-tight">
              Video Profil BLUG 2025
            </h2>
            <p className="text-gray-600 mb-5 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
           <button className="px-6 py-2 rounded-full font-bold border-2 border-black bg-yellow-300 text-black transition duration-200 hover:bg-black hover:text-yellow-400 hover:shadow-md active:bg-black active:text-yellow-400 active:shadow-inner">
            Kunjungi Kanal
          </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
