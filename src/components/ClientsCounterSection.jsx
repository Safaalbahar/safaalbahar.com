
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Package, Globe, Truck, Headphones as Headset } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const AnimatedCounter = ({ from = 0, to, duration = 2.5, suffix = '' }) => {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || to === undefined) return;
    
    let startTime;
    let animationFrame;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * (to - from) + from);
      
      if (nodeRef.current) {
        nodeRef.current.textContent = current;
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount);
      } else {
        if (nodeRef.current) nodeRef.current.textContent = to;
      }
    };

    animationFrame = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, from, to, duration]);

  if (to === undefined) return null;

  return (
    <span className="inline-flex items-center">
      <span ref={nodeRef}>{from}</span>
      {suffix && <span className="ml-1 text-[hsl(var(--accent))]">{suffix}</span>}
    </span>
  );
};

const ClientsCounterSection = () => {
  const { isArabic } = useTranslation();

  const stats = [
    { 
      icon: Users, 
      to: 2000, 
      suffix: "+", 
      label: isArabic ? "عميل سعيد" : "Happy Clients" 
    },
    { 
      icon: Package, 
      to: 1000, 
      suffix: "+", 
      label: isArabic ? "منتج" : "Products" 
    },
    { 
      icon: Globe, 
      to: 100, 
      suffix: "+", 
      label: isArabic ? "مورد دولي" : "International Suppliers" 
    },
    { 
      icon: Truck, 
      isText: true, 
      textValue: isArabic ? "شامل" : "Kingdom-Wide", 
      label: isArabic ? "توزيع على مستوى المملكة" : "Kingdom-Wide Distribution" 
    },
    { 
      icon: Headset, 
      to: 24, 
      suffix: "/7", 
      label: isArabic ? "دعم العملاء" : "Customer Support" 
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-20 gradient-bg-primary animate-gradient border-y border-[hsl(var(--accent-blue))] relative overflow-hidden text-white premium-shadow">
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 xl:gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={`glass-card-dark p-6 xl:p-8 rounded-2xl flex flex-col items-center justify-center text-center group lift-hover transition-all duration-300 border border-white/10 hover:border-white/20 h-full hover:brightness-110 ${idx === 4 ? 'col-span-2 md:col-span-1 md:col-start-2 xl:col-span-1 xl:col-start-auto' : ''}`}
            >
              <div className="w-16 h-16 xl:w-20 xl:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-500">
                <stat.icon className="w-10 h-10 xl:w-12 xl:h-12 text-[hsl(var(--accent))]" />
              </div>
              
              <div className="text-4xl md:text-5xl xl:text-6xl font-black text-white mb-3 flex items-center justify-center min-h-[4rem]">
                {stat.isText ? (
                  <span className="text-[hsl(var(--accent))] text-2xl md:text-3xl xl:text-4xl px-2">
                    {stat.textValue}
                  </span>
                ) : (
                  <AnimatedCounter to={stat.to} suffix={stat.suffix} />
                )}
              </div>
              
              <h3 className="text-sm md:text-base font-bold text-white/90 uppercase tracking-widest leading-snug group-hover:text-white transition-colors mt-auto">
                {stat.label}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsCounterSection;
