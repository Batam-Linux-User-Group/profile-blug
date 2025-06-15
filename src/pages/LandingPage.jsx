import React, { useState } from "react";
import Header from "../Components/Header";
<<<<<<< Updated upstream
import Popup from "../Components/Modal/Popup";
=======
import Hero from "../Components/LandingPage/Hero";
import Team from "../Components/LandingPage/team";
>>>>>>> Stashed changes

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectDivisi, setdivisiSelect] = useState(null);

  return (
    <div className="">
      <Header />
<<<<<<< Updated upstream
      <br /><br />
      <div className="flex justify-center items-center flex-col space-y-5">
        <button 
          className="bg-amber-600 rounded p-2" 
          onClick={() => {setIsOpen(true); setdivisiSelect('programing')}}>
          Divisi Programming
        </button>
        <button className="bg-amber-600 rounded p-2" onClick={() => {setIsOpen(true); setdivisiSelect('siber')}}>Divisi Siber</button>
        <button className="bg-amber-600 rounded p-2" onClick={() => {setIsOpen(true); setdivisiSelect('medinfo')}}>Divisi Medinfo</button>
        <button className="bg-amber-600 rounded p-2" onClick={() => {setIsOpen(true); setdivisiSelect('HRD')}}>Divisi HRD</button>
      </div>

      <Popup isOpen={isOpen} onClose={() => {setIsOpen(false)}} divisiSelect={selectDivisi} />
=======
 

      <Team/>
>>>>>>> Stashed changes
    </div>
  );
};

export default LandingPage;
