import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { useLightbox } from '@/hooks/useLightbox';
import { CheckCircle, MessageCircle } from 'lucide-react';

const ComingSoonProducts = () => {
  const { isRTL } = useLanguage();
  const { openLightbox } = useLightbox();

  const highlights = [
    "100% Pure Mango",
    "No Added Sugar",
    "Halal Certified",
    "Suitable for Juices, Desserts & Smoothies",
    "Frozen Storage -18°C"
  ];

  const imageUrl = "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=1200&q=85";
  const whatsappLink = "https://wa.me/966559977206?text=Hello%20SAFA%20AL%20BAHAR,%20I%20would%20like%20to%20get%20updates%20on%20the%20Frozen%20Mango%20Pulp%20launch";

  return (
    <>
      <Helmet>
        <title>{isRTL ? 'إطلاق منتجات جديدة - قريباً' : 'New Product Launch - Coming Soon'}</title>
        <meta name="description" content="Discover exciting new products coming soon to Safa Al Bahar." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#1a2a4a] overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center w-full pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6 uppercase tracking-wider"
          >
            {isRTL ? 'إعلان خاص' : 'Special Announcement'}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight"
            style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}
          >
            {isRTL ? 'إطلاق منتجات جديدة – قريباً' : 'New Product Launch – Coming Soon'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}
          >
            {isRTL 
              ? 'نحن بصدد توسيع تشكيلتنا بمنتجات جديدة ومثيرة لتلبية احتياجاتك.' 
              : 'We are expanding our portfolio with exciting new premium products to meet your needs.'}
          </motion.p>
        </div>
      </section>

      {/* Product Card Section */}
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[16px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_-4px_rgba(0,0,0,0.15)] transition-all duration-500 overflow-hidden border border-gray-100"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Product Image Side */}
              <div 
                className="lg:w-2/5 relative bg-gray-100 min-h-[300px] lg:min-h-full cursor-pointer group"
                onClick={() => openLightbox([imageUrl], 0)}
              >
                <img 
                  src={imageUrl} 
                  alt="Safa Al Bahar Frozen Mango Pulp" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Image
                  </span>
                </div>
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-[#C41E3A] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg uppercase tracking-wider">
                    {isRTL ? 'قريباً' : 'Coming Soon'}
                  </span>
                </div>
              </div>

              {/* Product Info Side */}
              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-2">
                  <span className="text-[#0d9488] font-bold text-sm tracking-widest uppercase mb-2 block">
                    {isRTL ? 'فواكه مجمدة فاخرة' : 'Premium Frozen Fruit'}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-4" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
                    Safa Al Bahar Frozen Mango Pulp
                  </h2>
                </div>
                
                <div className="inline-block bg-black/5 border border-black/10 px-4 py-2 rounded-lg font-bold text-[#1a2a4a] text-lg w-max mb-6">
                  Pack Size: 1kg
                </div>

                <p className="text-gray-600 text-lg mb-8 leading-relaxed" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
                  Premium quality 100% pure frozen mango pulp made from carefully selected mangoes. Ideal for juices, smoothies, desserts, ice cream, and food service applications.
                </p>

                {/* Highlights */}
                <div className="mb-10">
                  <h3 className="text-lg font-bold text-[#1a2a4a] mb-4" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
                    {isRTL ? 'مميزات المنتج:' : 'Product Highlights:'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#0d9488] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0d9488] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#0f766e] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}
                >
                  <MessageCircle className="w-6 h-6" />
                  {isRTL ? 'تواصل معنا لتحديثات الإطلاق' : 'Contact Us for Launch Updates'}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ComingSoonProducts;