import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const StartAtTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);

  return <Outlet />;
}

export default StartAtTop