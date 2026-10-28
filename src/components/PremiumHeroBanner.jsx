
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, HeartHandshake as Handshake, Ship, Award, Smile, Truck, Store, Snowflake, ShieldCheck, CalendarCheck } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import PremiumCTAButton from './PremiumCTAButton';
import HeroBadgeCard from './HeroBadgeCard';
import TrustIndustriesSection from './TrustIndustriesSection';
import AnimatedCounter from './AnimatedCounter';
import { ROUTES } from '@/config/routes';

const PremiumHeroBanner = () => {
  const { isArabic } = useTranslation();

  const badges = [
    {
      icon: Ship,
      title: isArabic ? 'مستورد مباشر' : 'Direct Importer',
      description: isArabic 
        ? 'نقوم باستيراد الأغذية الفاخرة مباشرة لضمان أفضل الأسعار والجودة العالية.' 
        : 'Sourcing premium foods directly to ensure best prices and quality.'
    },
    {
      icon: Award,
      title: isArabic ? 'شريك توزيع حصري' : 'Exclusive Distribution Partner',
      description: isArabic
        ? 'نمثل علامات تجارية عالمية في السوق السعودي بكل فخر.'
        : 'Proudly representing global brands exclusively in the Saudi market.'
    },
    {
      icon: Smile,
      title: isArabic ? '+1000 عميل سعيد' : '1000+ Happy Clients',
      description: isArabic
        ? 'نخدم قاعدة واسعة ومتنامية من العملاء الراضين.'
        : 'Serving a vast and growing base of satisfied B2B clients.'
    },
    {
      icon: Truck,
      title: isArabic ? 'توصيل لكافة أنحاء المملكة' : 'Kingdom-Wide Delivery',
      description: isArabic
        ? 'شبكة لوجستية موثوقة تغطي كافة مناطق المملكة.'
        : 'Reliable logistics network covering all regions of Saudi Arabia.'
    },
    {
      icon: Store,
      title: isArabic ? 'متخصص في المطاعم والتجزئة' : 'HORECA & Retail Specialist',
      description: isArabic
        ? 'حلول مخصصة لقطاع الضيافة ومتاجر التجزئة.'
        : 'Tailored solutions for hospitality and retail sectors.'
    },
    {
      icon: Snowflake,
      title: isArabic ? 'لوجستيات سلسلة التبريد' : 'Cold Chain Logistics',
      description: isArabic
        ? 'الحفاظ على درجات حرارة مثالية من المصدر إلى وجهتك.'
        : 'Maintaining perfect temperatures from source to destination.'
    },
    {
      icon: ShieldCheck,
      title: isArabic ? 'جودة مضمونة' : 'Quality Assured',
      description: isArabic
        ? 'معايير صارمة لمراقبة الجودة في كل مرحلة.'
        : 'Strict quality control standards at every stage.'
    },
    {
      icon: CalendarCheck,
      title: isArabic ? 'توريد شهري مخصص' : 'Customized Monthly Supply',
      description: isArabic
        ? 'خطط توريد مرنة تتناسب مع استهلاكك الشهري.'
        : 'Flexible supply plans aligned with your consumption.'
    }
  ];

  const stats = [
    { end: 1000, suffix: '+', label: isArabic ? 'عميل سعيد' : 'Happy Clients' },
    { end: 500, suffix: '+', label: isArabic ? 'منتج' : 'Products' },
    { end: 100, suffix: '+', label: isArabic ? 'مورد دولي' : 'International Suppliers' },
    { end: 13, suffix: '+', label: isArabic ? 'منطقة' : 'Kingdom-Wide Regions' },
    { end: 24, suffix: '/7', label: isArabic ? 'دعم فني' : 'Customer Support' }
  ];

  return (
    <section className="relative w-full min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Cinematic Warehouse & Cold-Chain Backdrop */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=85")' }}
      />
      
      {/* Deep Royal Navy & Ocean Cyan Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#06152d]/95 via-[#0b2853]/90 to-[#0B7A75]/75 mix-blend-multiply" />
      <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent via-black/40 to-black/80 pointer-events-none" />
      
      {/* Glassmorphism subtle layer */}
      <div className="absolute inset-0 z-0 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col items-center">
        
        {/* Main Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mt-12 mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-[hsl(var(--accent))] font-bold text-sm md:text-base tracking-wide uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--accent))] animate-pulse" />
            {isArabic ? 'التميز في توريد الأغذية' : 'Excellence in Food Supply'}
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] text-gradient-hero">
            {isArabic 
              ? 'شريك التوزيع والمستورد الغذائي الموثوق في المملكة العربية السعودية' 
              : "Saudi Arabia's Trusted Food Importer & Distribution Partner"}
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium max-w-4xl mx-auto leading-relaxed mb-10 text-shadow-sm">
            {isArabic 
              ? 'نقدم منتجات غذائية مجمدة ومبردة وجافة فاخرة في جميع أنحاء المملكة من خلال الاستيراد المباشر والتوزيع الشامل ودعم العملاء المخصص.'
              : 'Delivering premium frozen, chilled, and dry food products across Saudi Arabia through direct importing, nationwide distribution, and dedicated customer support.'}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 flex-wrap">
            <PremiumCTAButton 
              text={isArabic ? 'طلب عرض سعر' : 'Request Quote'}
              icon={ArrowRight}
              variant="primary"
              href={ROUTES.requestQuote}
              className="w-full sm:w-auto min-w-[220px]"
            />
            <PremiumCTAButton 
              text={isArabic ? 'تسوق المنتجات' : 'Shop Products'}
              icon={ShoppingBag}
              variant="secondary"
              href={ROUTES.shop}
              className="w-full sm:w-auto min-w-[220px]"
            />
            <PremiumCTAButton 
              text={isArabic ? 'كن شريك التوزيع لدينا' : 'Become Our Distribution Partner'}
              icon={Handshake}
              variant="tertiary"
              href={ROUTES.distributionPartner}
              className="w-full sm:w-auto min-w-[220px]"
            />
          </div>
        </motion.div>

        {/* Animated Statistics */}
        <div className="w-full max-w-6xl mx-auto glass-card-dark rounded-3xl p-6 md:p-10 mb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-45deg] animate-[float_8s_infinite]" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 relative z-10">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 font-['Inter']">
                  <AnimatedCounter from={0} to={stat.end} duration={2.5} suffix={stat.suffix} />
                </div>
                <div className="text-[hsl(var(--accent))] text-sm md:text-base font-semibold leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Highlight Badges Grid */}
        <div className="w-full mb-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isArabic ? 'لماذا تختار صفا البحر؟' : 'Why Choose Safa Al Bahar?'}
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              {isArabic 
                ? 'نحن نلتزم بتقديم أعلى مستويات الجودة والخدمة لعملائنا في كافة القطاعات.'
                : 'We are committed to delivering the highest levels of quality and service to our clients across all sectors.'}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {badges.map((badge, idx) => (
              <HeroBadgeCard 
                key={idx}
                icon={badge.icon}
                title={badge.title}
                description={badge.description}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Trust Section */}
        <TrustIndustriesSection />

      </div>
    </section>
  );
};

export default PremiumHeroBanner;
