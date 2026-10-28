
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PRODUCT_CATEGORIES, ROUTES, getProductCategoryPath } from '@/config/routes';
import { useTranslation } from '@/hooks/useTranslation';

const categoryImages = {
  'frozen-meat': 'https://images.unsplash.com/photo-1599997264119-24dc1d7d41b1?w=300&q=80',
  'frozen-seafood': 'https://images.unsplash.com/photo-1674066620896-04c854bada51?w=300&q=80',
  'frozen-vegetables': 'https://images.unsplash.com/photo-1689343785998-f5759843e3de?w=300&q=80',
  'french-fries': 'https://images.unsplash.com/photo-1584378868074-1ebfd5a636c7?w=300&q=80'
};

const RelatedProductsSection = ({ currentCategoryPath }) => {
  const { t } = useTranslation();
  const displayCategories = PRODUCT_CATEGORIES
    .filter(({ id }) => categoryImages[id])
    .map(category => ({ ...category, path: getProductCategoryPath(category.id), image: categoryImages[category.id] }))
    .filter(cat => cat.path !== currentCategoryPath)
    .slice(0, 3);

  return (
    <section className="py-16 border-t border-border mt-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Related Categories</h2>
        <Link to={ROUTES.products} className="text-[hsl(var(--primary))] font-semibold flex items-center gap-1 hover:underline">
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayCategories.map((cat, idx) => (
          <Link key={idx} to={cat.path}>
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative h-48 rounded-xl overflow-hidden group shadow-sm hover:shadow-hover"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${cat.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-bold text-lg group-hover:text-[hsl(var(--accent))] transition-colors">
                {t(cat.labelKey)}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedProductsSection;
