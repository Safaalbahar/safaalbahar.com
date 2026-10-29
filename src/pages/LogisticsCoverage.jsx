import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { MapPin, Truck, Clock, Snowflake, Thermometer } from 'lucide-react';

const LogisticsCoverage = () => {
  const { t, isRTL } = useLanguage();

  const cities = [
    { name: t.logistics.coverage.jeddah, isHQ: true },
    { name: t.logistics.coverage.madinah },
    { name: t.logistics.coverage.yanbu }
  ];

  return (
    <>
      <Helmet>
        <title>{isRTL ? 'الخدمات اللوجستية والتغطية - صفا البحر' : 'Logistics & Coverage - SAFA AL BAHAR'}</title>
        <meta name="description" content={t.logistics.subtitle} />
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
            {t.logistics.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
            style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}
          >
            {t.logistics.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#001F3F] mb-4" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
              {t.logistics.coverage.title}
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
              {t.logistics.coverage.desc}
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-[#001F3F] to-[#003366] rounded-3xl p-6 md:p-12 mb-12 shadow-2xl overflow-hidden relative text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.15),transparent_50%)]"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80" 
                  alt="Safa Al Bahar Modern Cold Chain Logistics and Warehousing Facility"
                  className="w-full h-[320px] md:h-[420px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <Snowflake className="w-3.5 h-3.5" />
                  Active Temperature Telemetry
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                  Kingdom-Wide Cold Chain Infrastructure
                </h3>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">
                  Our dedicated fleet of dual-compartment refrigerated vehicles maintains strict thermal integrity (-18°C frozen to +4°C chilled) from customs release to your kitchen doors.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15">
                    <p className="text-2xl font-black text-amber-400">100%</p>
                    <p className="text-xs text-white/80 font-medium">SFDA Certified Cold Chain</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15">
                    <p className="text-2xl font-black text-amber-400">24/7</p>
                    <p className="text-xs text-white/80 font-medium">IoT Thermal Monitoring</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15">
                    <p className="text-2xl font-black text-amber-400">&lt; 24h</p>
                    <p className="text-xs text-white/80 font-medium">Western Province Express</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15">
                    <p className="text-2xl font-black text-amber-400">3 Hubs</p>
                    <p className="text-xs text-white/80 font-medium">Jeddah, Madinah, Yanbu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {cities.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`w-full sm:w-64 p-6 rounded-xl text-center ${
                  city.isHQ 
                    ? 'bg-gradient-to-br from-[#0099CC] to-[#001F3F] text-white shadow-2xl' 
                    : 'bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-100'
                }`}
              >
                <MapPin className={`w-8 h-8 mx-auto mb-3 ${city.isHQ ? 'text-white' : 'text-[#0099CC]'}`} />
                <p className={`font-semibold ${city.isHQ ? 'text-white' : 'text-[#001F3F]'}`} style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
                  {city.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <Truck className="w-16 h-16 text-[#0099CC] mb-4" />
              <h3 className="text-3xl font-bold text-[#001F3F] mb-4" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
                {t.logistics.delivery.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
                {t.logistics.delivery.desc}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-[#0099CC]" />
                  <span style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>{t.logistics.delivery.regular}</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <Truck className="w-5 h-5 text-[#0099CC]" />
                  <span style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>{t.logistics.delivery.express}</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-[#0099CC]" />
                  <span style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>{t.logistics.delivery.timing}</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#001F3F] to-[#003366] rounded-2xl p-8 shadow-lg text-white"
            >
              <Snowflake className="w-16 h-16 text-[#0099CC] mb-4" />
              <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
                {t.logistics.coldStorage.title}
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
                {t.logistics.coldStorage.desc}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Thermometer className="w-5 h-5 text-[#0099CC]" />
                  <span style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>{t.logistics.coldStorage.frozen}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Thermometer className="w-5 h-5 text-[#0099CC]" />
                  <span style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>{t.logistics.coldStorage.chilled}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-[#0099CC]" />
                  <span style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>{t.logistics.coldStorage.transport}</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogisticsCoverage;