import React from "react";
import Header from "../components/Header";
import Hero from "../components/LandingPage/Hero";
import VideoSection from "../components/LandingPage/VideoSection";
import TujuanSection from "../components/LandingPage/TujuanSection";
import ProgramUnggulan from "../components/LandingPage/ProgramUnggulan";
import Partnership from "../components/LandingPage/Partnership";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero
        title="BATAM LINUX USER GROUP"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias porro accusamus, quae assumenda sed possimus aspernatur dolorem perspiciatis ipsam ea, nam maiores libero repudiandae sunt pariatur perferendis distinctio quo commodi."
      />
      <VideoSection />
      <Partnership />
      <TujuanSection />
      <ProgramUnggulan />
      <Footer />
    </div>
  );
};

export default LandingPage;
