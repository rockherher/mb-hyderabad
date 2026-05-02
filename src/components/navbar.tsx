import { useState, type MouseEvent } from 'react';

import MBLogoT from '../assets/Logos/mb-logo-transparent.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'SERVICES', href: '#services' },
    { label: 'BOOK NOW', href: '#book-now' },
    { label: 'FAQS', href: '#faqs' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleScroll = (
    e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    id: string,
  ): void => {
    e.preventDefault();
    const el = document.querySelector<HTMLElement>(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-black text-white w-full sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-20 px-5 md:px-10">
        <div className="shrink-0 flex items-center h-full py-2">
          <img
            src={MBLogoT}
            alt="Mercedes-Benz Logo"
            className="h-full w-auto object-contain"
          />
        </div>

        <ul className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-[13px] font-medium tracking-[0.15em] hover:text-gray-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black">
          <ul className="flex flex-col items-center gap-6 py-6 pb-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-sm tracking-widest hover:text-gray-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
