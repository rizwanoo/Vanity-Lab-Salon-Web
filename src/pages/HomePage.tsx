import React from 'react';
import { PageType } from '../types';
import { BUSINESS_INFO, SERVICES_LIST, VERIFIED_REVIEWS } from '../data/salonData';
import { AppointmentForm } from '../components/AppointmentForm';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  Star,
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  Heart,
  Droplet,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType, serviceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const heroImage = '/images/hero_cinematic_salon.jpg';
  const hairImage = '/images/hair_transformation_styling.jpg';
  const nailImage = '/images/nail_art_manicure.jpg';
  const spaImage = '/images/spa_facial_relaxation.jpg';
  const loungeImage = '/images/salon_interior_reception.jpg';

  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('contact');
    }
  };

  return (
    <div className="w-full">
      {/* 01. CINEMATIC HERO SECTION (Extends behind the navbar) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1E1926]">
        {/* Cinematic Background Image with Gradient Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Vanity Lab Salon & Spa Adliya Bahrain"
            className="w-full h-full object-cover object-center scale-105 transform animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
          {/* Measured multi-stop scrim ensuring 4.5:1 text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E1926] via-[#1E1926]/40 to-black/50" />
          <div className="absolute inset-0 bg-[#FF4D6D]/15 mix-blend-color" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center flex flex-col items-center">
          {/* Editorial Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-extrabold text-[#FFB396]">
              Vanity Lab · Adliya, Bahrain
            </span>
          </motion.div>

          {/* Bold Campaign Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[0.95] max-w-5xl"
          >
            YOUR BEAUTY. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D6D] via-[#FFB396] to-white">
              YOUR RULES.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl font-light leading-relaxed"
          >
            Discover a world of beauty, self-expression and relaxation at Vanity Lab Salon & Spa.
            Exceptional care, beautiful details and an experience designed around you.
          </motion.p>

          {/* Call-to-Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={scrollToBooking}
              className="w-full sm:w-auto px-8 py-4 bg-[#FF4D6D] hover:bg-[#E23354] text-white text-xs uppercase font-extrabold tracking-widest transition-all duration-300 rounded-sm shadow-xl hover:shadow-[#FF4D6D]/40 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Book Your Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 text-xs uppercase font-bold tracking-widest transition-all duration-300 rounded-sm hover:border-white active:scale-95 cursor-pointer"
            >
              Explore Our Services
            </button>
          </motion.div>

          {/* Quick Credential Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-white/80 font-medium"
          >
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#FBE4A1] fill-[#FBE4A1]" />
              <span>4.5★ on Google (130+ Client Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FF4D6D]" />
              <span>Adliya Block 327, Manama</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FFB396]" />
              <span>Authentic Italian Nashi Argan Salon</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02. BOLD BRAND INTRODUCTION & PHILOSOPHY */}
      <section className="py-24 bg-[#FFFBF8] border-b border-[#FFB396]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Editorial Statement */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#FF4D6D] font-extrabold block">
                The Vanity Lab Standard · Adliya
              </span>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#1E1926] uppercase tracking-tight leading-[1.05]">
                BEAUTY. CONFIDENCE. <br />
                <span className="text-[#FF4D6D]">STYLE. EXPERIENCE.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#6B6275] leading-relaxed font-light">
                Nestled in the vibrant heart of Adliya, Manama, Vanity Lab is more than a salon—it is a bespoke personal sanctuary. We believe beauty is not about conforming to rigid standards; it is about celebrating your unique individuality with masterful hair artistry, couture nails, and rejuvenating skin therapies.
              </p>
              <p className="text-sm text-[#1E1926] font-medium leading-relaxed">
                From our celebrated Italian Nashi Argan treatments that transform hair into pure liquid silk, to precision eyebrow threading and soothing foot spas, every detail has been artfully crafted for comfort, confidence, and undeniable glamour.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3.5 bg-[#1E1926] hover:bg-[#FF4D6D] text-white text-xs uppercase font-extrabold tracking-wider transition-colors duration-200 rounded-sm cursor-pointer flex items-center gap-2"
                >
                  <span>Our Story & Salon Tour</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="px-6 py-3.5 bg-[#FFF2EC] hover:bg-[#FFE6DC] text-[#1E1926] text-xs uppercase font-bold tracking-wider transition-colors duration-200 rounded-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#FF4D6D]" />
                  <span>Call Reception</span>
                </a>
              </div>
            </div>

            {/* Right Column: High-Impact Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative border-4 border-[#FFB396]/40 shadow-2xl overflow-hidden bg-white">
                <img
                  src={loungeImage}
                  alt="Vanity Lab Salon Interior in Adliya"
                  className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#1E1926] via-[#1E1926]/70 to-transparent text-white">
                  <span className="text-[11px] uppercase tracking-widest text-[#FFB396] font-bold block">
                    Adliya Sanctuary · Shop 15
                  </span>
                  <h3 className="font-display text-xl font-bold mt-1">
                    Warm Coral Elegance & Halo Mirrors
                  </h3>
                  <p className="text-xs text-white/80 mt-1">
                    Designed for your comfort, privacy, and ultimate relaxation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. SIGNATURE RITUALS SHOWCASE (Editorial Block) */}
      <section className="py-24 bg-[#FFF2EC]/60 border-b border-[#FFB396]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#FF4D6D] font-extrabold block mb-2">
                Curated Salon Rituals
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-[#1E1926] uppercase tracking-tight">
                Signature Transformations
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs uppercase font-extrabold tracking-widest text-[#FF4D6D] hover:text-[#E23354] flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>View All Verified Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Asymmetric 3-Feature Editorial Grid (No generic rounded cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feature 1: Hair Artistry */}
            <div className="bg-white border border-[#FFB396]/40 p-6 flex flex-col justify-between group hover:border-[#FF4D6D] transition-colors duration-300">
              <div>
                <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-neutral-100">
                  <img
                    src={hairImage}
                    alt="Hair Styling & Nashi Argan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#FF4D6D] text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1">
                    Signature Therapy
                  </div>
                </div>
                <span className="text-xs uppercase tracking-wider text-[#FF4D6D] font-bold">
                  01. Hair Artistry
                </span>
                <h3 className="font-display text-2xl font-bold text-[#1E1926] mt-1 mb-2">
                  Nashi Argan Therapy & Blowout
                </h3>
                <p className="text-xs text-[#6B6275] leading-relaxed">
                  Deeply restorative Italian organic argan treatment that infuses brittle or dehydrated hair with mirror-like shine and velvety smoothness. Complete with signature blowout.
                </p>
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#FF4D6D]">From 18 BD</span>
                  <span className="text-[#6B6275]">60–75 mins</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FFB396]/20">
                <button
                  onClick={() => onNavigate('services', 'Nashi Argan Luxury Hair Therapy')}
                  className="w-full py-2.5 bg-[#FFF2EC] hover:bg-[#FF4D6D] text-[#1E1926] hover:text-white text-xs uppercase font-extrabold tracking-wider transition-colors duration-200 cursor-pointer"
                >
                  Book This Treatment
                </button>
              </div>
            </div>

            {/* Feature 2: Nail Studio */}
            <div className="bg-white border border-[#FFB396]/40 p-6 flex flex-col justify-between group hover:border-[#FF4D6D] transition-colors duration-300">
              <div>
                <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-neutral-100">
                  <img
                    src={nailImage}
                    alt="Couture Manicure & Nail Art"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#1E1926] text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1">
                    Couture Finish
                  </div>
                </div>
                <span className="text-xs uppercase tracking-wider text-[#FF4D6D] font-bold">
                  02. Nail Studio
                </span>
                <h3 className="font-display text-2xl font-bold text-[#1E1926] mt-1 mb-2">
                  Gel Couture & Deluxe Spa Pedicure
                </h3>
                <p className="text-xs text-[#6B6275] leading-relaxed">
                  Impeccable Russian-precision cuticle detailing, high-gloss gel lacquer, and restorative botanical scrubs. Long-lasting, chip-resistant perfection in rich seasonal hues.
                </p>
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#FF4D6D]">Bespoke Rates</span>
                  <span className="text-[#6B6275]">45–60 mins</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FFB396]/20">
                <button
                  onClick={() => onNavigate('services', 'Gel Couture Manicure & Art')}
                  className="w-full py-2.5 bg-[#FFF2EC] hover:bg-[#FF4D6D] text-[#1E1926] hover:text-white text-xs uppercase font-extrabold tracking-wider transition-colors duration-200 cursor-pointer"
                >
                  Book Nail Service
                </button>
              </div>
            </div>

            {/* Feature 3: Facial & Spa Wellness */}
            <div className="bg-white border border-[#FFB396]/40 p-6 flex flex-col justify-between group hover:border-[#FF4D6D] transition-colors duration-300">
              <div>
                <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-neutral-100">
                  <img
                    src={spaImage}
                    alt="Clarifying Facial & Foot Spa"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#FFB396] text-[#1E1926] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1">
                    Tranquil Care
                  </div>
                </div>
                <span className="text-xs uppercase tracking-wider text-[#FF4D6D] font-bold">
                  03. Facial & Wellness
                </span>
                <h3 className="font-display text-2xl font-bold text-[#1E1926] mt-1 mb-2">
                  Deep Pore Glow & Herbal Foot Spa
                </h3>
                <p className="text-xs text-[#6B6275] leading-relaxed">
                  Gentle ultrasonic exfoliation, oxygenating masks, and pressure-point foot reflexology designed to release stress and restore radiant, glowing vitality.
                </p>
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#FF4D6D]">Custom Packages</span>
                  <span className="text-[#6B6275]">45–60 mins</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FFB396]/20">
                <button
                  onClick={() => onNavigate('services', 'Deep Pore Clarifying & Glow Facial')}
                  className="w-full py-2.5 bg-[#FFF2EC] hover:bg-[#FF4D6D] text-[#1E1926] hover:text-white text-xs uppercase font-extrabold tracking-wider transition-colors duration-200 cursor-pointer"
                >
                  Book Facial / Spa
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. INSTAGRAM & EDITORIAL PORTFOLIO (@vanitylab_bh) */}
      <section className="py-24 bg-[#FFFBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF4D6D] font-extrabold block mb-2">
              Official Instagram Feed
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#1E1926] uppercase tracking-tight">
              @vanitylab_bh
            </h2>
            <p className="mt-3 text-sm text-[#6B6275]">
              Over 1,000 real client transformations, beauty inspirations, and behind-the-scenes moments from our Adliya salon.
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs font-semibold text-[#1E1926]">
              <span>1,031+ Posts</span>
              <span>·</span>
              <span>4,530+ Followers</span>
              <span>·</span>
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF4D6D] hover:underline font-bold"
              >
                Follow on Instagram →
              </a>
            </div>
          </div>

          {/* Editorial Photographic Composition */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative group overflow-hidden bg-neutral-100 aspect-square">
              <img
                src={hairImage}
                alt="Hair work @vanitylab_bh"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#FF4D6D]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs font-bold uppercase tracking-wider p-4 text-center">
                Signature Nashi Shine
              </div>
            </div>

            <div className="relative group overflow-hidden bg-neutral-100 aspect-square">
              <img
                src={nailImage}
                alt="Gel nails @vanitylab_bh"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#1E1926]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs font-bold uppercase tracking-wider p-4 text-center">
                Coral & Gold Nail Art
              </div>
            </div>

            <div className="relative group overflow-hidden bg-neutral-100 aspect-square">
              <img
                src={spaImage}
                alt="Spa care @vanitylab_bh"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#FF4D6D]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs font-bold uppercase tracking-wider p-4 text-center">
                Botanical Facial Glow
              </div>
            </div>

            <div className="relative group overflow-hidden bg-neutral-100 aspect-square">
              <img
                src={loungeImage}
                alt="Salon interior @vanitylab_bh"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#1E1926]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs font-bold uppercase tracking-wider p-4 text-center">
                Adliya Reception Lounge
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. VERIFIED CLIENT TESTIMONIALS */}
      <section className="py-24 bg-[#FFF2EC]/40 border-t border-b border-[#FFB396]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF4D6D] font-extrabold block mb-2">
              Google Business Reviews
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#1E1926] uppercase tracking-tight">
              Loved Across Bahrain
            </h2>
            <div className="flex items-center justify-center gap-1.5 mt-3 text-[#FF4D6D]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FF4D6D]" />
              ))}
              <span className="text-xs font-bold text-[#1E1926] ml-2">4.5 / 5.0 (130+ Google Reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VERIFIED_REVIEWS.map((review, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#FFB396]/30 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-[#FBE4A1] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FF4D6D] text-[#FF4D6D]" />
                    ))}
                  </div>
                  <p className="text-xs text-[#1E1926] leading-relaxed italic mb-4">
                    "{review.comment}"
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-100">
                  <span className="font-display text-xs font-bold text-[#1E1926] block">
                    {review.name}
                  </span>
                  <span className="text-[10px] text-[#6B6275] block">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. INLINE APPOINTMENT BOOKING SECTION (No popups) */}
      <section className="py-24 bg-[#FFFBF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentForm />
        </div>
      </section>
    </div>
  );
};
