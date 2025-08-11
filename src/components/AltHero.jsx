import React from 'react';
import background from '../assets/HubungiPage/background.png'; // Import tetap di sini
import greenLine from '../assets/AltHero/line_green.png'; // Import tetap di sini
import FlipDown from './Animation/FlipDown';
import ZoomIn from './Animation/ZoomIn';

const AltHero = ({ label, title, addStyle }) => {
  return (
    <div
      className="w-full bg-cover bg-center py-32 text-center text-black"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <FlipDown>
        <div className="bg-yellow-400 bg-opacity-60 inline-block px-4 py-1 text-sm font-bold">
          {label}
        </div>
      </FlipDown>
      <ZoomIn delay={0.3}>
        <h2 className="text-3xl md:text-4xl font-black mt-4">
          {title} <br />
          {(() => {
            switch (addStyle) {
              case 'tentang':
                return (
                  <div className="flex flex-col">
                    <h2>
                      Go <span className="text-accent-2">OPEN-SOURCE!</span>
                    </h2>
                    <img
                      src={greenLine}
                      alt="Green Line"
                      className=" relative w-60 self-center left-5"
                    />
                  </div>
                );
              case 'kontak':
                return <div>Hubungi Kami</div>;
            }
          })()}
        </h2>
      </ZoomIn>
    </div>
  );
};

export default AltHero;
