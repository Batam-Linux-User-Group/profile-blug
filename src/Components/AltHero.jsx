import React from "react";
import background from "../assets/HubungiPage/background.png"; // Import tetap di sini

const Hero = ({ label, title }) => {
  return (
    <div
      className="w-full bg-cover bg-center py-32 text-center text-black"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-yellow-400 bg-opacity-60 inline-block px-4 py-1 text-sm font-semibold rounded-md">
        {label}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mt-4">
        {title}
      </h2>
    </div>
  );
};

export default Hero;
