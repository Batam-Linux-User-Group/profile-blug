import React from "react";
import Header from "../Components/Header";

const LandingPage = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        {/* Isi Konten Lainnya */}
        <ScrollToTop />
      </main>
    </>
  );
};

const ScrollToTop = () => {
  return (
    <div className="flex justify-center items-center absolute right-10 bottom-10 bg-accent-1 border-4 border-primary-1 rounded-xl size-[4.375rem]">
      <img src="icon/ic_arrow_up.svg" alt="Arrow Up" />
    </div>
  )
}

export default LandingPage;
