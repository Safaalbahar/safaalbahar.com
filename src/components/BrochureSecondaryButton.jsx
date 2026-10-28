import React from 'react';
import { FormConstants } from '@/utils/FormConstants';

const BrochureSecondaryButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent("I would like to request a printed company profile copy.");
    window.open(`${FormConstants.WHATSAPP_BASE_URL}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="w-full h-12 mt-4 bg-transparent border-2 border-[#0B2C4D] text-[#0B2C4D] font-bold text-[14px] rounded-lg hover:bg-[#f0f9ff] transition-colors duration-300 flex items-center justify-center hover-shine overflow-hidden"
    >
      <span className="relative z-10">Request Printed Copy</span>
    </button>
  );
};

export default BrochureSecondaryButton;
