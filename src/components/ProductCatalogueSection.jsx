import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useLightbox } from '@/hooks/useLightbox';
import { FormConstants } from '@/utils/FormConstants';

const ProductCatalogueSection = () => {
  const { isRTL } = useLanguage();
  const { openLightbox } = useLightbox();
  const catalogueUrl = FormConstants.COMPANY_PROFILE_URL;

  const features = [
    isRTL ? "مواصفات تفصيلية للمنتجات" : "Detailed product specifications",
    isRTL ? "معلومات التعبئة والتغليف" : "Packaging & logistics info",
    isRTL ? "إرشادات التخزين" : "Storage guidelines",
    isRTL ? "تشكيلة منتجات هوريكا الكاملة" : "Complete HORECA range"
  ];

  return (
    <section className="py-16 gradient-bg-primary animate-gradient border-b border-white/10 relative overflow-hidden text-white">
      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-effect rounded-3xl premium-shadow p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="flex-1 text-center lg:text-left" style={{ textAlign: isRTL ? 'right' : undefined }}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white font-bold text-sm mb-6 shadow-glow float-animation ${isRTL ? 'flex-row-reverse' : ''}`}>
              <FileText className="w-4 h-4" />
              {isRTL ? 'تحديث 2026' : 'Updated 2026'}
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
              {isRTL ? 'كتالوج المنتجات' : 'Product Catalogue'}
            </h2>
            
            <p className="text-lg text-white/90 mb-8 max-w-2xl font-medium" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
              {isRTL 
                ? 'قم بتنزيل كتالوج منتجاتنا الشامل مع المواصفات التفصيلية وخيارات التعبئة والتسعير.' 
                : 'Download our complete product catalogue with detailed specifications and pricing for our entire HORECA range.'}
            </p>

            <div className={`flex flex-wrap gap-4 justify-center lg:justify-start ${isRTL ? 'flex-row-reverse' : ''}`}>
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.6 }}
                  className={`flex items-center gap-2 text-sm font-bold text-white bg-white/10 px-4 py-2 rounded-xl ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent-gold))]" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 w-full lg:w-auto flex flex-col items-center">
            <a
              href={catalogueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-center gap-3 gradient-bg-accent glossy-gradient shine-effect glow-on-hover text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-400 hover-lift w-full sm:w-auto ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <Download className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300 float-animation" />
              <span className="relative z-10">{isRTL ? 'تنزيل الكتالوج' : 'Download Catalogue'}</span>
            </a>
            <span className="mt-4 text-sm font-bold text-white/80 bg-black/20 px-4 py-1.5 rounded-full">
              PDF - 2.5 MB
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCatalogueSection;
