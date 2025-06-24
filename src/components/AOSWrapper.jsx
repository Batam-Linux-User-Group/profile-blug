import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Aos from 'aos';
import "aos/dist/aos.css";

const AOSWrapper = () => {
  const location = useLocation();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });

    setTimeout(() => {
      Aos.refresh();
    }, 100);
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      Aos.refresh();
    });
  }, [location.pathname])

  return <Outlet />
}

export default AOSWrapper