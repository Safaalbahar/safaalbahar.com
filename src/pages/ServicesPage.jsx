
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Truck, Users, PackageCheck, Anchor, MapPin, BadgeCheck } from 'lucide-react';
import QuoteRequestButton from '@/components/QuoteRequestButton';
import TrustIndicator from '@/components/TrustIndicator';
import { useTranslation } from '@/hooks/useTranslation';

const ServiceCardInline = ({
  service,
  idx
}) => <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }} className="gradient-bg-secondary glossy-gradient rounded-3xl p-8 text-white hover-lift float-animation shadow-lg hover:shadow-glow relative overflow-hidden group" style={{ animationDelay: `${idx * 0.2}s` }}>
    <div className="glass-effect w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-glow transition-transform duration-300 group-hover:scale-110">
      <service.icon className="w-8 h-8 text-[hsl(var(--accent-gold))]" />
    </div>
    <h3 className="text-2xl font-bold mb-4 relative z-10">{service.title}</h3>
    <p className="text-white/80 mb-6 relative z-10">{service.description}</p>
    <ul className="space-y-3 relative z-10">
      {service.benefits.map((benefit, i) => <li key={i} className="flex items-center gap-2 text-sm font-medium">
          <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent-gold))]" />
          {benefit}
        </li>)}
    </ul>
  </motion.div>;
  
const ServicesPage = () => {
  const { t, isArabic } = useTranslation();

  const services = [{
    icon: Users,
    title: t('services.horecaTitle') || 'HORECA Distribution',
    description: t('services.horecaDesc') || 'Specialized delivery and product sizing tailored specifically for hotels, restaurants, and cafes.',
    benefits: isArabic 
      ? ["جودة عالية باستمرار", "خيارات طلب مرنة", "فريق خدمة عملاء خاص"]
      : ["Consistent high quality", "Flexible ordering options", "Special customer service team"]
  }, {
    icon: PackageCheck,
    title: t('services.retailTitle') || 'Retail & Supermarkets',
    description: t('services.retailDesc') || 'Supplying consumer-ready frozen and chilled products for modern retail channels.',
    benefits: isArabic
      ? ["منتجات جاهزة للمستهلك", "دعم توريد الجملة", "شبكة توصيل موثوقة"]
      : ["FMCG ready products", "Bulk supply support", "Reliable delivery network"]
  }, {
    icon: Anchor,
    title: t('services.wholesaleTitle') || 'Wholesale Supply',
    description: t('services.wholesaleDesc') || 'Direct importing capabilities with massive storage enabling highly competitive wholesale distribution.',
    benefits: isArabic
      ? ["أسعار المستورد المباشر", "توريد شهري مخصص", "سعة كميات ضخمة"]
      : ["Direct importer pricing", "Customized monthly supply", "Massive volume capacity"]
  }];

  return <div className="bg-background w-full">
      <Helmet>
        <title>{t('services.title') || 'Services'}</title>
        <meta name="description" content={t('services.subtitle') || 'Our Services'} />
      </Helmet>

      <section className="relative pt-32 pb-24 flex items-center gradient-bg-primary animate-gradient overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=85" alt="Global Supply Chain and Cold Logistics" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-bg-primary opacity-80 mix-blend-multiply" />
        </div>
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <TrustIndicator className="mb-6 bg-white/10 text-white shadow-glow" />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">{t('services.title') || 'Services'}</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 drop-shadow-md">{t('services.subtitle') || 'Delivering Excellence'}</p>
          <QuoteRequestButton className="text-lg px-8 py-4 gradient-bg-accent glossy-gradient shine-effect glow-on-hover text-white hover-lift" />
        </motion.div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t('services.coreServices') || 'Core Services'}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('services.coreDesc') || 'Our tailored food supply solutions.'}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc, idx) => <ServiceCardInline key={idx} service={svc} idx={idx} />)}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-bg-primary text-white border-y border-[hsl(var(--accent-blue))] premium-shadow relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('services.deliveryTitle') || 'Delivery Network'}</h2>
              <p className="text-lg text-white/80 mb-8">{t('services.deliveryDesc') || 'We cover the entire region with specialized transport.'}</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center shrink-0 shadow-glow">
                    <Truck className="text-[hsl(var(--accent-gold))] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold"><span className="text-[hsl(var(--accent-gold))]">{t('services.customSupply') || 'Custom Supply'}</span></h4>
                    <p className="text-white/70">{t('services.customSupplyDesc') || 'Tailored exactly to your needs.'}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center shrink-0 shadow-glow">
                    <BadgeCheck className="text-[hsl(var(--accent-gold))] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{t('services.specialCare') || 'Special Care'}</h4>
                    <p className="text-white/70">{t('services.specialCareDesc') || 'Quality control at every step.'}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative h-[400px] rounded-2xl overflow-hidden premium-shadow border border-white/20 hover-lift group">
              <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=85" alt="Nationwide Cold Chain Fleet Delivery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/90 to-transparent flex items-end p-8">
                <div className="text-white font-bold text-2xl flex items-center gap-2 drop-shadow-md">
                  <MapPin className="w-6 h-6 text-[hsl(var(--accent-gold))]" /> {t('services.nationwide') || 'Nationwide Coverage'}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>;
};

export default ServicesPage;
