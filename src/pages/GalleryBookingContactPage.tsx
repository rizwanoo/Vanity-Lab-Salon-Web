import React, { useState } from 'react';
import { PageType, GalleryItem } from '../types';
import { BUSINESS_INFO, GALLERY_ITEMS } from '../data/salonData';
import { AppointmentForm } from '../components/AppointmentForm';
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Instagram,
  Facebook,
  ExternalLink,
  Sparkles,
  CreditCard,
  Navigation,
} from 'lucide-react';

interface GalleryBookingContactPageProps {
  onNavigate: (page: PageType) => void;
}

export const GalleryBookingContactPage: React.FC<GalleryBookingContactPageProps> = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const galleryFilters = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'hair', label: 'Hair Transformations' },
    { id: 'nails', label: 'Nail Couture' },
    { id: 'skin', label: 'Skin & Facials' },
    { id: 'salon', label: 'Salon Interior' },
  ];

  const filteredGallery =
    filterCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filterCategory);

  return (
    <div className="w-full pt-20">
      {/* Editorial Header */}
      <section className="bg-gradient-to-r from-[#FFF2EC] via-[#FFE6DC] to-[#FFFBF8] py-20 border-b border-[#FFB396]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-[#FF4D6D] block mb-3">
            Portfolio, Booking & Concierge · Adliya
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-[#1E1926] uppercase tracking-tight max-w-4xl leading-[1.05]">
            GALLERY, RESERVATIONS <br />
            <span className="text-[#FF4D6D]">& SALON LOCATION.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#6B6275] max-w-2xl font-light">
            Explore authentic portfolio imagery from Vanity Lab Bahrain, submit your appointment request with zero popups, or navigate directly to our Adliya location.
          </p>
        </div>
      </section>

      {/* 01. EDITORIAL GALLERY SECTION */}
      <section className="py-20 bg-[#FFFBF8] border-b border-[#FFB396]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Header & Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#FF4D6D] font-extrabold block mb-2">
                Curated Showcase
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-[#1E1926] uppercase tracking-tight">
                Authentic Vanity Lab Artistry
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {galleryFilters.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilterCategory(tab.id)}
                  className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap border cursor-pointer ${
                    filterCategory === tab.id
                      ? 'bg-[#FF4D6D] text-white border-[#FF4D6D]'
                      : 'bg-white text-[#1E1926] border-[#FFB396]/30 hover:border-[#FF4D6D]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Asymmetrical Gallery Grid (No repetitive cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, index) => {
              const isMarquee = index === 0 || index === 4;
              return (
                <div
                  key={item.id}
                  className={`group relative overflow-hidden bg-neutral-100 border border-[#FFB396]/40 transition-all duration-300 hover:shadow-lg ${
                    isMarquee ? 'lg:col-span-2' : 'col-span-1'
                  }`}
                >
                  <div
                    className={`relative w-full ${
                      isMarquee ? 'h-[360px] sm:h-[420px]' : 'h-[320px] sm:h-[380px]'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1926]/90 via-[#1E1926]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFB396] block mb-1">
                      {item.categoryLabel}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold">{item.title}</h3>
                    <p className="text-xs text-white/80 mt-1 max-w-lg">{item.caption}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <a
              href={BUSINESS_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#FFB396]/50 text-xs uppercase font-extrabold tracking-wider text-[#1E1926] hover:bg-[#FF4D6D] hover:text-white hover:border-[#FF4D6D] transition-colors duration-200"
            >
              <Instagram className="w-4 h-4" />
              <span>Explore 1,000+ Posts on Instagram @vanitylab_bh</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 02. INLINE APPOINTMENT BOOKING SECTION (Strict Zero Popup Rule) */}
      <section className="py-24 bg-[#FFF2EC]/50 border-b border-[#FFB396]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentForm />
        </div>
      </section>

      {/* 03. CONTACT & LOCATION HUB */}
      <section className="py-24 bg-[#FFFBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF4D6D] font-extrabold block mb-2">
              Salon Concierge
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1926] uppercase tracking-tight">
              Visit Vanity Lab in Adliya
            </h2>
            <p className="mt-3 text-sm text-[#6B6275]">
              Conveniently located on Road 2717 in Block 327, Adliya, Manama, Bahrain. Walk-ins are welcome subject to stylist availability; appointments are highly recommended.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Telephone & WhatsApp Cards */}
              <div className="bg-white border border-[#FFB396]/40 p-6 space-y-4 shadow-sm">
                <span className="text-xs uppercase tracking-wider text-[#FF4D6D] font-bold block">
                  Direct Communications
                </span>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#FFF2EC] text-[#FF4D6D] rounded-sm flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#6B6275] block font-medium">
                      Landline / Reception
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneClean}`}
                      className="font-display text-lg font-bold text-[#1E1926] hover:text-[#FF4D6D] transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-neutral-100">
                  <div className="w-10 h-10 bg-[#25D366]/10 text-[#25D366] rounded-sm flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#6B6275] block font-medium">
                      WhatsApp Instant Desk
                    </span>
                    <a
                      href={BUSINESS_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-lg font-bold text-[#1E1926] hover:text-[#25D366] transition-colors"
                    >
                      {BUSINESS_INFO.whatsapp}
                    </a>
                  </div>
                </div>
              </div>

              {/* Exact Address Card */}
              <div className="bg-white border border-[#FFB396]/40 p-6 space-y-3 shadow-sm">
                <span className="text-xs uppercase tracking-wider text-[#FF4D6D] font-bold block">
                  Salon Address & Landmark
                </span>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF4D6D] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#1E1926] space-y-1">
                    <p className="font-bold text-sm">{BUSINESS_INFO.name}</p>
                    <p>{BUSINESS_INFO.address.building}, {BUSINESS_INFO.address.street}</p>
                    <p>{BUSINESS_INFO.address.block}, {BUSINESS_INFO.address.city}, Bahrain</p>
                    <p className="text-[#FF4D6D] font-semibold pt-1">
                      Landmark: {BUSINESS_INFO.address.landmark}
                    </p>
                  </div>
                </div>

                <div className="pt-3 flex gap-3">
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 bg-[#FF4D6D] hover:bg-[#E23354] text-white text-xs uppercase font-extrabold tracking-wider transition-colors text-center rounded-sm flex items-center justify-center gap-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="px-4 py-2.5 bg-[#FFF2EC] hover:bg-[#FFE6DC] text-[#1E1926] text-xs uppercase font-bold tracking-wider rounded-sm text-center"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              {/* Opening Hours & BenefitPay */}
              <div className="bg-white border border-[#FFB396]/40 p-6 space-y-3 shadow-sm text-xs">
                <div className="flex items-center gap-2 text-[#FF4D6D] font-bold uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Verified Operating Hours</span>
                </div>
                <div className="space-y-1.5 text-[#1E1926] pt-1">
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="font-medium text-[#6B6275]">Sunday – Wednesday</span>
                    <span className="font-bold">10:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="font-medium text-[#6B6275]">Thursday – Saturday</span>
                    <span className="font-bold">10:00 AM – 10:00 PM</span>
                  </div>
                </div>

                <div className="pt-3 flex items-center gap-2 text-[11px] text-[#6B6275]">
                  <CreditCard className="w-4 h-4 text-[#FF4D6D]" />
                  <span>BenefitPay, Major Credit Cards & Cash Accepted</span>
                </div>
              </div>
            </div>

            {/* Embedded Verified Location Map */}
            <div className="lg:col-span-7 bg-white border border-[#FFB396]/40 shadow-sm overflow-hidden">
              <div className="p-4 bg-[#FFF2EC] border-b border-[#FFB396]/30 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1E1926]">
                  <MapPin className="w-4 h-4 text-[#FF4D6D]" />
                  <span>Adliya Block 327 Coordinates: 26.215715, 50.588498</span>
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#FF4D6D] hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map embed targeting exact coordinates 26.215715, 50.588498 in Adliya */}
              <div className="relative w-full h-[450px] bg-neutral-200">
                <iframe
                  title="Vanity Lab Adliya Bahrain Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=50.580000%2C26.210000%2C50.596000%2C26.220000&amp;layer=mapnik&amp;marker=26.215715%2C50.588498"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              <div className="p-4 bg-white text-xs text-[#6B6275] flex items-center justify-between">
                <span>Building No. 846, Shop 15, Road 2717, Al Adliya, Manama</span>
                <span className="font-semibold text-[#1E1926]">Adjacent to KFC Adliya</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
