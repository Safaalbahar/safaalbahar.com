import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Beef, Shell, Leaf, Apple, Package, Wheat, Droplets, ThermometerSnowflake, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRODUCT_CATEGORIES, getProductCategoryPath } from '@/config/routes';
import { useTranslation } from '@/hooks/useTranslation';
import { CATEGORY_HIGHRES_IMAGES, CATEGORY_FALLBACK_IMAGES } from '@/data/productImages';

const categoryPresentation = {
  'frozen-meat': { icon: Beef, tag: 'Prime Halal Beef', accent: 'from-amber-500 to-red-600' },
  'frozen-chicken': { icon: Beef, tag: 'Grade-A Poultry', accent: 'from-amber-400 to-orange-500' },
  'frozen-mutton': { icon: Beef, tag: 'Premium Lamb & Mutton', accent: 'from-rose-500 to-red-700' },
  'frozen-seafood': { icon: Shell, tag: 'Wild & Farmed Ocean Fresh', accent: 'from-cyan-500 to-blue-600' },
  'frozen-vegetables': { icon: Leaf, tag: 'IQF Farm Fresh', accent: 'from-emerald-500 to-green-700' },
  'frozen-fruits': { icon: Apple, tag: '100% Pure Berries & Fruits', accent: 'from-pink-500 to-purple-600' },
  'french-fries': { icon: Package, tag: '7mm - 12mm Belgian Cut', accent: 'from-yellow-400 to-amber-600' },
  'rice-grains': { icon: Wheat, tag: 'Aged Royal Basmati', accent: 'from-amber-600 to-yellow-700' },
  'sauces-condiments': { icon: Droplets, tag: 'Professional Kitchen Sauces', accent: 'from-red-500 to-orange-600' },
  'chilled-products': { icon: ThermometerSnowflake, tag: 'Temperature Controlled', accent: 'from-teal-500 to-emerald-600' },
  'dry-food-items': { icon: Package, tag: 'Wholesale Bulk Supply', accent: 'from-slate-600 to-slate-800' }
};

const AnimatedProductCards = () => {
  const { t, isArabic } = useTranslation();

  return (
    <section className="py-24 relative bg-slate-50 dark:bg-slate-900/60 overflow-hidden" id="products">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[hsl(var(--primary))]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(var(--primary))]/10 border border-[hsl(var(--primary))]/20 text-[hsl(var(--primary))] font-extrabold text-xs tracking-wider uppercase mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[hsl(var(--accent))]" />
            <span>{isArabic ? 'تشكيلة منتجات عالمية فاخرة' : 'Global Foodservice Portfolio'}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">
            {isArabic ? 'كتالوج المنتجات المتكامل' : 'Comprehensive Product Categories'}
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {isArabic 
              ? 'توريد أغذية مبردة ومجمدة وجافة فاخرة مباشرة من كبار المنتجين العالميين إلى قطاع الفنادق والمطاعم والتجزئة في المملكة.'
              : 'Directly sourcing premium frozen, chilled, and dry food products for hotels, restaurant chains, catering, and retail across Saudi Arabia.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-7">
          {PRODUCT_CATEGORIES.map((category, idx) => {
            const presentation = categoryPresentation[category.id] || { icon: Package, tag: 'Bulk Supply' };
            const Icon = presentation.icon;
            const bgImage = CATEGORY_HIGHRES_IMAGES[category.id] || CATEGORY_FALLBACK_IMAGES[category.id];

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className="h-full"
              >
                <Link
                  to={getProductCategoryPath(category.id)}
                  className="group relative flex flex-col h-[340px] sm:h-[360px] rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-[0_8px_25px_rgba(15,43,77,0.08)] hover:shadow-[0_20px_40px_rgba(15,43,77,0.18)] transition-all duration-500 bg-slate-950"
                >
                  {/* Photo Background with smooth scale */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${bgImage})` }}
                  />

                  {/* Multi-layered Cinematic Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20 group-hover:via-slate-950/50 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent opacity-80" />

                  {/* Top Badge & Icon */}
                  <div className="relative z-10 p-5 flex items-start justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                      {presentation.tag}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shadow-lg group-hover:bg-[hsl(var(--accent))] group-hover:text-slate-950 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="relative z-10 mt-auto p-6 flex flex-col">
                    <div className="mb-2 h-1 w-10 rounded-full bg-[hsl(var(--accent))] transition-all duration-300 group-hover:w-16" />
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-2 tracking-tight group-hover:text-[hsl(var(--accent))] transition-colors duration-300">
                      {t(category.labelKey)}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed mb-4 font-normal">
                      {isArabic ? 'منتجات ممتازة مخصصة لقطاع التموين والمطاعم' : 'Premium food service grade selections sourced with strict cold chain.'}
                    </p>

                    <div className="flex items-center justify-between text-xs font-bold text-white/90 pt-3 border-t border-white/10 group-hover:text-white transition-colors">
                      <span className="tracking-wide uppercase text-[11px] text-[hsl(var(--accent))]">
                        {isArabic ? 'استكشف المجموعة' : 'Explore Category'}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-[hsl(var(--accent))] group-hover:text-slate-950 transition-all duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                        <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnimatedProductCards;
