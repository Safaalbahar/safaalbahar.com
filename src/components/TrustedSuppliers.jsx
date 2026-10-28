import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { useInView } from '@/hooks/useInView';

const TrustedSuppliers = () => {
  const { t, isRTL } = useLanguage();
  const [ref, isInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const suppliers = [
    {
      name: t.home.trustedSuppliers.names.sadia,
      image: "https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/21223a4209b5f577a9d778c4e24c25b1.png"
    },
    {
      name: t.home.trustedSuppliers.names.arjan,
      image: "https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/7f10416cd501d0b3f01fdcd1dea7ff84.png"
    },
    {
      name: t.home.trustedSuppliers.names.afia,
      image: "https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/66c83a394287daf9bc39b05e5e65b3c7.png"
    },
    {
      name: t.home.trustedSuppliers.names.arabi,
      image: "https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/d66df5d40c7d242e8f696933ac411723.png"
    },
    {
      name: t.home.trustedSuppliers.names.americana,
      image: "https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/9443387d66e8c386acdc496b93a60e21.png"
    },
    {
      name: t.home.trustedSuppliers.names.goody,
      image: "https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/894cfbc532b9ade680f9e08261b55b0d.png"
    },
    {
      name: t.home.trustedSuppliers.names.hushy,
      image: "https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/470ae8c3341460a2e60f4c88c60e91b1.png"
    },
    {
      name: t.home.trustedSuppliers.names.almarai,
      image: "https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/be9f3d78667a9b8d0dec79b0c7722bed.png"
    }
  ];

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
            {t.home.trustedSuppliers.title}
          </h2>
          <p className="text-gray-600 text-lg" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
            {t.home.trustedSuppliers.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {suppliers.map((supplier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="bg-white rounded-xl shadow-md p-6 h-32 flex items-center justify-center transition-all duration-200"
            >
              <img 
                src={supplier.image} 
                alt={supplier.name}
                className="max-w-full max-h-full object-contain filter hover:brightness-110 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSuppliers;