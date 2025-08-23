import React, { useEffect, useState } from "react";
import { pengurusDetail } from "../../data";

const TeamSectionMobile = () => {
  const divisi = ["inti", "programming", "siber", "medinfo", "HRD"];
  const divisiTotal = divisi.length;

  const [divisiIndex, setDivisiIndex] = useState(0);
  const [anggotaIndex, setAnggotaIndex] = useState(0);
  const [isDivisiChanging, setIsDivisiChanging] = useState(false);
  const [isAnggotaChanging, setIsAnggotaChanging] = useState(false);

  const dataDivisi = pengurusDetail[divisi[divisiIndex]];
  const anggota = dataDivisi?.anggota ?? [];
  const anggotaTotal = anggota.length;
  const currentAnggota = anggotaTotal > 0 ? anggota[anggotaIndex] : null;

  useEffect(() => {
    if (isDivisiChanging) {
      setAnggotaIndex(0);
      setIsDivisiChanging(false);
    }
  }, [isDivisiChanging]);

  const changeDivisi = (step) => {
    setIsDivisiChanging(true);
    setDivisiIndex((prev) => (prev + step + divisiTotal) % divisiTotal);
    setTimeout(() => {
      setIsDivisiChanging(false);
    }, 300);
  };

  const changeAnggota = (step) => {
    setIsAnggotaChanging(true);
    setAnggotaIndex((prev) => (prev + step + anggotaTotal) % anggotaTotal);
    setTimeout(() => {
      setIsAnggotaChanging(false);
    }, 300);
  };

  return (
    <div className="w-full bg-[#2a2a2a]">
      <div className="flex flex-col items-center py-15 max-w-screen-lg mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col items-center w-full gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => changeDivisi(-1)}
              disabled={isDivisiChanging}
              className="cursor-pointer text-primary p-2 sm:p-3 rounded-full z-20 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <img
              src={dataDivisi.logoDivisi}
              alt={dataDivisi}
              className="w-15 h-15"
            />

            <button
              onClick={() => changeDivisi(1)}
              disabled={isDivisiChanging}
              className="cursor-pointer text-primary p-2 sm:p-3 rounded-full z-20 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <h2 className="text-gray-200 text-center font-black text-2xl capitalize">
            Divisi {divisi[divisiIndex]}
          </h2>
        </div>

        {/* FOTO ANGGOTA SECTION */}
        <div className="flex justify-center items-center my-5">
          <button
            onClick={() => changeAnggota(-1)}
            disabled={isAnggotaChanging}
            className="bg-primary cursor-pointer text-black p-2 sm:p-3 rounded-full z-20 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <svg
              width="18.75"
              height="16.5"
              viewBox="0 0 25 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.58203 10.9238L22.4296 10.9238M2.58203 10.9238L11.0882 2.41769M2.58203 10.9238L11.0882 19.4299"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <div>
            <img src={currentAnggota?.foto} alt={currentAnggota?.nama} />
          </div>

          <button
            onClick={() => changeAnggota(1)}
            disabled={isAnggotaChanging}
            className="bg-primary cursor-pointer text-black p-2 sm:p-3 rounded-full z-20 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <svg
              width="18.75"
              height="16.5"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.8477 10.9238L2.00004 10.9238M21.8477 10.9238L13.3415 2.41769M21.8477 10.9238L13.3415 19.4299"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Detail Divisi Section */}
        <div className="w-full flex flex-col gap-5">
          <div>
            <div className="w-full bg-primary p-2 rounded-t-lg">
              <p className="text-sm font-bold">Deskripsi</p>
            </div>
            <div className="p-2 border-2 border-primary rounded-b-lg">
              <p className="text-sm text-gray-200">{dataDivisi.deskripsi}</p>
            </div>
          </div>

          {dataDivisi.bullet.map((text, i) => (
            <div
              key={i}
              className="flex flex-col justify-center gap-2"
            >
              <h2 className="text-xl text-gray-200 font-bold">{text}</h2>
              <hr className="text-primary border-t-3 rounded"/>
              <p className="text-sm text-gray-200">
                {dataDivisi.bulletDesc[i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSectionMobile;
