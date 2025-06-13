import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { label: 'Beranda', link: '/' },
    { label: 'Tentang', link: '/tentang' },
    { label: 'Pengurus', link: '/pengurus' },
    { label: 'Artikel', link: '/artikel' },
    { label: 'Kontak', link: '/kontak' },
  ];

  return (
    <header className="h-[6.25rem]">
      <nav className="size-full flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className='flex-1 flex justify-center'>
          <img src="nav-logo.svg" alt="Logo BLUG" />
        </div>
        {/* Nav Items */}
        <ul className="flex-2 flex justify-center items-center gap-10">
          {
            navItems.map((item, index) => (
              <NavItems
                key={index}
                label={item.label}
                link={item.link}
                isActive={isActive(item.link)}
              />
            ))
          }
        </ul>
        {/* OSC Regist Button */}
        <div className="flex-1 flex justify-center text-primary-1 font-semibold group">
          <Link to="/osc" className="bg-accent-1 border-4 border-primary-1 px-4 py-2 rounded-full group-hover:scale-105 transition-all delay-300">
            Daftar OSC 2025
          </Link>
        </div>
      </nav>
    </header>
  );
};

const NavItems = ({ label, link, isActive }) => {
  return (
    <li className="text-primary-1 relative group flex justify-center">
      <Link
        to={link}
        className={`${isActive ? 'font-bold' : 'font-normal'}`}
      >
        {label}
      </Link>
      <div className={`absolute -bottom-1 bg-accent-1 transition-all delay-150 h-1 ${isActive ? 'w-1/2' : 'w-0 group-hover:w-1/2'}`} />
    </li>
  );
};

export default Header;
