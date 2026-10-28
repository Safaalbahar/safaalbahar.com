
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Utensils, 
  Coffee, 
  ChefHat, 
  ShoppingCart, 
  Store, 
  Warehouse, 
  Factory 
} from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const TrustIndustriesSection = () => {
  const { isArabic } = useTranslation();

  const industries = [
    { icon: Building, label: isArabic ? 'فنادق' : 'Hotels' },
    { icon: Utensils, label: isArabic ? 'مطاعم' : 'Restaurants' },
    { icon: Coffee, label: isArabic ? 'مقاهي' : 'Cafés' },
    { icon: ChefHat, label: isArabic ? 'شركات تموين' : 'Catering Companies' },
    { icon: ShoppingCart, label: isArabic ? 'سوبر ماركت' : 'Supermarkets' },
    { icon: Store, label: isArabic ? 'سلاسل تجزئة' : 'Retail Chains' },
    { icon: Warehouse, label: isArabic ? 'أسواق جملة' : 'Wholesale Markets' },
    { icon: Factory, label: isArabic ? 'مصانع أغذية' : 'Food Manufacturers' },
  ];

  return (
    <div className="w-full pt-16 pb-8">
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-white/70 font-bold tracking-widest uppercase text-sm mb-8"
      >
        {isArabic ? 'القطاعات التي نخدمها بكل فخر' : 'PROUDLY SERVING THESE INDUSTRIES'}
      </motion.h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {industries.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center p-4 glass-effect rounded-xl lift-hover group"
          >
            <item.icon className="w-8 h-8 text-[hsl(var(--accent))] mb-3 opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="text-white text-xs font-semibold text-center leading-tight">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrustIndustriesSection;
