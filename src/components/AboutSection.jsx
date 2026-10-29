import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ShieldCheck, Award, Truck } from 'lucide-react';

const AboutSection = React.forwardRef((props, ref) => {
  const [sectionRef, isInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const setRefs = node => {
    sectionRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  return (
    <section ref={setRefs} className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={isInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-600 font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
              Safa Al Bahar Trading Company
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B2C4D] mb-6 leading-tight">
              Excellence in Food Importation & Nationwide Distribution
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Safa Al Bahar is an established leader in global food trade, providing premium frozen meats, poultry, seafood, french fries, and dry goods to leading hotels, restaurants, catering companies, and wholesale markets across Saudi Arabia.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              We operate an end-to-end temperature-controlled supply chain with strategic hubs in Jeddah, Madinah, and Yanbu, guaranteeing consistent cold-chain integrity, SFDA compliance, and dependable on-time delivery.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-xs font-bold text-slate-800">Cold Chain Fleet</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-xs font-bold text-slate-800">SFDA & Halal</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-xs font-bold text-slate-800">HORECA Partner</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={isInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                alt="Safa Al Bahar Global Food Distribution" 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
