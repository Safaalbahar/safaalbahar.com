
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/config/routes';
import { useTranslation } from '@/hooks/useTranslation';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Professional Food Service Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1570890178293-32c6736fa013")' }}
        role="img"
        aria-label="Professional food service spread"
      />
      
      {/* Primary to Secondary Gradient Overlay (40-60% Opacity) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[hsl(var(--primary))]/60 to-[hsl(var(--secondary))]/50" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left flex flex-col items-center lg:items-start pt-16 md:pt-0">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-white headline-hero mb-4 drop-shadow-lg max-w-4xl"
        >
          Professional Food Service Solutions
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
          className="text-white/90 subheadline-hero mb-8 drop-shadow-md max-w-2xl"
        >
          Premium supplies for hotels, restaurants & catering
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          className="flex flex-col md:flex-col lg:flex-row gap-4 w-full md:w-auto items-center"
        >
          {/* Accent Gold Button */}
          <Link 
            to={ROUTES.products}
            className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-8 py-3.5 rounded-lg btn-text-hero hover:bg-[#b5952f] transition-all duration-300 hover:-translate-y-1 shadow-lg w-full lg:w-auto"
          >
            Explore Products
          </Link>
          
          {/* Transparent Outline Button */}
          <Link 
            to={ROUTES.requestQuote}
            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-lg btn-text-hero hover:bg-white hover:text-[hsl(var(--primary))] transition-all duration-300 hover:-translate-y-1 shadow-lg w-full lg:w-auto"
          >
            {t('common.requestQuote')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
