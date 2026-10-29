
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Map, Users, Store, Archive, Headphones as Headset, BarChart, Settings, Expand, Factory, Package, Zap, HeartHandshake as Handshake, CheckCircle } from 'lucide-react';

const strengths = [
  { icon: Truck, title: "Direct Importer" },
  { icon: ShieldCheck, title: "Exclusive Brand Distribution" },
  { icon: Map, title: "Nationwide Distribution Network" },
  { icon: Users, title: "HORECA & Food Service Specialist" },
  { icon: Store, title: "Retail & Wholesale Distribution" },
  { icon: Archive, title: "Modern Cold Chain Logistics" },
  { icon: Headset, title: "Dedicated Sales Team" },
  { icon: CheckCircle, title: "Professional Customer Service" },
  { icon: BarChart, title: "Marketing & Brand Development Support" },
  { icon: Settings, title: "Customized Sales Strategy" },
  { icon: Expand, title: "Market Expansion Across Saudi Arabia" },
  { icon: Factory, title: "Reliable Import & Customs Handling" },
  { icon: Package, title: "Warehousing & Inventory Management" },
  { icon: Zap, title: "Fast Order Processing" },
  { icon: Handshake, title: "Long-Term Partnership Approach" }
];

const StrengthsSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-4">Our Competitive Advantages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Leverage our robust infrastructure and market expertise to ensure your brand's success.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="bg-[#0b1e36] text-amber-400 p-3.5 rounded-xl shrink-0 group-hover:scale-110 group-hover:bg-[#002f6c] transition-all duration-300 shadow-sm">
                <item.icon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base md:text-lg leading-tight mb-1 group-hover:text-[#0B3D91] transition-colors">{item.title}</h3>
                <p className="text-xs text-slate-500 font-medium">Enterprise Supply Standard</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
