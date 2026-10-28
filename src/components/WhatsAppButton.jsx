import React from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const WhatsAppButton = ({ 
  text = "WhatsApp Inquiry", 
  className,
  variant = 'solid'
}) => {
  const whatsappNumber = "966559977206";
  const message = "Hi Safa Al Bahar, I'm interested in your frozen food products and delivery services. Can you provide more information?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover-shine",
        variant === 'solid' 
          ? "bg-[#25D366] text-white hover:bg-[#1da851] shadow-lg hover:shadow-xl hover:-translate-y-0.5" 
          : "border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white",
        className
      )}
    >
      <MessageCircle className="w-5 h-5 relative z-10" />
      <span className="relative z-10">{text}</span>
    </a>
  );
};

export default WhatsAppButton;