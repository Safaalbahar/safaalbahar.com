
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const locations = [
  { name: "Jeddah", role: "Head Office & Main Hub", top: "55%", left: "20%", delay: 0.2 },
  { name: "Makkah", role: "Key Distribution Area", top: "58%", left: "25%", delay: 0.4 },
  { name: "Madinah", role: "Branch & Distribution", top: "42%", left: "22%", delay: 0.6 },
  { name: "Yanbu", role: "Branch Office", top: "45%", left: "15%", delay: 0.8 },
  { name: "Riyadh", role: "Distribution Hub", top: "48%", left: "60%", delay: 1.0 },
  { name: "Dammam", role: "Eastern Province Hub", top: "40%", left: "80%", delay: 1.2 }
];

const SaudiArabiaMapSection = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--primary))] mb-4">Nationwide Coverage</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Strategic branches and distribution networks spanning across the Kingdom of Saudi Arabia.</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-xl border border-gray-100 min-h-[600px] flex items-center justify-center">
          {/* Abstract Map Background Simulation */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/eb/Saudi_Arabia_location_map.svg')] bg-contain bg-no-repeat bg-center m-10 pointer-events-none filter grayscale"></div>
          
          <div className="absolute inset-0 p-10">
            {locations.map((loc, idx) => (
              <motion.div 
                key={idx}
                className="absolute flex flex-col items-center group cursor-pointer"
                style={{ top: loc.top, left: loc.left }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: loc.delay, type: "spring", stiffness: 120 }}
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-amber-400 rounded-full opacity-30 animate-ping"></div>
                  <div className="relative w-9 h-9 bg-[#0b1e36] rounded-full flex items-center justify-center text-amber-400 shadow-xl border-2 border-amber-400 group-hover:scale-110 transition-transform">
                    <MapPin size={18} />
                  </div>
                </div>
                
                <div className="mt-2 bg-[#0b1e36]/95 backdrop-blur-md px-3 py-1 rounded-lg shadow-lg border border-amber-400/30 whitespace-nowrap text-center transition-all duration-300 group-hover:scale-105">
                  <p className="font-bold text-white text-xs">{loc.name}</p>
                  <p className="text-[10px] text-amber-300 font-medium">{loc.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaudiArabiaMapSection;
