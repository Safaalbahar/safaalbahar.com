import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const CustomerReachSection = () => {
  return (
    <section className="py-24 relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden shadow-2xl glass-card border-white/50 hover-lift"
            >
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=85" 
                alt="Saudi Arabia Kingdom-Wide Port & Logistics Coverage" 
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--primary))]/60 to-transparent mix-blend-multiply" />
              
              {/* Animated Map Markers */}
              {[
                { top: '30%', left: '40%', delay: 0.5 },
                { top: '50%', left: '60%', delay: 0.7 },
                { top: '65%', left: '35%', delay: 0.9 },
                { top: '45%', left: '80%', delay: 1.1 }
              ].map((pos, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: pos.delay, type: 'spring' }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-float"
                  style={{ top: pos.top, left: pos.left }}
                >
                  <MapPin className="w-8 h-8 text-[hsl(var(--gold))] drop-shadow-lg" fill="currentColor" />
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-4 h-4 bg-[hsl(var(--gold))] rounded-full absolute top-2 -z-10"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground">
                Nationwide <span className="text-gradient-primary">Coverage</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With a state-of-the-art logistics fleet and strategically located distribution centers, we guarantee seamless supply chain operations to every region across the Kingdom of Saudi Arabia.
              </p>
              
              <ul className="space-y-4">
                {['Riyadh & Central Region', 'Jeddah & Western Province', 'Dammam & Eastern Province', 'Northern & Southern Borders'].map((region, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-full bg-[hsl(var(--accent))]/10 flex items-center justify-center shrink-0 group-hover:bg-[hsl(var(--accent))]/20 transition-colors">
                      <MapPin className="w-5 h-5 text-[hsl(var(--accent))]" />
                    </div>
                    <span className="font-bold text-foreground">{region}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomerReachSection;