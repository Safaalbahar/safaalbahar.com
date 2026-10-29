import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/config/routes';

const MenuPreview = React.forwardRef((props, ref) => {
  const [sectionRef, isInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const navigate = useNavigate();

  const setRefs = node => {
    sectionRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  return <section ref={setRefs} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8
        }} className="order-2 md:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Safa Al Bahar Premium Food Portfolio" src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85" />
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="order-1 md:order-2">
            <span className="text-amber-600 font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
              Premium Food Service
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B2C4D] mb-6 leading-tight">
              Certified Global
              <br />
              Food Categories
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              We supply top-tier international brands and directly imported meats, seafood, poultry, french fries, and essential dry goods to the Kingdom's leading hospitality leaders.
            </p>
            <Button onClick={() => navigate(ROUTES.products)} className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-3 rounded-xl shadow-lg">
              Explore Products
            </Button>
          </motion.div>
        </div>
      </div>
    </section>;
});
export default MenuPreview;
