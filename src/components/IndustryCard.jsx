import React from 'react';
import { motion } from 'framer-motion';
import QuoteRequestButton from './QuoteRequestButton';
import DeliveryBadge from './DeliveryBadge';
import WhatsAppButton from './WhatsAppButton';

const IndustryCard = ({ industry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group flex flex-col md:flex-row bg-card rounded-2xl overflow-hidden border border-border card-hover-effect"
    >
      <div className="md:w-2/5 relative overflow-hidden">
        <img 
          src={industry.image} 
          alt={industry.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 min-h-[250px]"
        />
        <div className="absolute top-4 left-4">
          <DeliveryBadge text="Specialized Supply" />
        </div>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col md:w-3/5">
        <h3 className="text-2xl font-bold text-card-foreground mb-3">{industry.title}</h3>
        <p className="text-muted-foreground mb-6 flex-grow">
          {industry.description}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {industry.highlights.map((highlight, idx) => (
            <div key={idx} className="bg-muted px-4 py-2 rounded-lg text-sm font-medium text-foreground">
              • {highlight}
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          <QuoteRequestButton text="Request Proposal" productName={`${industry.title} Supply`} />
          <WhatsAppButton text="Chat with Us" variant="outline" />
        </div>
      </div>
    </motion.div>
  );
};

export default IndustryCard;