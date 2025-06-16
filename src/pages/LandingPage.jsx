import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/LandingPage/Hero";
import VideoSection from "../Components/LandingPage/VideoSection";
import TujuanSection from "../Components/LandingPage/TujuanSection";
import ProgramUnggulan from "../Components/LandingPage/ProgramUnggulan";
import Partnership from "../Components/LandingPage/Partnership";
import Footer from "../Components/Footer";
import ContactSections from "../Components/contact_sections";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero title="BATAM LINUX USER GROUP" subTitle="rumahnya para pecinta Linux berdomisili Batam yang ambisius, doyan teknologi, dan selalu semangat berbagi seputar IT dan pemrograman. Indonesia, Go Open Source!" />
      <VideoSection />
      <Partnership />
      <TujuanSection />
      <ProgramUnggulan />
      <ContactSections />
      <Footer />
    </div>

  );
};

export default LandingPage;