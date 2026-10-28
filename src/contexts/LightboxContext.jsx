import React, { createContext, useState, useCallback, useEffect } from 'react';
import ImageLightbox from '@/components/ImageLightbox';

export const LightboxContext = createContext();

export const LightboxProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((newImages, startIndex = 0) => {
    setImages(newImages);
    setCurrentIndex(startIndex);
    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setIsOpen(false), []);
  
  const nextImage = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  }, [images.length]);
  
  const previousImage = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('lightbox-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('lightbox-open');
    }
    return () => { 
      document.body.style.overflow = 'unset'; 
      document.body.classList.remove('lightbox-open');
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') previousImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLightbox, nextImage, previousImage]);

  return (
    <LightboxContext.Provider value={{ isOpen, images, currentImageIndex: currentIndex, openLightbox, closeLightbox, nextImage, previousImage }}>
      {children}
      <ImageLightbox 
        isOpen={isOpen} 
        images={images} 
        currentIndex={currentIndex} 
        onClose={closeLightbox} 
        onNext={nextImage} 
        onPrev={previousImage} 
      />
    </LightboxContext.Provider>
  );
};