import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const AnimatedButton = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  type = 'button' 
}) => {
  const baseClasses = "relative overflow-hidden px-8 py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-offset-2 hover-shine";
  
  const variantClasses = {
    primary: "gradient-primary focus:ring-[hsl(var(--secondary))]",
    secondary: "gradient-gold focus:ring-[hsl(var(--gold))]"
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={cn(baseClasses, variantClasses[variant], className)}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Glossy overlay effect */}
      <div className="absolute inset-0 bg-white/20 translate-y-[-100%] hover:translate-y-[100%] transition-transform duration-700 ease-in-out z-0" />
    </motion.button>
  );
};

export default AnimatedButton;