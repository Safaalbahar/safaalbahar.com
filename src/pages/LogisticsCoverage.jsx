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

          <div className="bg-gray-100 rounded-2xl p-6 md:p-12 mb-12">
            <div className="flex items-center justify-center bg-white rounded-xl border-2 border-dashed border-gray-300 p-4 md:p-8 overflow-hidden group min-h-[300px] md:min-h-[500px]">
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                src="https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/597a26cee0ba2d7d44efa2bdde83c4aa.png" 
                alt="Saudi Arabia Logistics Coverage Map"
                className="max-w-full max-h-[450px] object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
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