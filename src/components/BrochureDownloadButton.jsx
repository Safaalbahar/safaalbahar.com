import React from 'react';
import { Download, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const BrochureDownloadButton = ({ isLoading, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      type="button"
      className={cn(
        "w-full h-12 bg-[#0B2C4D] text-white font-bold text-[14px] rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none hover-shine hover:shadow-md hover:-translate-y-0.5",
        isLoading ? "" : "hover:bg-[#051e3e]"
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            <Download className="w-5 h-5" />
            Get Brochure
          </>
        )}
      </span>
    </button>
  );
};

export default BrochureDownloadButton;