
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Target, Ship, Truck } from 'lucide-react';
import TrustIndicator from '@/components/TrustIndicator';
import QuoteRequestButton from '@/components/QuoteRequestButton';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useTranslation } from '@/hooks/useTranslation';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-background w-full flex flex-col">
      <Helmet>
        <title>{t('about.title') || 'About Us'}</title>
        <meta name="description" content={t('about.description') || 'About Safa Al Bahar'} />
      </Helmet>

      <section className="pt-32 pb-20 gradient-bg-primary animate-gradient text-white text-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-60 pointer-events-none"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85')" }}
        />
        
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto px-4 relative z-10"
        >
          <TrustIndicator className="mb-6 bg-white/10 text-white shadow-glow" />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">{t('about.heading') || 'About Us'}</h1>
          <p className="text-2xl text-[hsl(var(--accent-gold))] font-semibold mb-6 drop-shadow-md">{t('about.subheading') || 'Leading Food Supplier'}</p>
          <p className="text-xl opacity-90 drop-shadow-md">{t('about.description') || 'Committed to excellence'}</p>
        </motion.div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">{t('about.sectionTitle') || 'Our Story'}</h2>
              <p className="text-lg text-muted-foreground mb-6" dangerouslySetInnerHTML={{ __html: t('about.p1') || 'Paragraph 1' }} />
              <p className="text-lg text-muted-foreground mb-8" dangerouslySetInnerHTML={{ __html: t('about.p2') || 'Paragraph 2' }} />
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="gradient-bg-secondary glossy-gradient p-4 rounded-xl text-white shadow-lg hover-lift">
                  <div className="text-3xl font-bold text-[hsl(var(--accent-gold))] mb-1">1000+</div>
                  <div className="text-sm font-medium">{t('about.happyClients') || 'Happy Clients'}</div>
                </div>
                <div className="gradient-bg-accent glossy-gradient p-4 rounded-xl text-white shadow-lg hover-lift">
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm font-medium">{t('about.coldChain') || 'Cold Chain'}</div>
                </div>
              </div>

              <div className="flex gap-4">
                <QuoteRequestButton className="gradient-bg-primary text-white shine-effect hover-lift glow-on-hover shadow-glow" />
                <WhatsAppButton className="glass-effect text-foreground hover-lift glow-on-hover" />
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="gradient-bg-primary glossy-gradient p-8 rounded-2xl aspect-square flex flex-col items-center justify-center text-center text-white premium-shadow hover-lift float-animation">
                  <Ship className="w-12 h-12 text-[hsl(var(--accent-gold))] mb-4" />
                  <span className="font-bold">{t('footer.directImporter') || 'Direct Importer'}</span>
                </div>
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85" alt="Logistics and Cold Storage Hub" className="rounded-2xl w-full h-48 object-cover premium-shadow hover-lift" />
              </div>
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=85" alt="Cold Chain Reefer Fleet" className="rounded-2xl w-full h-48 object-cover premium-shadow hover-lift" />
                <div className="gradient-bg-secondary glossy-gradient p-8 rounded-2xl aspect-square flex flex-col items-center justify-center text-center text-white premium-shadow hover-lift float-animation" style={{ animationDelay: '0.5s' }}>
                  <Truck className="w-12 h-12 text-[hsl(var(--accent-gold))] mb-4" />
                  <span className="font-bold">{t('about.coldChain') || 'Cold Chain'}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-bg-primary text-white relative overflow-hidden premium-shadow flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12"
          >
            {t('about.coreValues') || 'Core Values'}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: t('about.qualityControl') || 'Quality', desc: t('about.qualityDesc') || 'Strict guidelines' },
              { icon: Target, title: t('about.reliability') || 'Reliability', desc: t('about.reliabilityDesc') || 'Always on time' },
              { icon: TrustIndicator, title: t('about.customerCare') || 'Care', desc: t('about.customerDesc') || 'Client focused' },
              { icon: Ship, title: t('about.innovation') || 'Innovation', desc: t('about.innovationDesc') || 'Forward thinking' }
            ].map((v, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="glass-effect rounded-2xl p-6 hover-lift float-animation shadow-glow border border-white/20"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {v.icon === TrustIndicator ? (
                  <div className="flex justify-center mb-4"><v.icon className="bg-white/10" /></div>
                ) : (
                  <v.icon className="w-10 h-10 text-[hsl(var(--accent-gold))] mx-auto mb-4" />
                )}
                <h3 className="text-xl font-bold mb-2 text-white">{v.title}</h3>
                <p className="text-white/80">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
