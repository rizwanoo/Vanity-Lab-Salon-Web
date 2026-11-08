export type PageType = 'home' | 'services' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  category: 'hair' | 'nails' | 'waxing' | 'skin' | 'spa';
  categoryLabel: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  price?: string;
  duration?: string;
  featured?: boolean;
  highlightTag?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'nails' | 'skin' | 'spa' | 'salon';
  categoryLabel: string;
  image: string;
  caption: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
}

export interface BookingFormData {
  customerType: 'new' | 'existing';
  service: string;
  preferredDate: string;
  preferredTime: string;
  fullName: string;
  phone: string;
  email: string;
  dob?: string;
  preferredContact: 'WhatsApp' | 'Phone' | 'Email';
  notes?: string;
}
