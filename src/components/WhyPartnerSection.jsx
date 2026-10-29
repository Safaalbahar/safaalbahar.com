
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, UtensilsCrossed, Globe2, TrendingUp } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { icon: Building2, value: 1000, suffix: '+', label: "Satisfied Food Service Customers" },
  { icon: UtensilsCrossed, value: 50, suffix: '+', label: "Restaurants & Hotels Partnered" },
  { icon: Globe2, value: 10, suffix: '+', label: "Global Brand Imports" },
  { icon: TrendingUp, value: 100, suffix: '%', label: "Commitment to Growth" }
];

const WhyPartnerSection = () => {
  return (
    <section className="py-20 gradient-bg-primary text-white relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Partner With Us?</h2>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              We bring extensive experience as a food import company with strong relationships across restaurants, hotels, cafés, supermarkets, and wholesale markets.
            </p>
            <ul className="space-y-4">
              {[
                "Professional merchandising support",
                "Multi-channel distribution strategy",
                "Deep market knowledge and insights",
                "High product visibility in premium outlets",
                "Customer-focused service approach"
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0"></div>
                  <span className="font-medium text-white/95">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center hover-lift"
              >
                <div className="inline-flex p-3 rounded-xl bg-amber-400 text-slate-950 mb-4 shadow-md font-bold">
                  <stat.icon size={28} />
                </div>
                <div className="text-3xl font-black text-white mb-2">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-medium text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;
