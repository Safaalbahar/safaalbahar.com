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
    { name: "Sadia", category: "Poultry & Chicken" },
    { name: "Americana", category: "Frozen Foods" },
    { name: "McCain", category: "Potatoes & Appetizers" },
    { name: "Lamb Weston", category: "French Fries" },
    { name: "Seara", category: "Meat & Poultry" },
    { name: "Almarai", category: "Dairy & Chilled" },
    { name: "Afia", category: "Oils & Grains" },
    { name: "Goody", category: "Sauces & Condiments" }
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
            {t.home?.trustedSuppliers?.title || "Trusted Global Brand Partners"}
          </h2>
          <p className="text-gray-600 text-lg" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
            {t.home?.trustedSuppliers?.subtitle || "We import and distribute premier international brands across the Kingdom."}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {suppliers.map((supplier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200/80 p-6 flex flex-col items-center justify-center text-center transition-all duration-300 min-h-[120px] group"
            >
              <span className="text-xl font-black text-[#0B2C4D] group-hover:text-amber-600 transition-colors tracking-tight">
                {supplier.name}
              </span>
              <span className="text-xs text-slate-500 font-semibold mt-1">
                {supplier.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
      </div>
    </section>
  );
};

export default TrustedSuppliers;