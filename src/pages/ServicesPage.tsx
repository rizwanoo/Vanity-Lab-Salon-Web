import React, { useState } from 'react';
import { PageType, ServiceItem } from '../types';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/salonData';
import { AppointmentForm } from '../components/AppointmentForm';
import { Sparkles, Clock, Check, ArrowRight, MessageSquare, Phone } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageType, serviceName?: string) => void;
  selectedServicePreload?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, selectedServicePreload }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [bookingService, setBookingService] = useState<string>(
    selectedServicePreload || SERVICES_LIST[0].name
  );

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'hair', label: 'Hair Care & Nashi Argan' },
    { id: 'nails', label: 'Nail Studio & Art' },
    { id: 'waxing', label: 'Waxing & Threading' },
    { id: 'skin', label: 'Facials & Skin Glow' },
    { id: 'spa', label: 'Spa & Foot Wellness' },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES_LIST
      : SERVICES_LIST.filter((s) => s.category === activeCategory);

  const handleBookService = (service: ServiceItem) => {
    setBookingService(service.name);
    const formElement = document.getElementById('booking-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full pt-20">
      {/* Editorial Header Banner */}
      <section className="bg-gradient-to-r from-[#FFF2EC] via-[#FFE6DC] to-[#FFFBF8] py-20 border-b border-[#FFB396]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-[#FF4D6D] block mb-3">
            Vanity Lab Menu of Services · Adliya
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-[#1E1926] uppercase tracking-tight max-w-4xl leading-[1.05]">
            CURATED RITUALS OF <br />
            <span className="text-[#FF4D6D]">TRANSFORMATION.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#6B6275] max-w-2xl font-light">
            Every service at Vanity Lab is performed with premium salon-grade formulations, impeccable hygiene, and customized care. Select any treatment below to reserve your appointment directly.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#1E1926]">
            <span className="flex items-center gap-1.5 text-[#FF4D6D]">
              <Sparkles className="w-4 h-4" />
              <span>Authentic Italian Nashi Argan</span>
            </span>
            <span>·</span>
            <span>Russian-Precision Cuticle Care</span>
            <span>·</span>
            <span>Sanitized Tools</span>
            <span>·</span>
            <span>BenefitPay Accepted</span>
          </div>
        </div>
      </section>

      {/* Interactive Category Tabs */}
      <section className="sticky top-14 z-40 bg-[#FFFBF8]/95 backdrop-blur-md border-b border-[#FFB396]/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer rounded-none border ${
                  activeCategory === cat.id
                    ? 'bg-[#FF4D6D] text-white border-[#FF4D6D] shadow-sm'
                    : 'bg-white text-[#1E1926] border-[#FFB396]/30 hover:border-[#FF4D6D]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase (Asymmetrical Editorial Compositions) */}
      <section className="py-20 bg-[#FFFBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredServices.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                className="bg-white border border-[#FFB396]/30 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-5 relative min-h-[300px] lg:min-h-[380px] bg-neutral-100 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {service.highlightTag && (
                      <div className="absolute top-4 left-4 bg-[#FF4D6D] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 shadow-sm">
                        {service.highlightTag}
                      </div>
                    )}
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                        <span className="text-xs uppercase tracking-widest text-[#FF4D6D] font-bold">
                          {service.categoryLabel}
                        </span>
                        {service.duration && (
                          <span className="flex items-center gap-1 text-xs text-[#6B6275]">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{service.duration}</span>
                          </span>
                        )}
                      </div>

                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1E1926] mt-1 mb-4">
                        {service.name}
                      </h2>

                      <p className="text-sm sm:text-base text-[#1E1926] font-medium leading-relaxed mb-3">
                        {service.shortDesc}
                      </p>

                      <p className="text-xs sm:text-sm text-[#6B6275] leading-relaxed">
                        {service.fullDesc}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        {service.price ? (
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-[#6B6275] block">
                              Verified Rate
                            </span>
                            <span className="font-display text-2xl font-black text-[#FF4D6D]">
                              {service.price}
                            </span>
                            <span className="text-[10px] text-[#6B6275] ml-1">(inc. VAT)</span>
                          </div>
                        ) : (
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-[#6B6275] block">
                              Consultation Rate
                            </span>
                            <span className="font-display text-sm font-bold text-[#1E1926]">
                              Based on length & style
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button
                          onClick={() => handleBookService(service)}
                          className="flex-1 sm:flex-none px-6 py-3 bg-[#FF4D6D] hover:bg-[#E23354] text-white text-xs uppercase font-extrabold tracking-wider transition-colors duration-200 rounded-sm shadow-sm cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
                        >
                          <span>Book This Service</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <a
                          href={`https://wa.me/97332155410?text=${encodeURIComponent(
                            `Hello Vanity Lab Bahrain! I would like to enquire about booking: ${service.name}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white transition-colors duration-200 rounded-sm"
                          title="Instant WhatsApp Query"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Signature Combo Packages Section */}
      <section className="py-20 bg-[#FFF2EC]/60 border-t border-b border-[#FFB396]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF4D6D] font-extrabold block mb-2">
              Curated Combinations
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#1E1926] uppercase tracking-tight">
              Adliya Pampering Rituals
            </h2>
            <p className="mt-2 text-sm text-[#6B6275]">
              Designed for your weekend refresh or event preparations in Bahrain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-[#FF4D6D] p-8 flex flex-col justify-between relative shadow-md">
              <div className="absolute -top-3.5 left-6 bg-[#FF4D6D] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1">
                Most Popular
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#FF4D6D] font-bold">
                  Package 01
                </span>
                <h3 className="font-display text-xl font-bold text-[#1E1926] mt-1 mb-2">
                  The Liquid Silk & Glow
                </h3>
                <p className="text-xs text-[#6B6275] mb-4">
                  Italian Nashi Argan deep treatment + Signature blowout + Gel Couture manicure.
                </p>
                <ul className="space-y-2 text-xs text-[#1E1926] mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF4D6D]" />
                    <span>Nashi Argan intensive therapy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF4D6D]" />
                    <span>Runway-finish bouncy blow-dry</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF4D6D]" />
                    <span>Full Russian-style gel manicure</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() =>
                  handleBookService({
                    id: 'combo-1',
                    category: 'hair',
                    categoryLabel: 'Combo Package',
                    name: 'Liquid Silk & Glow Package',
                    shortDesc: 'Nashi Argan + Blowout + Gel Manicure',
                    fullDesc: 'Complete hair & nail rejuvenation.',
                    image: '/images/hair_transformation_styling.jpg',
                  })
                }
                className="w-full py-3 bg-[#FF4D6D] hover:bg-[#E23354] text-white text-xs uppercase font-extrabold tracking-wider transition-colors duration-200 cursor-pointer text-center"
              >
                Reserve Package
              </button>
            </div>

            <div className="bg-white border border-[#FFB396]/40 p-8 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#FF4D6D] font-bold">
                  Package 02
                </span>
                <h3 className="font-display text-xl font-bold text-[#1E1926] mt-1 mb-2">
                  Adliya Spa Day Retreat
                </h3>
                <p className="text-xs text-[#6B6275] mb-4">
                  Deep pore clarifying facial + Deluxe foot spa reflexology + Scalp tension melt.
                </p>
                <ul className="space-y-2 text-xs text-[#1E1926] mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF4D6D]" />
                    <span>Enzymatic facial cleansing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF4D6D]" />
                    <span>Warm herbal mineral foot soak</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF4D6D]" />
                    <span>Stress relief head massage</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() =>
                  handleBookService({
                    id: 'combo-2',
                    category: 'spa',
                    categoryLabel: 'Combo Package',
                    name: 'Adliya Spa Day Retreat',
                    shortDesc: 'Facial + Foot Spa + Scalp Massage',
                    fullDesc: 'Tranquil rejuvenation ritual.',
                    image: '/images/spa_facial_relaxation.jpg',
                  })
                }
                className="w-full py-3 bg-[#1E1926] hover:bg-[#FF4D6D] text-white text-xs uppercase font-extrabold tracking-wider transition-colors duration-200 cursor-pointer text-center"
              >
                Reserve Package
              </button>
            </div>

            <div className="bg-white border border-[#FFB396]/40 p-8 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#FF4D6D] font-bold">
                  Package 03
                </span>
                <h3 className="font-display text-xl font-bold text-[#1E1926] mt-1 mb-2">
                  The Flawless Grooming Duo
                </h3>
                <p className="text-xs text-[#6B6275] mb-4">
                  Architectural eyebrow threading + Full face silk wax + Classic mani-pedi.
                </p>
                <ul className="space-y-2 text-xs text-[#1E1926] mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF4D6D]" />
                    <span>Precision brow contouring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF4D6D]" />
                    <span>Gentle chamomile facial waxing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF4D6D]" />
                    <span>Dual hand & foot conditioning</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() =>
                  handleBookService({
                    id: 'combo-3',
                    category: 'waxing',
                    categoryLabel: 'Combo Package',
                    name: 'Flawless Grooming Duo',
                    shortDesc: 'Brow Threading + Full Face Wax + Mani-Pedi',
                    fullDesc: 'Precision face & nail grooming.',
                    image: '/images/nail_art_manicure.jpg',
                  })
                }
                className="w-full py-3 bg-[#1E1926] hover:bg-[#FF4D6D] text-white text-xs uppercase font-extrabold tracking-wider transition-colors duration-200 cursor-pointer text-center"
              >
                Reserve Package
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Inline Appointment Booking Section (No popup!) */}
      <section className="py-24 bg-[#FFFBF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentForm initialService={bookingService} />
        </div>
      </section>
    </div>
  );
};
