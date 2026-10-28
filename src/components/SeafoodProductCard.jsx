
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

const SeafoodProductCard = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const fallbackImage = 'https://images.unsplash.com/photo-1615141982883-c7da0e69f591';
  const displayImage = product.image || fallbackImage;

  const handleShopNow = (e) => {
    e.stopPropagation();
    navigate(getShopCategoryPath('frozen-seafood'));
  };

  const handleRequestQuote = (e) => {
    e.stopPropagation();
    navigate(getQuotePath('frozen-seafood', product.name));
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
        <div className="absolute top-3 left-3 bg-blue-100/90 text-blue-800 text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider backdrop-blur-sm z-10">
          Seafood
        </div>
      </div>

      <div className="flex flex-col p-4 flex-grow justify-between bg-card z-10">
        <div className="cursor-pointer mb-4" onClick={handleShopNow}>
          <h3 className="text-[15px] font-bold text-card-foreground leading-tight line-clamp-1 mb-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-[13px] text-muted-foreground font-medium line-clamp-2 leading-snug">
            {product.description}
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
            className="w-1/2 flex items-center justify-center gap-1.5 bg-[#C41E3A] hover:bg-[#a01830] text-white text-xs font-bold py-2.5 rounded-lg shadow-sm transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            {t('common.requestQuote')}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SeafoodProductCard;
