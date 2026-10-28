import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service, delay = 0 }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="bg-background rounded-2xl p-6 md:p-8 border border-border card-hover-effect flex flex-col h-full relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-2 bg-secondary h-0 group-hover:h-full transition-all duration-500 ease-out" />
      
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground self-center">{service.title}</h3>
      </div>
      
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed flex-grow">
        {service.description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;