import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { BUSINESS_INFO } from '../data/salonData';
import { Menu, X, Phone, Calendar } from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'About & Team', page: 'about' },
    { label: 'Gallery & Booking', page: 'contact' },
  ];

  const isHeroTransparent = currentPage === 'home' && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHeroTransparent
          ? 'bg-transparent text-white pt-4 pb-4'
          : 'bg-[#FFFBF8]/95 backdrop-blur-md text-[#1E1926] shadow-sm border-b border-[#FFB396]/25 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-14">
          {/* Zone 1: Brand Wordmark & Actual Logo */}
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
            aria-label="Vanity Lab Salon & Spa Home"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#FF4D6D] bg-white p-0.5 shadow-sm transition-transform duration-300 group-hover:scale-105 shrink-0">
              <img
                src="/logo.png"
                alt="Vanity Lab Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-display text-lg font-bold tracking-wider uppercase leading-none ${
                  isHeroTransparent ? 'text-white' : 'text-[#1E1926]'
                }`}
              >
                Vanity Lab
              </span>
              <span
                className={`text-[10px] tracking-[0.2em] uppercase font-medium ${
                  isHeroTransparent ? 'text-white/80' : 'text-[#FF4D6D]'
                }`}
              >
                Salon & Spa · Bahrain
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (single-line, clean unboxed typography) */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const active = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => onNavigate(item.page)}
                  className={`relative text-sm font-semibold tracking-wide transition-colors whitespace-nowrap cursor-pointer py-1 ${
                    isHeroTransparent
                      ? active
                        ? 'text-[#FFB396]'
                        : 'text-white/90 hover:text-white'
                      : active
                      ? 'text-[#FF4D6D]'
                      : 'text-[#1E1926]/80 hover:text-[#FF4D6D]'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                        isHeroTransparent ? 'bg-[#FFB396]' : 'bg-[#FF4D6D]'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Quick Connect */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className={`flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-md transition-colors ${
                isHeroTransparent
                  ? 'text-white/90 hover:text-white bg-white/10'
                  : 'text-[#1E1926] hover:text-[#FF4D6D] bg-[#FFF2EC]'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#FF4D6D]" />
              <span className="whitespace-nowrap">{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-white bg-[#FF4D6D] hover:bg-[#E23354] transition-all duration-200 rounded-sm shadow-md hover:shadow-lg active:scale-95 cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#FF4D6D] rounded-sm uppercase tracking-wider"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                isHeroTransparent ? 'text-white' : 'text-[#1E1926]'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (No popup, cleanly expanded within header) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFBF8] border-b border-[#FFB396]/30 px-6 pt-4 pb-6 space-y-4 shadow-xl text-[#1E1926]">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const active = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-base font-bold py-2 border-b border-neutral-100 flex items-center justify-between ${
                    active ? 'text-[#FF4D6D]' : 'text-[#1E1926]'
                  }`}
                >
                  <span>{item.label}</span>
                  {active && <span className="text-xs text-[#FF4D6D]">● Active</span>}
                </button>
              );
            })}
          </nav>
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#FFF2EC] text-[#1E1926] rounded-sm"
            >
              <Phone className="w-4 h-4 text-[#FF4D6D]" />
              <span>Call +973 1700 3769</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#25D366] text-white rounded-sm"
            >
              <span>WhatsApp Us (+973 3215 5410)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
