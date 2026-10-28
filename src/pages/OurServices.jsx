import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Package, Calendar, ShoppingCart, Search, ShoppingBag, Snowflake, CheckCircle } from 'lucide-react';


const OurServices = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Package,
      title: t.services.b2bSupply.title,
      desc: t.services.b2bSupply.desc,
      benefits: t.services.b2bSupply.benefits
    },
    {
      icon: Calendar,
      title: t.services.contract.title,
      desc: t.services.contract.desc,
      benefits: t.services.contract.benefits
    },
    {
      icon: ShoppingCart,
      title: t.services.bulk.title,
      desc: t.services.bulk.desc,
      benefits: t.services.bulk.benefits
    },
    {
      icon: Search,
      title: t.services.sourcing.title,
      desc: t.services.sourcing.desc,
      benefits: t.services.sourcing.benefits
    },
    {
      icon: ShoppingBag,
      title: t.services.disposable.title,
      desc: t.services.disposable.desc,
      benefits: t.services.disposable.benefits
    },
    {
      icon: Snowflake,
      title: t.services.coldChain.title,
      desc: t.services.coldChain.desc,
      benefits: t.services.coldChain.benefits
    }
  ];

  return (
    <>
      <Helmet>
        <title>{isRTL ? 'خدماتنا - صفا البحر' : 'Our Services - SAFA AL BAHAR'}</title>
        <meta name="description" content={t.services.subtitle} />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#001F3F] to-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}
          >
            {t.services.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
            style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}
          >
            {t.services.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-[#0099CC] to-[#001F3F] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#001F3F] mb-4" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
                  {service.desc}
                </p>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#0099CC] flex-shrink-0" />
                      <span style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
};

export default OurServices;