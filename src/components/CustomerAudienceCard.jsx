import React from 'react';
import { motion } from 'framer-motion';

const CustomerAudienceCard = ({ item, index }) => {
  const Icon = item.icon;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative h-[320px] rounded-2xl overflow-hidden shadow-premium cursor-pointer transition-all duration-400 hover-lift bg-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/90 via-[hsl(var(--primary))]/50 to-transparent mix-blend-multiply group-hover:opacity-80 transition-opacity duration-300" />
      </div>

      {/* Glass Effect Content Container */}
      <div className="absolute inset-x-4 bottom-4 z-10 glass-effect p-5 rounded-xl transition-all duration-300 group-hover:bg-white/95 group-hover:border-[hsl(var(--accent-gold))]/50">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-lg group-hover:gradient-gold transition-all duration-500 shrink-0">
            <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300 animate-float" />
          </div>
          <h3 className="text-xl font-bold text-[hsl(var(--primary))] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[hsl(var(--primary))] group-hover:to-[hsl(var(--primary-light))] leading-tight">
            {item.title}
          </h3>
        </div>
        
        <p className="text-sm font-medium text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
          {item.desc}
        </p>
      </div>

      {/* Decorative Glow Effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[hsl(var(--accent-gold))] rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-0 pointer-events-none" />
    </motion.div>
  );
};

export default CustomerAudienceCard;