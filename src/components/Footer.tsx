import React from 'react';
import { PageType } from '../types';
import { BUSINESS_INFO } from '../data/salonData';
import { MapPin, Phone, MessageSquare, Instagram, Facebook, Clock, Sparkles, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1E1926] text-[#FFFBF8] pt-16 pb-12 border-t border-[#FFB396]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FF4D6D] bg-white p-0.5 shrink-0 shadow-md">
                <img
                  src="/logo.png"
                  alt="Vanity Lab Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display text-xl font-extrabold tracking-wider uppercase text-white block">
                  Vanity Lab
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#FFB396] uppercase font-semibold">
                  Salon & Spa · Bahrain
                </span>
              </div>
            </div>

            <p className="text-xs text-[#FFFBF8]/70 leading-relaxed pt-2">
              Beauty. Confidence. Style. Experience. Bahrain’s premier boutique salon and spa destination in Adliya, delivering Italian Nashi Argan hair rituals, high-gloss nail artistry, and holistic body care.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF4D6D] flex items-center justify-center transition-colors text-white"
                aria-label="Instagram @vanitylab_bh"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF4D6D] flex items-center justify-center transition-colors text-white"
                aria-label="Facebook Vanity Lab"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.social.threads}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF4D6D] flex items-center justify-center transition-colors text-white text-xs font-bold"
                aria-label="Threads @vanitylab_bh"
              >
                @
              </a>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] flex items-center justify-center transition-colors text-white"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#FFB396] mb-5">
              Explore Pages
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-white/80 hover:text-[#FF4D6D] transition-colors cursor-pointer"
                >
                  01. Home & Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-white/80 hover:text-[#FF4D6D] transition-colors cursor-pointer"
                >
                  02. Signature Services & Rates
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-white/80 hover:text-[#FF4D6D] transition-colors cursor-pointer"
                >
                  03. About Vanity Lab & Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-white/80 hover:text-[#FF4D6D] transition-colors cursor-pointer"
                >
                  04. Gallery, Booking & Contact
                </button>
              </li>
              <li className="pt-2">
                <a
                  href={BUSINESS_INFO.googleBookingFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#FFB396] hover:text-white font-semibold transition-colors"
                >
                  <span>Official Google Booking Form</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Payments */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#FFB396] mb-5">
              Opening Hours
            </h4>
            <div className="space-y-3 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FF4D6D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Sunday – Wednesday</span>
                  <span>10:00 AM – 9:00 PM</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FF4D6D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Thursday – Saturday</span>
                  <span>10:00 AM – 10:00 PM</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] uppercase tracking-wider text-white/60 block mb-2 font-medium">
                  Accepted Payments
                </span>
                <div className="flex flex-wrap gap-2 text-[11px] text-[#FFB396]">
                  {BUSINESS_INFO.paymentMethods.map((m) => (
                    <span key={m} className="bg-white/5 px-2 py-1 border border-white/10 rounded-sm">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Location & Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#FFB396] mb-5">
              Contact & Location
            </h4>
            <div className="space-y-3.5 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF4D6D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Adliya, Manama</span>
                  <span>{BUSINESS_INFO.address.fullFormatted}</span>
                  <span className="text-[11px] text-[#FFB396] block mt-0.5">
                    ({BUSINESS_INFO.address.landmark})
                  </span>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#FF4D6D] hover:underline font-bold mt-1 text-[11px]"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#FF4D6D] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="font-bold text-white hover:text-[#FF4D6D] transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-[#25D366] transition-colors"
                >
                  WhatsApp: {BUSINESS_INFO.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Vanity Lab Salon & Spa Bahrain. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-[#FFB396]">Instagram: {BUSINESS_INFO.social.instagramHandle}</span>
            <span>·</span>
            <span>Adliya Block 327</span>
            <span>·</span>
            <span className="flex items-center gap-1 text-[#FF4D6D]">
              <Sparkles className="w-3 h-3" />
              <span>Google 4.5★ (130+ Reviews)</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
