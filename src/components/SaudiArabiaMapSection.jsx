
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
                  <div className="absolute -inset-2 bg-[hsl(var(--secondary))] rounded-full opacity-20 animate-ping"></div>
                  <div className="relative w-8 h-8 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center text-[hsl(var(--secondary))] shadow-lg border-2 border-white group-hover:scale-110 transition-transform">
                    <MapPin size={16} />
                  </div>
                </div>
                
                <div className="mt-2 bg-white px-3 py-1.5 rounded-lg shadow-md border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-center absolute top-full pointer-events-none z-20">
                  <p className="font-bold text-[hsl(var(--primary))] text-sm">{loc.name}</p>
                  <p className="text-xs text-gray-500">{loc.role}</p>
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
