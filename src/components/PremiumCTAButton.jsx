
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PremiumCTAButton = ({ 
  text, 
  icon: Icon, 
  variant = 'primary', 
  href, 
  onClick, 
  className = '' 
}) => {
  const baseClasses = "relative overflow-hidden rounded-xl font-bold flex items-center justify-center gap-3 px-8 py-4 transition-all duration-300 lift-hover z-10 group";
  
  const getVariantClasses = () => {
    switch(variant) {
      case 'primary':
        return "gradient-blue text-white glow-primary";
      case 'secondary':
        return "gradient-green text-white glow-secondary";
      case 'tertiary':
        return "gradient-gold text-[hsl(var(--primary))] glow-accent";
      default:
        return "bg-white text-[hsl(var(--primary))] glow-white";
    }
  };

  const content = (
    <>
      {/* Glossy overlay effect */}
      <span className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-50 pointer-events-none rounded-xl" />
      {/* Shine animation on hover */}
      <span className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:animate-[shine_0.6s_ease-out_forwards] pointer-events-none" />
      
      <span className="relative z-10 text-base md:text-lg tracking-wide">{text}</span>
      {Icon && <Icon className="w-5 h-5 relative z-10 transition-transform group-hover:scale-110 rtl-flip" />}
    </>
  );

  if (href) {
    return (
      <Link to={href} className={`${baseClasses} ${getVariantClasses()} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseClasses} ${getVariantClasses()} ${className}`}
    >
      {content}
    </motion.button>
  );
};

export default PremiumCTAButton;
