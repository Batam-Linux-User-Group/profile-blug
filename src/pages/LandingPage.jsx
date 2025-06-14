import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/LandingPage/Hero";
import VideoSection from "../Components/LandingPage/VideoSection";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero title="BATAM LINUX USER GROUP" subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias porro accusamus, quae assumenda sed possimus aspernatur dolorem perspiciatis ipsam ea, nam maiores libero repudiandae sunt pariatur perferendis distinctio quo commodi."/>
      <VideoSection />
    </div>
  );
};

export default LandingPage;
