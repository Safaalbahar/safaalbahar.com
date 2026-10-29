
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Download, Calendar, Mail, HeartHandshake as Handshake } from 'lucide-react';

import StrengthsSection from '@/components/StrengthsSection';
import WhyPartnerSection from '@/components/WhyPartnerSection';
import IndustriesServedSection from '@/components/IndustriesServedSection';
import PartnershipModelsSection from '@/components/PartnershipModelsSection';
import WhySaudiArabiaSection from '@/components/WhySaudiArabiaSection';
import BusinessProcessTimeline from '@/components/BusinessProcessTimeline';
import SaudiArabiaMapSection from '@/components/SaudiArabiaMapSection';
import PartnershipEnquiryForm from '@/components/PartnershipEnquiryForm';
import FinalCTASection from '@/components/FinalCTASection';

const DistributionPartnerPage = () => {
  const scrollToForm = () => {
    document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50 w-full flex flex-col">
      <Helmet>
        <title>Distribution Partner | Safa Al Bahar</title>
        <meta name="description" content="Partner with Safa Al Bahar to distribute your food brands across Saudi Arabia. Exclusive distribution, regional rollout, and market expansion services." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[hsl(var(--primary))]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=85" 
            alt="Business distribution port and logistics" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-transparent"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Your Trusted Distribution Partner in Saudi Arabia
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-10 font-medium leading-relaxed">
              Expanding premium global brands across the Kingdom through our verified cold chain and robust nationwide distribution network.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button onClick={scrollToForm} className="bg-amber-400 text-slate-950 hover:bg-amber-300 font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl group">
                <Handshake className="w-5 h-5 group-hover:scale-110 transition-transform text-slate-950" />
                Become Our Partner
              </button>
              <a href="mailto:sales@safaalbahar.com" className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-3 transition-colors border border-white/30 group backdrop-blur-sm">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform text-amber-400" />
                Email Business Dev
              </a>
              <button onClick={scrollToForm} className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-3 transition-colors border border-white/30 group backdrop-blur-sm">
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform text-amber-400" />
                Schedule a Meeting
              </button>
              <a 
                href="/assets/safa-al-bahar-company-profile.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                download
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-3 transition-colors border border-white/30 group backdrop-blur-sm"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform text-amber-400" />
                Company Profile (PDF)
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <WhySaudiArabiaSection />
      <StrengthsSection />
      <WhyPartnerSection />
      <IndustriesServedSection />
      <SaudiArabiaMapSection />
      <PartnershipModelsSection />
      <BusinessProcessTimeline />
      <PartnershipEnquiryForm />
      <FinalCTASection />
      
    </div>
  );
};

export default DistributionPartnerPage;
