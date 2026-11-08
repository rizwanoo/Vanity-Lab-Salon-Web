import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryBookingContactPage } from './pages/GalleryBookingContactPage';
import { BUSINESS_INFO } from './data/salonData';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  // Sync window URL hash for direct bookmarking/back-button support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageType;
      if (['home', 'services', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageType, serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBF8] text-[#1E1926] selection:bg-[#FF4D6D] selection:text-white relative">
      {/* Top Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            selectedServicePreload={selectedService}
          />
        )}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && (
          <GalleryBookingContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Discreet Mobile Quick Action Bar (Respects 15% mobile sticky cap, zero popups) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FFFBF8]/95 backdrop-blur-md border-t border-[#FFB396]/40 px-4 py-2.5 flex items-center justify-between gap-3 shadow-lg">
        <a
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          className="flex-1 py-2 bg-[#FFF2EC] text-[#1E1926] text-xs font-bold uppercase tracking-wider rounded-sm flex items-center justify-center gap-1.5 border border-[#FFB396]/30"
        >
          <Phone className="w-3.5 h-3.5 text-[#FF4D6D]" />
          <span>Call</span>
        </a>
        <a
          href={BUSINESS_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-sm flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
        <button
          onClick={() => handleNavigate('contact')}
          className="flex-1 py-2 bg-[#FF4D6D] text-white text-xs font-bold uppercase tracking-wider rounded-sm flex items-center justify-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book</span>
        </button>
      </div>
    </div>
  );
}
