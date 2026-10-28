
import React from 'react';
import { Helmet } from 'react-helmet';
import AudienceSupportSection from '@/components/AudienceSupportSection';
import TrustIndicator from '@/components/TrustIndicator';
import { motion } from 'framer-motion';

const IndustriesServed = () => {
  return (
    <div className="bg-background w-full">
      <Helmet>
        <title>Industries We Serve | Safa Al Bahar</title>
        <meta name="description" content="Safa Al Bahar is a trusted food supplier for HORECA, retail, supermarkets, and wholesale industries in Saudi Arabia. Providing customized supply and reliable delivery." />
        <meta name="keywords" content="HORECA supplier, restaurant food supplier, hotel food supplier, catering food supplier, wholesale food distributor Saudi Arabia, retail food supplier" />
      </Helmet>

      <section className="pt-32 pb-16 gradient-bg-primary animate-gradient text-center px-4 relative overflow-hidden">
        {/* Updated Background Image with professional banner */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-60 pointer-events-none"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=85')" }}
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TrustIndicator className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm shadow-glow" />
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Industries & Audiences We Empower
            </h1>
            <p className="text-xl text-white/90 font-medium drop-shadow-md">
              Delivering excellence through specialized supply chains for every sector of the food industry across Saudi Arabia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Premium Cards Section */}
      <AudienceSupportSection />

    </div>
  );
};

export default IndustriesServed;
