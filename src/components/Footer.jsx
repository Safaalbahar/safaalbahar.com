
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, MessageCircle, ExternalLink, ChevronRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { ROUTES } from '@/config/routes';

const Footer = () => {
  const { t, isArabic } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const ArrowIcon = () => (
    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isArabic ? 'rotate-180' : ''}`} />
  );

  return (
    <footer className="relative shrink-0 w-full footer-gradient pt-16 pb-6 overflow-hidden z-10 border-t-[3px] border-[hsl(var(--footer-gold))]">
      {/* Glossy Premium Overlay */}
      <div className="footer-glossy-overlay"></div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--footer-gold))]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(var(--footer-green))]/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 xl:gap-12 mb-16"
        >
          {/* COLUMN 1 - COMPANY */}
          <motion.div variants={itemVariants}>
            <h3 className="footer-heading">{isArabic ? 'الشركة' : 'Company'}</h3>
            <ul className="space-y-3">
              <li><Link to={ROUTES.about} className="footer-link"><ArrowIcon /> {t('nav.about')}</Link></li>
              <li><Link to={ROUTES.products} className="footer-link"><ArrowIcon /> {t('nav.products')}</Link></li>
              <li><Link to={ROUTES.shop} className="footer-link"><ArrowIcon /> {t('nav.shop')}</Link></li>
              <li><Link to={ROUTES.services} className="footer-link"><ArrowIcon /> {t('nav.services')}</Link></li>
              <li><Link to={ROUTES.industries} className="footer-link"><ArrowIcon /> {t('nav.industries')}</Link></li>
              <li><Link to={ROUTES.distributionPartner} className="footer-link"><ArrowIcon /> {t('nav.distributionPartner')}</Link></li>
            </ul>
          </motion.div>

          {/* COLUMN 2 - CONTACT */}
          <motion.div variants={itemVariants}>
            <h3 className="footer-heading">{isArabic ? 'اتصل بنا' : 'Contact'}</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+966559977206" className="flex items-start gap-3 group text-[14px] md:text-[16px] text-white hover:text-[hsl(var(--footer-gold))] transition-colors duration-300">
                  <Phone className="w-5 h-5 mt-0.5 shrink-0 text-[hsl(var(--footer-gold))] group-hover:scale-110 transition-transform" />
                  <span dir="ltr">+966 55 997 7206</span>
                </a>
              </li>
              <li>
                <a href="mailto:sales@safaalbahar.com" className="flex items-start gap-3 group text-[14px] md:text-[16px] text-white hover:text-[hsl(var(--footer-gold))] transition-colors duration-300">
                  <Mail className="w-5 h-5 mt-0.5 shrink-0 text-[hsl(var(--footer-gold))] group-hover:scale-110 transition-transform" />
                  <span className="break-all">sales@safaalbahar.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[14px] md:text-[16px] text-white">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-[hsl(var(--footer-gold))]" />
                  <span>
                    {isArabic 
                      ? 'المكتب الرئيسي: حي الثروات - الخمرة، جدة 22524، المملكة العربية السعودية' 
                      : 'Jeddah Head Office: Al Sarwath - Al Kumra, As Sarawat, Jeddah 22524, Saudi Arabia'}
                  </span>
                </div>
              </li>
              <li className="pt-2">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[12px] md:text-[14px] font-medium text-[hsl(var(--footer-gold))] hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg border border-white/10">
                  <MapPin className="w-4 h-4" />
                  {isArabic ? 'عرض على خرائط جوجل' : 'View on Google Maps'}
                  <ExternalLink className="w-3 h-3 ml-1 rtl:mr-1 rtl:ml-0" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* COLUMN 3 - QUICK LINKS */}
          <motion.div variants={itemVariants}>
            <h3 className="footer-heading">{isArabic ? 'روابط سريعة' : 'Quick Links'}</h3>
            <ul className="space-y-3">
              <li><Link to={ROUTES.requestQuote} className="footer-link"><ArrowIcon /> {t('common.requestQuote')}</Link></li>
              <li><a href="https://wa.me/966559977206" target="_blank" rel="noopener noreferrer" className="footer-link"><ArrowIcon /> WhatsApp</a></li>
            </ul>
          </motion.div>

          {/* COLUMN 4 - FOLLOW US */}
          <motion.div variants={itemVariants}>
            <h3 className="footer-heading">{isArabic ? 'تابعنا' : 'Follow Us'}</h3>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.instagram.com/safaalbahartrading?igsh=M2VmdXVpbzVwaHVk" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-icon-btn">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/1HJVRsUe66/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-icon-btn">
                <Facebook className="w-5 h-5" />
              </a>
              <span aria-label="LinkedIn profile not configured" title="LinkedIn profile coming soon" className="footer-icon-btn opacity-50 cursor-not-allowed">
                <Linkedin className="w-5 h-5" />
              </span>
              <a href="https://wa.me/966559977206" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="footer-icon-btn">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            
            {/* Optional Company Brief / Brand Note */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-white font-bold text-lg mb-1 tracking-tight">
                {isArabic ? "صفا البحر" : "SAFA AL BAHAR"}
              </h4>
              <p className="text-[hsl(var(--footer-gold))] font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-3">
                {isArabic ? "شركة تجارية" : "Trading Company"}
              </p>
              <p className="text-white/70 text-[12px] md:text-[14px] leading-relaxed">
                {isArabic 
                  ? "شريكك الموثوق في توريد المواد الغذائية وتوزيع قطاع الفنادق والمطاعم في جميع أنحاء المملكة العربية السعودية." 
                  : "Your trusted partner in food supply and HORECA distribution across Saudi Arabia."}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* BOTTOM SECTION */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left rtl:md:text-right"
        >
          <p className="text-white/60 text-[12px] md:text-[14px] font-medium">
            © {new Date().getFullYear()} {isArabic ? 'شركة صفا البحر التجارية. جميع الحقوق محفوظة.' : 'Safa Al Bahar Trading Company. All Rights Reserved.'}
          </p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2">
             <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-[10px] md:text-[11px] font-bold">
               <span className="w-2 h-2 rounded-full bg-[hsl(var(--footer-green))]"></span>
               SFDA Approved
             </div>
             <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-[10px] md:text-[11px] font-bold">
               <span className="w-2 h-2 rounded-full bg-[hsl(var(--footer-gold))]"></span>
               ISO 22000 Certified
             </div>
             <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-[10px] md:text-[11px] font-bold">
               <span className="w-2 h-2 rounded-full bg-sky-400"></span>
               100% Cold Chain Controlled
             </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
