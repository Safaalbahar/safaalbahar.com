import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Shield, CheckCircle, Award, ClipboardCheck } from 'lucide-react';
import Footer from '@/components/Footer';

const QualityCompliance = () => {
  const { t, isRTL } = useLanguage();

  // Safely access properties with optional chaining and fallback values
  const pageTitle = t?.quality?.title || (isRTL ? 'الجودة والامتثال' : 'Quality & Compliance');
  const pageSubtitle = t?.quality?.subtitle || (isRTL ? 'أعلى معايير السلامة والجودة الغذائية' : 'Highest Standards of Food Safety and Quality');
  
  const foodSafety = {
    title: t?.quality?.foodSafety?.title || (isRTL ? 'سلامة الغذاء' : 'Food Safety'),
    desc: t?.quality?.foodSafety?.desc || (isRTL ? 'نحن نلتزم بأعلى معايير سلامة الغذاء العالمية في كل خطوة من خطوات سلسلة التوريد الخاصة بنا، مما يضمن وصول المنتجات الطازجة والآمنة فقط إلى عملائنا.' : 'We adhere to the highest global food safety standards at every step of our supply chain, ensuring only the freshest and safest products reach our customers.')
  };

  const coldChain = {
    title: t?.quality?.coldChain?.title || (isRTL ? 'معايير سلسلة التبريد' : 'Cold Chain Standards'),
    desc: t?.quality?.coldChain?.desc || (isRTL ? 'نظام متطور لحفظ جودة المنتجات' : 'Advanced system to preserve product quality'),
    features: t?.quality?.coldChain?.features || (isRTL 
      ? ['مراقبة على مدار الساعة', 'تخزين معزول', 'مركبات مبردة', 'تتبع مباشر'] 
      : ['24/7 Monitoring', 'Insulated Storage', 'Refrigerated Vehicles', 'Live Tracking'])
  };

  const certificates = {
    title: t?.quality?.certificates?.title || (isRTL ? 'الشهادات والاعتمادات' : 'Certifications & Accreditations'),
    desc: t?.quality?.certificates?.desc || (isRTL ? 'معتمدون من قبل أبرز المنظمات' : 'Certified by leading organizations'),
    items: t?.quality?.certificates?.items || ['ISO 22000', 'HACCP', 'SFDA Approved', 'Halal Certified']
  };

  const assurance = {
    title: t?.quality?.assurance?.title || (isRTL ? 'عملية ضمان الجودة' : 'Quality Assurance Process'),
    steps: [
      { step: '1', title: t?.quality?.assurance?.step1 || (isRTL ? 'فحص الموردين' : 'Supplier Inspection') },
      { step: '2', title: t?.quality?.assurance?.step2 || (isRTL ? 'استلام وفحص الجودة' : 'Receiving & Quality Check') },
      { step: '3', title: t?.quality?.assurance?.step3 || (isRTL ? 'تخزين متحكم به' : 'Controlled Storage') },
      { step: '4', title: t?.quality?.assurance?.step4 || (isRTL ? 'توزيع آمن' : 'Safe Distribution') }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle} - {isRTL ? 'صفا البحر' : 'SAFA AL BAHAR'}</title>
        <meta name="description" content={pageSubtitle} />
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
            {pageTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
            style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}
          >
            {pageSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Food Safety */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Shield className="w-20 h-20 text-[#0099CC] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-[#001F3F] mb-6" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
              {foodSafety.title}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
              {foodSafety.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cold Chain Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#001F3F] mb-4" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
              {coldChain.title}
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
              {coldChain.desc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coldChain.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <CheckCircle className="w-12 h-12 text-[#0099CC] mx-auto mb-4" />
                <p className="text-gray-700 font-medium" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#001F3F] mb-4" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
              {certificates.title}
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
              {certificates.desc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificates.items.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#001F3F] to-[#003366] rounded-2xl p-8 text-center text-white hover:scale-105 transition-transform duration-300"
              >
                <Award className="w-16 h-16 text-[#0099CC] mx-auto mb-4" />
                <p className="text-lg font-semibold" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
                  {cert}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#001F3F] mb-4" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
              {assurance.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {assurance.steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg text-center relative"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#0099CC] text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <ClipboardCheck className="w-12 h-12 text-[#0099CC] mx-auto mb-4 mt-6" />
                <p className="font-semibold text-[#001F3F]" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default QualityCompliance;