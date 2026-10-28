
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-20 gradient-bg-secondary text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">Ready to grow your brand in Saudi Arabia?</h2>
          <p className="text-xl md:text-2xl text-[hsl(var(--primary))] font-bold mb-10 bg-white/20 inline-block px-6 py-2 rounded-full">
            Become Our Distribution Partner Today
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:sales@safaalbahar.com"
              className="w-full sm:w-auto bg-white text-[hsl(var(--primary))] hover:bg-gray-100 font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-all hover-lift shadow-lg"
            >
              <Mail size={20} />
              Email Business Development
            </a>
            <a 
              href="https://wa.me/966559977206"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto gradient-bg-accent text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-all hover-lift shadow-lg border border-white/20"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
