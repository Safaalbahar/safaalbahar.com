
import React from 'react';
import { motion } from 'framer-motion';

const HeroBadgeCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-effect p-6 rounded-2xl lift-hover flex flex-col h-full group"
    >
      <div className="w-12 h-12 rounded-xl gradient-blue flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2 leading-tight">
        {title}
      </h3>
      <p className="text-white/80 text-sm leading-relaxed flex-grow">
        {description}
      </p>
    </motion.div>
  );
};

export default HeroBadgeCard;
