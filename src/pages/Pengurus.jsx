import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import AltHero from '../Components/AltHero';
import TeamSection from '../components/Pengurus/TeamSection';
import Footer from '../components/Footer';
import IntiDivision from '../components/Pengurus/IntiDivision';
import TeamSectionMobile from '../components/Pengurus/TeamSectionMobile';

const Pengurus = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
    useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* <Header /> */}
      <AltHero label="Temui Tim Kami" title="Badan Pengurus Harian" addStyle="pengurus"/>

      {isLargeScreen ? (
        <>
          <IntiDivision />
          <TeamSection />
        </>
      ) : (<TeamSectionMobile />)}
      <Footer />
    </div>
  )
}

export default Pengurus