import React from 'react';
import { motion } from 'framer-motion';

const HighlightCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
    >
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-transform duration-300">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-lg font-bold text-card-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default HighlightCard;