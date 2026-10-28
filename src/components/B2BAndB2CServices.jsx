import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Store, Home, ArrowRight } from 'lucide-react';
const B2BAndB2CServices = () => {
  return <section className="py-24 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Side */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: "-50px"
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="relative">
            <div className="absolute inset-0 bg-gradient-gold rounded-3xl blur-2xl opacity-20 transform -rotate-3" />
            <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=85" alt="Safa Al Bahar Dedicated Cold Chain Delivery Truck Fleet" className="relative z-10 rounded-3xl shadow-2xl object-cover h-[500px] w-full border-4 border-white hover-lift" />
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.4,
            duration: 0.6
          }} className="absolute -bottom-6 -right-6 glass-effect p-6 rounded-2xl z-20 flex items-center gap-4 bg-white/90 backdrop-blur-md border border-white hover-lift">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white">
                <Truck className="w-6 h-6 animate-float" />
              </div>
              <div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Fast Delivery</p>
                <p className="text-xl font-black text-foreground">Kingdom-Wide</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div className="flex flex-col justify-center">
            <motion.div initial={{
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
            ease: "easeOut"
          }}>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground" style={{
              textAlign: "center"
            }}>Dedicated <span className="text-gradient-primary">B2B &amp; B2C</span> Logistics</h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed" style={{
              textAlign: "center"
            }}>Whether you're stocking a nationwide restaurant chain or running a local grocery store, our robust delivery network ensures your products arrive fresh, on time, every time.</p>
            </motion.div>

            <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true,
            margin: "-50px"
          }} transition={{
            staggerChildren: 0.2
          }} className="space-y-6">
              {/* B2B Card */}
              <motion.div initial={{
              opacity: 0,
              x: 50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              ease: "easeOut"
            }} whileHover={{
              scale: 1.02
            }} className="glass-card p-6 rounded-2xl border-l-4 border-l-[hsl(var(--primary))] flex gap-5 items-start group hover:shadow-premium transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-[hsl(var(--primary))]/10 flex items-center justify-center shrink-0 group-hover:bg-[hsl(var(--primary))] transition-colors">
                  <Store className="w-7 h-7 text-[hsl(var(--primary))] group-hover:text-white transition-colors animate-float" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                    B2B Wholesale & Retail Supply
                    <ArrowRight className="w-4 h-4 text-[hsl(var(--primary))] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Massive volume capabilities tailored for HORECA, supermarkets, hotels, and regional wholesalers with customized delivery schedules.
                  </p>
                </div>
              </motion.div>

              {/* B2C Card */}
              <motion.div initial={{
              opacity: 0,
              x: 50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.2
            }} whileHover={{
              scale: 1.02
            }} className="glass-card p-6 rounded-2xl border-l-4 border-l-[hsl(var(--accent))] flex gap-5 items-start group hover:shadow-premium transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-[hsl(var(--accent))]/10 flex items-center justify-center shrink-0 group-hover:bg-[hsl(var(--accent))] transition-colors">
                  <Home className="w-7 h-7 text-[hsl(var(--accent))] group-hover:text-white transition-colors animate-float" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                    B2C Direct Delivery
                    <ArrowRight className="w-4 h-4 text-[hsl(var(--accent))] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Reliable direct-to-consumer delivery services ensuring households get premium restaurant-quality food delivered to their doorstep.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>;
};
export default B2BAndB2CServices;