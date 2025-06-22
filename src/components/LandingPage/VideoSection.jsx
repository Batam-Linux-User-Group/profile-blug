import React from 'react';
import { longArrow1, longArrow2, bgStar } from '../../assets/LandingPage';

const VideoSection = () => {
  const goToYoutube = () => {
    window.open("https://www.youtube.com/@batamlinux9734", "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative pt-50 pb-100 bg-white bg-no-repeat"style={{ backgroundImage: `url(${bgStar})` }}>
      <div className="lg:max-w-screen-lg mx-auto">
        <div className="flex relative flex-col md:flex-row items-center gap-8">
          <img src={longArrow1} alt="arrow" className='absolute w-3/4.5 -top-125 ps-3.5' data-aos="fade-up" data-aos-delay="1500"/>
          <img src={longArrow2} alt="arrow-2" className='absolute -bottom-100' data-aos="fade-up" data-aos-delay="700"/>
          {/* Video Placeholder */}
          <div className="w-full md:flex-1 flex justify-center" data-aos="zoom-in" data-aos-delay="200">
            <div className="w-full max-w-[550px] h-[320px] bg-[#333] rounded-xl flex items-center justify-center">
              <div className="w-0 h-0 border-l-[30px] border-l-primary border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:flex-1 flex justify-center md:justify-start">
            <div className="w-full max-w-[550px]">
              <span className="inline-block bg-primary text-gray-800 text-sm font-bold px-2 py-1 mb-2" data-aos="fade-left" data-aos-delay="200">
                Siapa Kami?
              </span>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-4 leading-tight" data-aos="fade-right" data-aos-delay="400">
                Video Profil BLUG 2025
              </h2>
              <p className="text-gray-600 mb-5 text-justify" data-aos="fade-up" data-aos-delay="400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div data-aos="zoom-in" data-aos-delay="400">
                <button onClick={goToYoutube} className="px-6 py-2 rounded-full font-bold border-4 border-gray-800 bg-primary text-gray-800 transition duration-200 hover:bg-gray-800 hover:text-primary hover:border-primary shadow-md active:bg-gray-800 active:text-primary active:shadow-inner cursor-pointer">
                  Kunjungi Kanal
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoSection;
