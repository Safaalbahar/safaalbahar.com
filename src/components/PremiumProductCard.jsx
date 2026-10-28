
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getShopCategoryPath } from '@/config/routes';
import { useTranslation } from '@/hooks/useTranslation';
import ProductImage from '@/components/ProductImage';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const PremiumProductCard = ({ image, name, category, categoryId, description, productName }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const actualProductName = productName || name;
  const whatsappUrl = `https://wa.me/966559977206?text=${encodeURIComponent(`Hi, I'm interested in ${actualProductName}. Please provide more details and pricing.`)}`;

  const handleShopNow = (e) => {
    e.stopPropagation();
    navigate(getShopCategoryPath(categoryId));
  };

  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col h-full bg-gray-900 rounded-xl overflow-hidden shadow-[var(--card-shadow)] hover-lift border border-gray-800 group"
    >
      <div className="portrait-image-container bg-gray-800 cursor-pointer shrink-0" onClick={handleShopNow}>
        <ProductImage src={image} categoryId={categoryId} />
        <div className="absolute top-3 left-3 bg-[hsl(var(--accent-gold))] text-[hsl(var(--primary))] text-[10px] font-black px-2 py-1 rounded shadow-md uppercase tracking-wider z-10">
          {category || 'Premium'}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent pointer-events-none" />
      </div>

      <div className="flex flex-col p-4 flex-grow justify-between bg-gray-900 z-10 border-t border-white/10">
        <div className="cursor-pointer mb-4" onClick={handleShopNow}>
          <h3 className="text-[15px] font-bold text-white leading-tight line-clamp-1 mb-1 group-hover:text-[hsl(var(--accent-gold))] transition-colors">
            {name}
          </h3>
          <p className="text-[13px] text-gray-400 font-medium line-clamp-2 leading-snug">
            {description}
          </p>
        </div>

        <div className="flex gap-2 shrink-0 mt-auto">
          <button
            onClick={handleShopNow}
            className="w-1/2 flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-2.5 rounded-lg transition-colors border border-white/5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            {t('common.shopNow')}
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 flex items-center justify-center gap-1.5 bg-[hsl(var(--accent-gold))] text-[hsl(var(--primary))] hover:brightness-110 text-xs font-bold py-2.5 rounded-lg shadow-sm transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            {t('common.requestQuote')}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PremiumProductCard;
