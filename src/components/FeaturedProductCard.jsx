
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getQuotePath, getShopCategoryPath } from '@/config/routes';
import { useTranslation } from '@/hooks/useTranslation';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const FeaturedProductCard = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const fallbackImage = 'https://images.unsplash.com/photo-1586201375761-83865001e31c';
  const displayImage = product.image || fallbackImage;

  const handleShopNow = (e) => {
    e.stopPropagation();
    navigate(getShopCategoryPath(product.categoryId));
  };

  const handleRequestQuote = (e) => {
    e.stopPropagation();
    navigate(getQuotePath(product.categoryId, product.name));
  };

  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col h-full bg-card rounded-xl overflow-hidden shadow-[var(--card-shadow)] hover-lift border border-border group"
    >
      <div className="portrait-image-container bg-muted cursor-pointer shrink-0" onClick={handleShopNow}>
        <img 
          src={displayImage} 
          alt={product.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={(e) => { e.target.src = fallbackImage; }}
          className={`transition-transform duration-500 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        {product.badge && (
          <div className={`absolute top-3 left-3 text-white px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm z-10 ${product.badge === 'FROZEN' ? 'bg-gradient-to-r from-blue-600 to-cyan-500' : 'bg-gradient-to-r from-orange-500 to-amber-400'}`}>
            {product.badge}
          </div>
        )}
      </div>

      <div className="flex flex-col p-4 flex-grow justify-between bg-card z-10">
        <div className="cursor-pointer mb-4" onClick={handleShopNow}>
          <h3 className="text-[15px] font-bold text-card-foreground leading-tight line-clamp-1 mb-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-[13px] text-muted-foreground font-medium line-clamp-2 leading-snug">
            {product.packSize || product.description}
          </p>
        </div>

        <div className="flex gap-2 shrink-0 mt-auto">
          <button
            onClick={handleShopNow}
            className="w-1/2 flex items-center justify-center gap-1.5 bg-secondary/10 hover:bg-secondary/20 text-secondary-foreground text-xs font-bold py-2.5 rounded-lg transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            {t('common.shopNow')}
          </button>
          <button
            onClick={handleRequestQuote}
            className="w-1/2 flex items-center justify-center gap-1.5 gradient-bg-primary text-white text-xs font-bold py-2.5 rounded-lg shadow-sm hover:opacity-90 transition-opacity glossy-gradient"
          >
            <FileText className="w-3.5 h-3.5" />
            {t('common.requestQuote')}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProductCard;
