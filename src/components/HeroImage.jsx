import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Snowflake, Truck } from 'lucide-react';

const HeroImage = () => {
  return (
    <div className="relative flex justify-center items-center w-full max-w-lg mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3] w-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85" 
          alt="Safa Al Bahar Premium Food Service Distribution" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs font-bold">
            <Snowflake className="w-4 h-4 text-cyan-400" />
            <span>-18°C Cold Chain Guaranteed</span>
          </div>
          <div className="flex items-center gap-2 bg-amber-400 text-slate-950 px-3 py-1.5 rounded-full text-xs font-extrabold shadow-md">
            <ShieldCheck className="w-4 h-4" />
            <span>SFDA Approved</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroImage;
