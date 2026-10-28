
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Snowflake } from 'lucide-react';

const ProductHeroBanner = ({ title, subtitle, image }) => {
  return (
    <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden rounded-3xl mb-10 group shadow-2xl border border-slate-200/40">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
      
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[hsl(var(--accent))] text-xs font-bold uppercase tracking-wider mb-4 w-fit"
        >
          <Snowflake className="w-3.5 h-3.5" />
          <span>Safa Al Bahar Commercial Foodservice</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 drop-shadow-lg tracking-tight"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="text-base md:text-xl text-slate-200 max-w-2xl font-medium leading-relaxed drop-shadow-md mb-6"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4 text-xs font-semibold text-white/80"
        >
          <span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
            <ShieldCheck className="w-4 h-4 text-[hsl(var(--accent))]" /> SFDA & Halal Certified
          </span>
          <span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
            <Snowflake className="w-4 h-4 text-sky-400" /> -18°C Cold Chain Guaranteed
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductHeroBanner;
