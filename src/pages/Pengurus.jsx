import React from 'react';
import Header from '../components/Header';
import AltHero from '../Components/AltHero';
import TeamSection from '../components/Pengurus/TeamSection';
import Footer from '../components/Footer';

const Pengurus = () => {
  return (
    <div>
      <Header />
      <AltHero label="Temui Tim Kami" title="Badan Pengurus Harian" addStyle="pengurus"/>
      <TeamSection />
      <Footer />
    </div>
  )
}

export default Pengurus