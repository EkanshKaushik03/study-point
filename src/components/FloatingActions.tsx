import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const phoneNumber = "919001150080"; // Example placeholder
  const encodedMessage = encodeURIComponent("I want a free counselling and demonstration session.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  const mapUrl = "https://maps.google.com";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a 
        href={mapUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-white text-primary-blue rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Google Maps"
      >
        <MapPin size={24} />
      </a>
      <a 
        href={`tel:+${phoneNumber}`} 
        className="w-14 h-14 bg-primary-blue text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Call Now"
      >
        <Phone size={24} />
      </a>
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-trust-green text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};
