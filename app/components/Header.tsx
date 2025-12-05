'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Menubar from './ui/menu';
import { IconoRRSSInstagram, IconoRRSSFacebook, IconoRRSSYoutube, IconoRRSSTiktok, IconoRRSSGoogle, IconoRRSSEmail, IconoRRSSWhatsApp, IconoMenu, IconoAcceso } from './ui/iconos';
import { useTheme } from '../../src/contexts/theme-context';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
        aria-label="Encabezado de Sitio"
        className={`fixed top-0 left-0 right-0 w-full z-2 transition-all duration-300 ${
          isScrolled
            ? 'bg-gradient-to-r from-(--clr4) dark:from-(--clr5) to-(--clr7)/60 dark:to-(--clr4)/60 backdrop-blur-md shadow-xl p-0 m-0'
            : 'bg-transparent m-0 py-2'
        }`}
        >
      <div className="max-w-[1080px] mx-auto flex justify-between">
        <div className="flex justify-start gap-2 flex items-center">
          <div className="flex items-center border-r-2 border-(--clr8) dark:border-(--dclr8) px-2">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-md text-white dark:text-gray-300 hover:text-(--clr8) dark:hover:text-(--clr7) focus:outline-none"
              aria-label="Abrir menú"
            >
              <IconoMenu className="h-6 w-6" />
            </button>
          </div>
          <div className="flex items-center">
            {/* Second: Logo */}
              <a href="/" className="header-logo">
                <img
                  src="/images/logos/logo-nuamana.webp"
                  alt="Logo Guías y Scouts Nua Mana"
                  className="h-16 object-contain"
                  style={{ maxHeight: '60px' }}
                />
              </a>
          </div>
          {/* Second: Letras */}
          <div className="flex flex-col justify-center header-text-box">
            <a href="/">
              <div className="text-[0.7em] text-(--clr2) dark:text-(--dclr2) leading-[1.6em]">Guías y Scouts</div>
              <div className="text-[1.5em] text-(--clr1) dark:text-(--clr7) uppercase leading-[0.8em] font-bold">Nua Mana</div>
              <div className="text-[0.9em] text-(--clr8) dark:text-(--dclr8) leading-none">una nueva aventura</div>
            </a>
          </div>
        </div>
        {/* third: Social */}
        <div className="flex flex-col justify-center hidden lg:flex">
          <div className="flex items-center header-rrss">
            <div className="flex items-center text-(--clr1) dark:text-(--dclr2) text-sm">Síguenos</div>
            <a href="https://www.instagram.com/gruponuamana/" target="_blank" rel="noopener noreferrer" className="text-(--clr1) dark:text-(--dclr2) hover:text-(--clr8) dark:hover:text-(--dclr8) transition-colors">
              <IconoRRSSInstagram className="w-4 h-4" strokeWidth={0.2} />
            </a>
            <a href="https://facebook.com/gruponuamana" target="_blank" rel="noopener noreferrer" className="text-(--clr1) dark:text-(--dclr2) hover:text-(--clr8) dark:hover:text-(--dclr8) transition-colors">
              <IconoRRSSFacebook className="w-4 h-4" strokeWidth={0.2} />
            </a>
            <a href="https://youtube.com/@gruponuamana" target="_blank" rel="noopener noreferrer" className="text-(--clr1) dark:text-(--dclr2) hover:text-(--clr8) dark:hover:text-(--dclr8) transition-colors">
              <IconoRRSSYoutube className="w-4 h-4" strokeWidth={0.2} />
            </a>
            <a href="https://tiktok.com/@gruponuamana" target="_blank" rel="noopener noreferrer" className="text-(--clr1) dark:text-(--dclr2) hover:text-(--clr8) dark:hover:text-(--dclr8) transition-colors">
              <IconoRRSSTiktok className="w-4 h-4" strokeWidth={0.2} />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://www.google.com/search?q=Guias+y+Scouts+Nua+Mana" target="_blank" rel="noopener noreferrer" className="text-(--clr8) dark:text-(--dclr8) hover:text-(--clr1) dark:hover:text-(--dclr2) transition-colors">
              <IconoRRSSGoogle className="w-4 h-4 mr-1" strokeWidth={0.2} />
            </a>
            <a href="mailto:contacto@nuamana.cl" target="_blank" rel="noopener noreferrer" className="text-(--clr8) dark:text-(--dclr8) hover:text-(--clr1) dark:hover:text-(--dclr2) transition-colors">
              <IconoRRSSEmail className="w-4 h-4 mr-1" strokeWidth={0.2} />
            </a>
            <a href="https://wa.me/+56966896001" target="_blank" rel="noopener noreferrer" className="text-(--clr8) dark:text-(--dclr8) hover:text-(--clr1) dark:hover:text-(--dclr2) transition-colors">
              <IconoRRSSWhatsApp className="w-4 h-4 mr-1" strokeWidth={0.2} />
            </a>
            <div className="flex items-center text-sm text-(--clr8) dark:text-(--dclr8)">Contactactanos</div>
          </div>
        </div>
        {/* Fifth: Login */}
        <div className="header-acceder flex items-center hidden lg:flex">
          <div className="flex items-center">
            <a href="/auth/signin" className="bg-transparent text-(--clr8) dark:text-(--dclr8) hover:text-(--clr1) dark:hover:text-(--dclr2) text-base flex items-center">
              <IconoAcceso className="w-4 h-4 mr-1" />
              Acceder
            </a>
          </div>
        </div>
        {/* Fifth: Theme toggle button */}
        <div className="flex items-center mr-4">
          <button
            onClick={toggleTheme}
            className="text-black dark:text-(--clr8) hover:text-(--clr1) dark:hover:text-(--clr1) bg-transparent hover:bg-transparent p-2 rounded-full"
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {theme === 'dark' ? (
              // Sol para modo oscuro
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              // Luna para modo claro
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
        {/* Fifth: Search button */}
        <div className="flex items-center hidden lg:flex">
          <div className="ml-auto">
            <button
              className="text-(--clr1) dark:text-(--clr2) hover:text-(--clr8) dark:hover:text-(--dclr8) bg-transparent hover:bg-transparent"
              onClick={() => router.push('/buscar')}
            >
              <svg className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="w-10"></div> {/* Espaciador para balancear el layout */}
      </div>

      <Menubar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;