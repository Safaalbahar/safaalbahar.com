
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Download, FileText, Loader2 } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { FormConstants } from '@/utils/FormConstants';

const CompanyProfileSection = () => {
  const { t, isArabic } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const pdfUrl = FormConstants.COMPANY_PROFILE_URL;

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[hsl(var(--primary))]/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[hsl(var(--secondary))]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4 text-[hsl(var(--primary))] font-semibold">
              <span className="p-2 bg-[hsl(var(--primary))]/10 rounded-lg">
                <FileText className="w-5 h-5" />
              </span>
              <span className="uppercase tracking-wider text-sm">{isArabic ? 'ملف الشركة' : 'Corporate Profile'}</span>
            </div>
            <h2 className="text-[var(--font-size-title)] font-bold text-[hsl(var(--primary))] leading-tight mb-4">
              {isArabic ? 'ملف شركة صفا البحر التجارية' : 'Safa Al Bahar Trading Company Profile'}
            </h2>
            <p className="text-[var(--font-size-subtitle)] text-muted-foreground leading-relaxed">
              {isArabic 
                ? 'اكتشف شركتنا، علاماتنا التجارية، منتجاتنا، شبكة التوزيع لدينا، وحلول الخدمات الغذائية التي نقدمها.'
                : 'Explore our company, brands, products, distribution network, and food service solutions.'}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 w-full lg:w-auto"
          >
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[hsl(var(--primary))] text-white text-[var(--font-size-button)] font-medium rounded-xl hover:bg-[hsl(var(--primary))]/90 transition-all duration-300 shadow-subtle hover:shadow-hover hover:-translate-y-0.5 group"
            >
              <span>{isArabic ? 'فتح في علامة تبويب جديدة' : 'Open in New Tab'}</span>
              <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href={pdfUrl} 
              download 
              className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[hsl(var(--secondary))] text-white text-[var(--font-size-button)] font-medium rounded-xl hover:bg-[hsl(var(--secondary))]/90 transition-all duration-300 shadow-subtle hover:shadow-hover hover:-translate-y-0.5 group"
            >
              <span>{isArabic ? 'تحميل PDF' : 'Download PDF'}</span>
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full rounded-2xl glass-effect border border-border shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden bg-white/50 backdrop-blur-xl"
        >
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-10">
              <Loader2 className="w-10 h-10 text-[hsl(var(--primary))] animate-spin mb-4" />
              <p className="text-muted-foreground font-medium animate-pulse">
                {isArabic ? 'جاري تحميل ملف الشركة...' : 'Loading Company Profile...'}
              </p>
            </div>
          )}
          
          <div className="w-full h-[600px] md:h-[800px] lg:h-[900px] relative bg-white rounded-xl overflow-hidden m-2 md:m-4 shadow-sm border border-border/50">
            {/* We use #view=FitH&pagemode=thumbs to leverage native browser PDF viewer with thumbnails and proper fitting */}
            <iframe 
              src={`${pdfUrl}#view=FitH&pagemode=thumbs`}
              className="w-full h-full border-none rounded-lg bg-white"
              title="Safa Al Bahar Trading Company Profile PDF Viewer"
              onLoad={handleIframeLoad}
              aria-label="Interactive PDF Viewer for Company Profile"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyProfileSection;
