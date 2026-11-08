import React from 'react';
import { PageType } from '../types';
import { BUSINESS_INFO } from '../data/salonData';
import { Sparkles, ShieldCheck, Heart, MapPin, Award, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const salonInterior = '/images/hero_cinematic_salon.jpg';
  const salonLounge = '/images/salon_interior_reception.jpg';
  const hairCraft = '/images/hair_transformation_styling.jpg';
  const nailCraft = '/images/nail_art_manicure.jpg';

  return (
    <div className="w-full pt-20">
      {/* Editorial Header */}
      <section className="bg-gradient-to-r from-[#FFF2EC] via-[#FFE6DC] to-[#FFFBF8] py-20 border-b border-[#FFB396]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-[#FF4D6D] block mb-3">
            Our Story & Craft · Adliya, Bahrain
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-[#1E1926] uppercase tracking-tight max-w-4xl leading-[1.05]">
            BEHIND THE MIRROR: <br />
            <span className="text-[#FF4D6D]">THE VANITY LAB STORY.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#6B6275] max-w-2xl font-light">
            Founded with a passion for elevated self-care and authentic beauty, Vanity Lab Salon & Spa has become Adliya's premier destination for women seeking warmth, luxury, and unmatched artistic expertise.
          </p>
        </div>
      </section>

      {/* Brand Philosophy & The Sanctuary */}
      <section className="py-24 bg-[#FFFBF8] border-b border-[#FFB396]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Block (Rectangular Asymmetric Composition) */}
            <div className="lg:col-span-6 relative">
              <div className="relative border-2 border-[#FFB396]/50 shadow-xl overflow-hidden bg-white">
                <img
                  src={salonInterior}
                  alt="Vanity Lab Interior Salon Bahrain"
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 border border-[#FFB396]/30 text-xs font-bold text-[#1E1926]">
                  Adliya Block 327 · Shop No. 15
                </div>
              </div>
            </div>

            {/* Content Block */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#FF4D6D] font-extrabold block">
                The Philosophy
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1926] uppercase tracking-tight leading-[1.1]">
                A Modern Sanctuary Designed Around You.
              </h2>
              <p className="text-sm sm:text-base text-[#6B6275] leading-relaxed">
                Located on Road 2717 in Adliya, Manama, Vanity Lab was envisioned as a vibrant, luminous escape from the everyday rush. While traditional salons can feel impersonal or clinical, Vanity Lab was built on warmth, personalized care, and joyful aesthetics.
              </p>
              <p className="text-sm text-[#1E1926] leading-relaxed font-medium">
                Our bespoke interior pairs radiant halo-illuminated mirrors with soft hot-coral and blush velvet furnishings, creating an uplifting atmosphere where every client feels celebrated, relaxed, and genuinely cared for.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-[#FFB396]/20">
                <div>
                  <span className="font-display text-3xl font-black text-[#FF4D6D] block">
                    1,030+
                  </span>
                  <span className="text-xs text-[#6B6275] uppercase font-bold tracking-wider">
                    Published Transformations
                  </span>
                </div>
                <div>
                  <span className="font-display text-3xl font-black text-[#FF4D6D] block">
                    4.5★
                  </span>
                  <span className="text-xs text-[#6B6275] uppercase font-bold tracking-wider">
                    Google Business Rating (130+ Reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Creative Curation & Professional Team */}
      <section className="py-24 bg-[#FFF2EC]/50 border-b border-[#FFB396]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF4D6D] font-extrabold block mb-2">
              Artistry & Passion
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1926] uppercase tracking-tight">
              Our Professional Specialists
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#6B6275]">
              Curated under the creative vision associated with <span className="text-[#FF4D6D] font-semibold">@shweetmirchi</span> and our official channel <span className="text-[#FF4D6D] font-semibold">@vanitylab_bh</span>, our team brings together passionate, certified beauty artisans dedicated to the highest standards of technique and hygiene.
            </p>
          </div>

          {/* Department Editorial Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hair Artistry Department */}
            <div className="bg-white border border-[#FFB396]/40 p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="aspect-[4/3] overflow-hidden mb-6 bg-neutral-100">
                  <img
                    src={hairCraft}
                    alt="Hair Specialists at Vanity Lab"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs uppercase tracking-wider text-[#FF4D6D] font-bold">
                  Department 01
                </span>
                <h3 className="font-display text-2xl font-bold text-[#1E1926] mt-1 mb-2">
                  Master Hair Stylists & Nashi Therapists
                </h3>
                <p className="text-xs text-[#6B6275] leading-relaxed">
                  Specializing in Italian Nashi Argan restorative hair rituals, voluminous red-carpet blow-drys, precision layering, and color consultations tailored to Middle Eastern climate conditions.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FFB396]/20 flex items-center justify-between text-xs text-[#1E1926] font-bold">
                <span>Certified Formulations</span>
                <span className="text-[#FF4D6D]">● Italian Argan</span>
              </div>
            </div>

            {/* Nail Couture Department */}
            <div className="bg-white border border-[#FFB396]/40 p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="aspect-[4/3] overflow-hidden mb-6 bg-neutral-100">
                  <img
                    src={nailCraft}
                    alt="Nail Artists at Vanity Lab"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs uppercase tracking-wider text-[#FF4D6D] font-bold">
                  Department 02
                </span>
                <h3 className="font-display text-2xl font-bold text-[#1E1926] mt-1 mb-2">
                  Senior Nail Technicians & Artists
                </h3>
                <p className="text-xs text-[#6B6275] leading-relaxed">
                  Trained in detailed cuticle shaping, Russian manicure precision, durable non-chipping gel lacquers, and delicate bespoke hand-painted nail designs in seasonal coral, chrome, and pastels.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FFB396]/20 flex items-center justify-between text-xs text-[#1E1926] font-bold">
                <span>Sanitized Implements</span>
                <span className="text-[#FF4D6D]">● Autoclave Safe</span>
              </div>
            </div>

            {/* Esthetics & Wellness Department */}
            <div className="bg-white border border-[#FFB396]/40 p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="aspect-[4/3] overflow-hidden mb-6 bg-neutral-100">
                  <img
                    src={salonLounge}
                    alt="Esthetics and Spa at Vanity Lab"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs uppercase tracking-wider text-[#FF4D6D] font-bold">
                  Department 03
                </span>
                <h3 className="font-display text-2xl font-bold text-[#1E1926] mt-1 mb-2">
                  Certified Estheticians & Waxing Therapists
                </h3>
                <p className="text-xs text-[#6B6275] leading-relaxed">
                  Dedicated experts in gentle eyebrow threading, soothing chamomile waxing, ultrasonic pore decongestion, and restorative foot spa reflexology for thorough relaxation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FFB396]/20 flex items-center justify-between text-xs text-[#1E1926] font-bold">
                <span>Gentle On Skin</span>
                <span className="text-[#FF4D6D]">● Botanical Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Vanity Lab Quality Commitments */}
      <section className="py-24 bg-[#FFFBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF4D6D] font-extrabold block mb-2">
              Uncompromising Standards
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#1E1926] uppercase tracking-tight">
              The Vanity Lab Guarantee
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-[#FFB396]/30 p-6 bg-white space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#FF4D6D]" />
              <h3 className="font-display text-lg font-bold text-[#1E1926]">
                Medical-Grade Hygiene
              </h3>
              <p className="text-xs text-[#6B6275] leading-relaxed">
                Every metal tool is thoroughly sanitized and sterilized. Single-use buffers and disposable liners ensure pristine safety for every client.
              </p>
            </div>

            <div className="border border-[#FFB396]/30 p-6 bg-white space-y-3">
              <Sparkles className="w-8 h-8 text-[#FF4D6D]" />
              <h3 className="font-display text-lg font-bold text-[#1E1926]">
                Genuine Product Formulations
              </h3>
              <p className="text-xs text-[#6B6275] leading-relaxed">
                We exclusively use authentic Italian Nashi Argan professional products, certified organic extracts, and top-tier salon polishes.
              </p>
            </div>

            <div className="border border-[#FFB396]/30 p-6 bg-white space-y-3">
              <Heart className="w-8 h-8 text-[#FF4D6D]" />
              <h3 className="font-display text-lg font-bold text-[#1E1926]">
                Warm Adliya Hospitality
              </h3>
              <p className="text-xs text-[#6B6275] leading-relaxed">
                Enjoy complimentary refreshments, a cozy waiting lounge, and a team that genuinely listens to your beauty goals and hair history.
              </p>
            </div>

            <div className="border border-[#FFB396]/30 p-6 bg-white space-y-3">
              <Award className="w-8 h-8 text-[#FF4D6D]" />
              <h3 className="font-display text-lg font-bold text-[#1E1926]">
                Seamless Experience
              </h3>
              <p className="text-xs text-[#6B6275] leading-relaxed">
                Direct WhatsApp bookings, flexible payment through BenefitPay or card, and convenient central parking in Adliya Block 327.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-16 bg-[#1E1926] text-white p-8 sm:p-12 border-2 border-[#FF4D6D] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight">
                Experience the Difference in Person
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-xl">
                Visit Vanity Lab in Adliya, Manama. Open 7 days a week from 10:00 AM.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-[#FF4D6D] hover:bg-[#E23354] text-white text-xs uppercase font-extrabold tracking-widest transition-colors duration-200 rounded-sm cursor-pointer whitespace-nowrap shadow-lg"
            >
              Book Your Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
