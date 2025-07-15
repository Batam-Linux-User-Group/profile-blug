import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Aos from 'aos';
import "aos/dist/aos.css";
import StartAtTop from './StartAtTop';

const AOSWrapper = () => {
  const location = useLocation();

  useEffect(() => {
    const handleLoad = () => {
     Aos.init({
      duration: 1000,
      once: true,
    });

    setTimeout(() => {
      Aos.refresh();
    }, 200); 
    };

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      Aos.refresh();
    });
  }, [location.pathname])

  return(
    <>
      <StartAtTop />
      <Outlet />
    </>
  ) 
}

export default AOSWrapper