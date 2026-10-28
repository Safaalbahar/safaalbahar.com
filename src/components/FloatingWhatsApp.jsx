
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const FloatingWhatsApp = () => {
  const { isRTL } = useLanguage();
  const phoneNumber = '966559977206';
  const message = 'Hello, I would like to inquire about your products';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      // Positioned above the chat widget (which is at bottom-6/bottom-8) and set with highest z-index
      className={`fixed ${isRTL ? 'left-6 md:left-8' : 'right-6 md:right-8'} bottom-[90px] md:bottom-[104px] z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group flex items-center justify-center`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{ position: 'fixed' }}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 bg-[#25D366] rounded-full opacity-30"
      />
      <MessageCircle className="w-8 h-8 relative z-10" />
    </motion.a>
  );
};

export default FloatingWhatsApp;
