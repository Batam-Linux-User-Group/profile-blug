import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    { label: 'Beranda', link: '/' },
    { label: 'Tentang', link: '/tentang' },
    { label: 'Pengurus', link: '/pengurus' },
    { label: 'Artikel', link: '/artikel' },
    { label: 'Kontak', link: '/kontak' },
  ]
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
            navItems.map((items, index) => (
              <NavItems
                key={index}
                label={items.label}
                link={items.link}
              />
            ))
          }
        </ul>
        {/* OSC Regist Button */}
        <div className="flex-1 flex justify-center">
          <Link>
            Daftar OSC 2025
          </Link>
        </div>
      </nav>
    </header>
  )
};

const NavItems = ({ label, link }) => {
  return (
    <li className="text-black relative group flex justify-center">
      <Link to={link}>{label}</Link>
      <div className="absolute -bottom-1 bg-amber-300 w-0 group-hover:w-1/2 h-1 transition-all delay-150" />
    </li>
  );
}

export default Header;
