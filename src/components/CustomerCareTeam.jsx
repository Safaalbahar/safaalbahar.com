import React from 'react';
import { motion } from 'framer-motion';
import { Headphones as HeadphonesIcon, MessageSquare, Clock, ThumbsUp } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

const CustomerCareTeam = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-24 relative bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground"
            >
              Dedicated <span className="text-gradient-gold">Customer Care</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground mb-10 leading-relaxed"
            >
              Our specialized customer service and sales support teams are at your disposal, ensuring that every inquiry, order, and delivery is handled with absolute precision and care.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                { icon: HeadphonesIcon, title: "24/7 Support Desk" },
                { icon: MessageSquare, title: "Instant WhatsApp Chat" },
                { icon: Clock, title: "Fast Response Time" },
                { icon: ThumbsUp, title: "Dedicated Account Managers" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[hsl(var(--accent))]/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--accent))]/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[hsl(var(--accent))]" />
                  </div>
                  <span className="font-bold text-foreground text-sm">{item.title}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <AnimatedButton variant="primary" onClick={() => openQuoteModal()}>
                Speak to our Team
              </AnimatedButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-10 transform rotate-3" />
            <img 
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=85" 
              alt="Safa Al Bahar Dedicated Client Relations & Support Team" 
              className="relative z-10 w-full h-[550px] object-cover rounded-3xl shadow-2xl border-8 border-white"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CustomerCareTeam;