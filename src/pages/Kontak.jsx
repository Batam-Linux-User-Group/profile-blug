import React from 'react'
import AltHero from "../Components/AltHero"
import HubungiKami from '../Components/Kontak/HubungiKami'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const Kontak = () => {
  return (
    <>
      <Header />
      <AltHero label="Tertarik?" title="Silahkan" addStyle="kontak"/>
      <HubungiKami />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Kontak