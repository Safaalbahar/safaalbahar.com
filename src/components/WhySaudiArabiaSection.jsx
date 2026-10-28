
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Activity, PieChart, LineChart } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const WhySaudiArabiaSection = () => {
  return (
    <section className="py-20 gradient-bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[hsl(var(--secondary))] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Market Opportunities in Saudi Arabia</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">Aligning with Vision 2030, the Saudi food and beverage sector is experiencing unprecedented growth.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: TrendingUp, val: 54, suffix: 'B', prefix: '$', label: "Food Market Size by 2025" },
            { icon: Activity, val: 6.5, suffix: '%', label: "Annual HORECA Growth Rate" },
            { icon: PieChart, val: 80, suffix: '%', label: "Imported Food Dependency" },
            { icon: LineChart, val: 300, suffix: '+', label: "New Retail Outlets Yearly" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="mx-auto w-16 h-16 bg-[hsl(var(--secondary))] rounded-full flex items-center justify-center text-[hsl(var(--primary))] mb-6">
                <stat.icon size={32} />
              </div>
              <h3 className="text-4xl font-black mb-2 flex items-center justify-center gap-1">
                {stat.prefix}<AnimatedCounter to={stat.val} suffix={stat.suffix} />
              </h3>
              <p className="text-white/80 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySaudiArabiaSection;
