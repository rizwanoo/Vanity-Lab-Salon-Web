import React, { useState } from 'react';
import { BookingFormData } from '../types';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/salonData';
import { CheckCircle2, Send, ExternalLink, Phone, MessageSquare, Clock, MapPin } from 'lucide-react';

interface AppointmentFormProps {
  initialService?: string;
  onSelectServiceChange?: (serviceName: string) => void;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    customerType: 'new',
    service: initialService || SERVICES_LIST[0].name,
    preferredDate: '',
    preferredTime: '11:00 AM',
    fullName: '',
    phone: '',
    email: '',
    preferredContact: 'WhatsApp',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCustomerTypeChange = (type: 'new' | 'existing') => {
    setFormData((prev) => ({ ...prev, customerType: type }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      return;
    }

    // Build prefilled WhatsApp message
    const message = `Hello Vanity Lab Bahrain! ✨\n\nI would like to book an appointment:\n• Service: ${formData.service}\n• Customer: ${formData.customerType === 'new' ? 'New Client' : 'Existing Client'}\n• Preferred Date: ${formData.preferredDate || 'Earliest Available'}\n• Preferred Time: ${formData.preferredTime}\n• Name: ${formData.fullName}\n• Phone: ${formData.phone}\n• Email: ${formData.email || 'N/A'}\n• Preferred Contact: ${formData.preferredContact}\n${formData.notes ? `• Special Requests: ${formData.notes}\n` : ''}\nThank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/97332155410?text=${encodedMessage}`;

    // Switch to inline confirmed state
    setSubmitted(true);

    // Open WhatsApp in a direct new tab without any popup modal
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const timeSlots = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
    '08:00 PM',
  ];

  return (
    <div id="booking-section" className="bg-[#FFFBF8] border border-[#FFB396]/30 shadow-lg p-6 sm:p-10">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 text-center sm:text-left">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF4D6D] font-bold block mb-2">
            Priority Reservation Desk
          </span>
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E1926] tracking-tight">
            Reserve Your Vanity Lab Experience
          </h3>
          <p className="mt-2 text-sm text-[#6B6275] max-w-xl">
            Book directly below for prompt WhatsApp confirmation from our Adliya reception, or access our official Google Booking Form.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#FFF2EC] border border-[#FFB396]/40 p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-[#FF4D6D] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="font-display text-xl font-bold text-[#1E1926]">
              Appointment Request Sent!
            </h4>
            <p className="text-sm text-[#6B6275] max-w-md mx-auto">
              Thank you, <span className="font-bold text-[#1E1926]">{formData.fullName}</span>! Your request for{' '}
              <span className="font-bold text-[#FF4D6D]">{formData.service}</span> has been dispatched to Vanity Lab Adliya.
            </p>
            <div className="p-4 bg-white border border-[#FFB396]/30 text-xs text-left max-w-sm mx-auto space-y-1.5 text-[#1E1926]">
              <div className="flex justify-between">
                <span className="text-[#6B6275]">Preferred Date:</span>
                <span className="font-semibold">{formData.preferredDate || 'Earliest Available'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B6275]">Time Slot:</span>
                <span className="font-semibold">{formData.preferredTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B6275]">Location:</span>
                <span className="font-semibold">Adliya Block 327</span>
              </div>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs font-bold text-[#FF4D6D] hover:underline px-4 py-2"
              >
                ← Book Another Treatment
              </button>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors rounded-sm flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp Chat Directly</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Customer Type Toggle */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1926] mb-2">
                1. Customer Status
              </label>
              <div className="grid grid-cols-2 gap-3 max-w-md">
                <button
                  type="button"
                  onClick={() => handleCustomerTypeChange('new')}
                  className={`py-2.5 px-4 text-xs font-bold tracking-wide uppercase transition-all duration-200 border cursor-pointer ${
                    formData.customerType === 'new'
                      ? 'bg-[#FF4D6D] text-white border-[#FF4D6D] shadow-sm'
                      : 'bg-white text-[#1E1926] border-[#FFB396]/40 hover:border-[#FF4D6D]'
                  }`}
                >
                  I Am A New Client
                </button>
                <button
                  type="button"
                  onClick={() => handleCustomerTypeChange('existing')}
                  className={`py-2.5 px-4 text-xs font-bold tracking-wide uppercase transition-all duration-200 border cursor-pointer ${
                    formData.customerType === 'existing'
                      ? 'bg-[#FF4D6D] text-white border-[#FF4D6D] shadow-sm'
                      : 'bg-white text-[#1E1926] border-[#FFB396]/40 hover:border-[#FF4D6D]'
                  }`}
                >
                  Existing Client
                </button>
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-[#1E1926] mb-2">
                2. Select Treatment or Service *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full bg-white border border-[#FFB396]/40 px-4 py-3 text-sm text-[#1E1926] focus:outline-none focus:border-[#FF4D6D] focus:ring-1 focus:ring-[#FF4D6D] rounded-none"
              >
                {SERVICES_LIST.map((srv) => (
                  <option key={srv.id} value={srv.name}>
                    {srv.name} {srv.price ? `(${srv.price})` : ''} — {srv.categoryLabel}
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Time Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="preferredDate" className="block text-xs font-bold uppercase tracking-wider text-[#1E1926] mb-2">
                  3. Preferred Date *
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-white border border-[#FFB396]/40 px-4 py-3 text-sm text-[#1E1926] focus:outline-none focus:border-[#FF4D6D] rounded-none"
                />
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-xs font-bold uppercase tracking-wider text-[#1E1926] mb-2">
                  4. Preferred Time Slot *
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white border border-[#FFB396]/40 px-4 py-3 text-sm text-[#1E1926] focus:outline-none focus:border-[#FF4D6D] rounded-none"
                >
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Client Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#1E1926] mb-2">
                  5. Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Fatima Al-Zayani"
                  required
                  className="w-full bg-white border border-[#FFB396]/40 px-4 py-3 text-sm text-[#1E1926] placeholder-[#6B6275]/50 focus:outline-none focus:border-[#FF4D6D] rounded-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#1E1926] mb-2">
                  6. Contact Number / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+973 3XXXXXXX"
                  required
                  className="w-full bg-white border border-[#FFB396]/40 px-4 py-3 text-sm text-[#1E1926] placeholder-[#6B6275]/50 focus:outline-none focus:border-[#FF4D6D] rounded-none"
                />
              </div>
            </div>

            {/* Email & Contact Method */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#1E1926] mb-2">
                  7. Email (Optional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.name@example.com"
                  className="w-full bg-white border border-[#FFB396]/40 px-4 py-3 text-sm text-[#1E1926] placeholder-[#6B6275]/50 focus:outline-none focus:border-[#FF4D6D] rounded-none"
                />
              </div>

              <div>
                <label htmlFor="preferredContact" className="block text-xs font-bold uppercase tracking-wider text-[#1E1926] mb-2">
                  8. Preferred Contact Method
                </label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-[#FFB396]/40 px-4 py-3 text-sm text-[#1E1926] focus:outline-none focus:border-[#FF4D6D] rounded-none"
                >
                  <option value="WhatsApp">WhatsApp (Fastest response)</option>
                  <option value="Phone">Phone Call</option>
                  <option value="Email">Email</option>
                </select>
              </div>
            </div>

            {/* Questions and Comments */}
            <div>
              <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-[#1E1926] mb-2">
                9. Questions or Specific Requests (Optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={2}
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Mention any sensitivities, hair length, nail inspirations, or special timings..."
                className="w-full bg-white border border-[#FFB396]/40 px-4 py-3 text-sm text-[#1E1926] placeholder-[#6B6275]/50 focus:outline-none focus:border-[#FF4D6D] rounded-none"
              />
            </div>

            {/* Action Buttons (Strictly NO POPUPS) */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button
                type="submit"
                className="flex-1 px-8 py-4 bg-[#FF4D6D] hover:bg-[#E23354] text-white text-xs uppercase font-extrabold tracking-widest transition-all duration-200 rounded-sm shadow-md hover:shadow-lg active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Confirm Request via WhatsApp</span>
              </button>

              <a
                href={BUSINESS_INFO.googleBookingFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-[#FFF2EC] hover:bg-[#FFE6DC] text-[#1E1926] border border-[#FFB396]/50 text-xs uppercase font-bold tracking-wider transition-colors rounded-sm flex items-center justify-center gap-2 text-center"
              >
                <span>Official Google Booking Form</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#FF4D6D]" />
              </a>
            </div>

            {/* Quick Assistance Strip */}
            <div className="pt-4 border-t border-[#FFB396]/20 flex flex-wrap items-center justify-between gap-4 text-xs text-[#6B6275]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF4D6D]" />
                <span>Same-day bookings: Call {BUSINESS_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF4D6D]" />
                <span>Adliya Block 327 (Near KFC & Baskin Robbins)</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
