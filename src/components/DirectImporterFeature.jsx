import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, ShieldCheck, Box } from 'lucide-react';
const DirectImporterFeature = () => {
  return <section className="py-24 relative bg-[hsl(var(--primary))] text-white overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-[hsl(var(--secondary))]/30 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30rem] h-[30rem] rounded-full bg-[hsl(var(--accent))]/20 blur-3xl animate-gradient" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-50px"
          }} transition={{
            duration: 0.6,
            ease: "easeOut"
          }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-glow">
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--gold))]" />
              <span className="text-sm font-bold tracking-wide text-white">Why Choose Us</span>
            </motion.div>
            
            <motion.h2 initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-50px"
          }} transition={{
            duration: 0.6,
            delay: 0.1,
            ease: "easeOut"
          }} className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight" style={{
            textAlign: "center"
          }}>Direct Importer &amp; <span className="text-[hsl(var(--gold))]">Distribution Agent</span></motion.h2>
            
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut"
          }} className="text-xl text-white/80 mb-12 leading-relaxed" style={{
            textAlign: "center"
          }}>By eliminating the middleman, we bring premium global food brands directly to the Saudi market. This guarantees exceptional quality control, continuous supply, and highly competitive pricing.</motion.p>

            <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            staggerChildren: 0.15,
            delayChildren: 0.3
          }} className="space-y-6">
              {[{
              icon: Globe2,
              title: "Global Sourcing Network",
              desc: "Partnered with top-tier international manufacturers."
            }, {
              icon: ShieldCheck,
              title: "Uncompromised Quality Control",
              desc: "Strict adherence to international and local food safety standards."
            }, {
              icon: Box,
              title: "Customized Monthly Supply",
              desc: "Inventory managed precisely against your consumption rates."
            }].map((feature, idx) => <motion.div key={idx} initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              ease: "easeOut"
            }} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-[hsl(var(--foreground))] animate-float" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[hsl(var(--gold))] transition-colors">{feature.title}</h4>
                    <p className="text-white/70">{feature.desc}</p>
                  </div>
                </motion.div>)}
            </motion.div>
          </div>

          <motion.div initial={{
          opacity: 0,
          scale: 0.95,
          y: 30
        }} whileInView={{
          opacity: 1,
          scale: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-50px"
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover-lift group">
            <img 
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=85" 
              alt="Premium Quality Meat Cuts & Culinary Selection" 
              className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <span className="text-[hsl(var(--gold))] text-xs font-bold uppercase tracking-widest block mb-1">Guaranteed Sourcing</span>
              <p className="text-white font-bold text-lg leading-snug">Certified Halal & SFDA Compliant Direct Imports</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>;
};
export default DirectImporterFeature;