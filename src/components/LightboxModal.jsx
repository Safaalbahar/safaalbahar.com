import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const LightboxModal = ({ isOpen, images, currentIndex, onClose, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate('next');
      if (e.key === 'ArrowLeft') onNavigate('prev');
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNavigate]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && images && images.length > 0 && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center lightbox-overlay">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/90"
            onClick={onClose}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full h-full flex items-center justify-center p-4 md:p-12 pointer-events-none"
          >
            <img 
              src={images[currentIndex]} 
              alt={`View ${currentIndex + 1}`}
              className="lightbox-image max-w-full max-h-full object-contain rounded-sm pointer-events-auto select-none"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>

          <button 
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-2 md:p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-all shadow-lg"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {images.length > 1 && (
            <>
              <button 
                onClick={() => onNavigate('prev')}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-all shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
              </button>
              
              <button 
                onClick={() => onNavigate('next')}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-all shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
              </button>
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white font-medium bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm md:text-base tracking-wide shadow-lg">
                {currentIndex + 1} of {images.length}
              </div>
            </>
          )}
        </div>
      )}
    </AnimatePresence>
  );
};

export default LightboxModal;