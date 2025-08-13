import React, { useState } from "react";
import PopupWithPagination from "../Modal/Popup"; 
import {
  siber,
  programming,
  medin,
  inti,
  poltek,
  lurus,
} from "../../assets/Pengurus";
import siberLogo from "../../assets/Pengurus/team/logo/siber.png";
import programmingLogo from "../../assets/Pengurus/team/logo/Programming.png";
import medinLogo from "../../assets/Pengurus/team/logo/medin.png";
import hrdLogo from "../../assets/Pengurus/team/logo/hrd.png";

const icons = [siberLogo, programmingLogo, medinLogo, hrdLogo];

const divisions = [
  { title: "siber", label: "Divisi Siber", image: siber, icon: icons[0], size: '83%' },
  { title: "programming", label: "Divisi Programming", image: programming, icon: icons[1], size: '86%' },
  { title: "medin", label: "Divisi Medinfo", image: medin, icon: icons[2], size: '70%' },
  { title: "hrd", label: "Divisi HRD", image: inti, icon: icons[3], size: '80%' },
];

const TeamSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDivisi, setSelectedDivisi] = useState(null);

  const handleOpenModal = (divisiKey) => {
    setSelectedDivisi(divisiKey);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDivisi(null);
  };

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-16">
          {divisions.map((div, index) => (
            <div
              key={index}
              onClick={() => handleOpenModal(div.title)}
              className="relative group rounded-3xl max-h-[500px] shadow-xl cursor-pointer bg-transparent"
            >
              {/* Icon bulat kiri atas */}
              <div className="absolute z-30" style={{ top: "-2rem", left: "2rem" }}>
                <div className="w-30 h-30 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110">
                  <img src={div.icon} alt="icon" className="min-w-auto h-min" />
                </div>
              </div>

              {/* Background wrapper agar rounded & zoom */}
              <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden transition-transform duration-500 group-hover:scale-100">
                <img
                  src={poltek}
                  alt="background"
                  className="w-full h-full object-center filter grayscale"
                />
              </div>

              {/* Overlay hitam semi-transparan */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 z-10 rounded-3xl" />

              {/* Blur kuning latar belakang */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute bottom-6 left-6 w-[400px] h-[400px] bg-yellow-400 rounded-full filter blur-[100px] opacity-30 group-hover:opacity-50 transition-all duration-500" />
                <div className="absolute top-6 right-6 w-[400px] h-[400px] bg-yellow-400 rounded-full filter blur-[100px] opacity-30 group-hover:opacity-50 transition-all duration-500" />
              </div>

              {/* Judul divisi & garis */}
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20 text-center transition-transform duration-500 group-hover:scale-105">
                <h3 className="text-white font-black text-4xl">{div.label}</h3>
                <div className="flex justify-center mt-1">
                  <img src={lurus} alt="garis" className="w-28" />
                </div>
              </div>

              {/* Blur tengah bawah */}
              <div className="absolute z-10 w-96 h-96 bg-yellow-400 rounded-full opacity-20 blur-[100px] group-hover:opacity-40 transition-all duration-500 left-1/2 top-[60%] transform -translate-x-1/2 -translate-y-1/2" />

              {/* Gambar konten divisi */}
              <div className="relative z-20 h-full w-full flex items-end justify-center mt-30 px-4">
                <img
                  src={div.image}
                  alt={div.label}
                  className="object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
                  style={{ maxWidth: div.size, maxHeight: div.size }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal PopUp */}
      <PopupWithPagination
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        divisiSelect={selectedDivisi}
      />
    </section>
  );
};

export default TeamSection;
