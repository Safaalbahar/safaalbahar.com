import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { useLightbox } from '@/hooks/useLightbox';

const ComingSoonDistributionProducts = () => {
  const { isRTL } = useLanguage();
  const { openLightbox } = useLightbox();

  const products = [
    {
      id: 1,
      name: "Allana Frozen Totapuri Mango Pulp",
      nameAr: "لب مانجو توتابوري مجمد من ألانا",
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Jain FarmFresh Frozen Totapuri Mango Pulp",
      nameAr: "لب مانجو توتابوري مجمد من جاين فارم فريش",
      image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Barzan Malabar Paratha",
      nameAr: "برزان براتا ملبار",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "McCain Crispy French Fries",
      nameAr: "بطاطس مقلية مقرمشة من ماكين",
      image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Seara Chicken Strips",
      nameAr: "شرائح دجاج سيارا",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "OHH! Potato French Fries",
      nameAr: "بطاطس مقلية أوه!",
      image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const productImages = products.map(p => p.image);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block bg-[#0099CC]/10 text-[#0099CC] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
            {isRTL ? 'إطلاق جديد' : 'New Launch'}
          </div>
          <h2 
            className="text-3xl md:text-[40px] font-bold text-[#1a2a4a] mb-4 leading-tight"
            style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}
          >
            {isRTL ? 'قريباً: منتجات التوزيع الجديدة لدينا' : 'Coming Soon: Our New Distribution Products'}
          </h2>
          <p 
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}
          >
            {isRTL 
              ? 'اكتشف مجموعتنا المتميزة من التوابل والزيوت والمنتجات المتخصصة ذات الجودة العالية.'
              : 'Discover our premium range of spices, oils, and specialty products.'}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
            >
              <div className="p-4 md:p-5">
                <div 
                  className="relative aspect-square w-full rounded-lg overflow-hidden bg-gray-50 mb-4 cursor-pointer"
                  onClick={() => openLightbox(productImages, index)}
                >
                  <div className="absolute top-2 left-2 z-10 bg-gradient-to-r from-[#1a2a4a] to-[#0099CC] text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm uppercase tracking-wider">
                    {isRTL ? 'قريباً' : 'Soon'}
                  </div>
                  <img
                    src={product.image}
                    alt={isRTL ? product.nameAr : product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Image
                    </span>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 
                    className="text-lg font-bold text-[#1a2a4a] line-clamp-1 group-hover:text-[#0099CC] transition-colors duration-300"
                    style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}
                    title={isRTL ? product.nameAr : product.name}
                  >
                    {isRTL ? product.nameAr : product.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoonDistributionProducts;