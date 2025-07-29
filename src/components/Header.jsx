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
    <header className="w-full py-3 sticky top-0 z-50 bg-white shadow-[0_4px_12px_-2px_rgba(255,229,103,0.3)]">
      <nav className="lg:max-w-screen-lg mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className='flex-1 flex justify-start'>
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
        <div className="flex-1 flex justify-end text-secondary-dark font-bold group">
          <a href="/osc" className="bg-primary border-4 border-secondary-dark px-4 py-2 rounded-full group-hover:scale-105 transition-all delay-300 text-sm">
            Daftar OSC 2025
          </a>
        </div>
      </nav>
    </header>
  );
};

const NavItems = ({ label, link, isActive }) => {
  return (
    <li className="text-secondary-dark relative group flex justify-center">
      <Link
        to={link}
        className={`${isActive ? 'font-bold' : 'font-normal'}`}
      >
        {label}
      </Link>
      <div className={`absolute -bottom-1 bg-primary transition-all delay-150 h-1 ${isActive ? 'w-1/2' : 'w-0 group-hover:w-1/2'}`} />
    </li>
  );
};

export default Header;
