import React from "react";
import { motion, easeOut } from "motion/react";
import background from "../assets/HubungiPage/background.png"; // Import tetap di sini
import greenLine from "../assets/AltHero/line_green.png"; // Import tetap di sini
import FlipDown from "./Animation/FlipDown";
import ZoomIn from "./Animation/ZoomIn";

const AltHero = ({ label, title, addStyle }) => {
  return (
    <div
      className="w-full bg-cover bg-center py-32 text-center text-black"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <motion.div
        className="bg-yellow-400 bg-opacity-60 inline-block px-4 py-1 text-sm font-bold"
        initial={{ opacity: 0, rotateX: -90 }}
        animate={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.75, ease: easeOut }}
        style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      >
        {label}
      </motion.div>
      <motion.h2 
        className="text-3xl md:text-4xl font-black mt-4"
        initial={{opacity: 0, scale: 0.8}}
        animate={{opacity: 1, scale: 1}}
        transition={{ duration: 0.5, delay: 0.3, ease: easeOut }}
      >
        {title} <br />
        {(() => {
          switch (addStyle) {
            case "tentang":
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
            case "kontak":
              return <div>Hubungi Kami</div>;
          }
        })()}
      </motion.h2>
    </div>
  );
};

export default AltHero;
