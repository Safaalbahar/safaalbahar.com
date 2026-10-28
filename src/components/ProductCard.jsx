import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Globe2, Package, ShieldCheck, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProductImage from '@/components/ProductImage';
import { useQuoteModal } from '@/contexts/QuoteModalContext';
import { useTranslation } from '@/hooks/useTranslation';
import { ROUTES, getShopCategoryPath } from '@/config/routes';
import { shopProducts } from '@/data/shopProducts';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { openQuoteModal } = useQuoteModal();
  const { t } = useTranslation();

  const hasShopInventory = shopProducts.some(item => item.categoryId === product.category);
  const handleShopNow = () => navigate(hasShopInventory ? getShopCategoryPath(product.category) : ROUTES.shop);
  const handleQuote = () => openQuoteModal({
    productName: product.name,
    categoryId: product.category
  });

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative flex h-full min-h-[540px] flex-col overflow-hidden rounded-2xl border border-[hsl(var(--accent))]/35 bg-white shadow-[0_12px_32px_rgba(15,43,77,0.09)] transition-[box-shadow,border-color] duration-300 hover:border-[hsl(var(--accent))]/70 hover:shadow-[0_22px_50px_rgba(15,43,77,0.17)]"
    >
      <div className="pointer-events-none absolute inset-x-5 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

      <button
        type="button"
        onClick={handleShopNow}
        className="relative h-56 w-full shrink-0 overflow-hidden rounded-t-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[hsl(var(--primary))]"
        aria-label={`${t('common.shopNow')}: ${product.name}`}
      >
        <ProductImage src={product.image} categoryId={product.category} />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/55 to-transparent" aria-hidden="true" />
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-[hsl(var(--primary))]/90 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white shadow-lg backdrop-blur-md rtl:left-auto rtl:right-3">
          <ShieldCheck className="h-3.5 w-3.5 text-[hsl(var(--accent))]" />
          {product.brand}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-[hsl(var(--secondary))] to-[hsl(var(--accent))]" />
        <h3 className="mb-2 line-clamp-2 min-h-[3.25rem] text-lg font-extrabold leading-snug text-slate-900 transition-colors group-hover:text-[hsl(var(--primary))]">
          {product.name}
        </h3>
        <p className="mb-4 line-clamp-2 min-h-10 text-sm leading-relaxed text-slate-600">
          {product.description}
        </p>

        <div className="mb-5 mt-auto grid grid-cols-2 gap-2 rounded-xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-emerald-50/50 p-3">
          <div className="min-w-0">
            <span className="mb-1 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-slate-500">
              <Globe2 className="h-3.5 w-3.5 text-[hsl(var(--secondary))]" /> {t('common.origin')}
            </span>
            <span className="block truncate text-xs font-extrabold text-slate-800" title={product.origin}>{product.origin}</span>
          </div>
          <div className="min-w-0 border-s border-slate-200 ps-3">
            <span className="mb-1 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-slate-500">
              <Package className="h-3.5 w-3.5 text-[hsl(var(--primary))]" /> {t('common.packSize')}
            </span>
            <span className="block truncate text-xs font-extrabold text-slate-800" title={product.packSize}>{product.packSize}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={handleShopNow}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[hsl(var(--primary))] px-3 text-xs font-extrabold text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary))] focus-visible:ring-offset-2"
          >
            <ShoppingBag className="h-4 w-4" />
            {t('common.shopNow')}
          </button>
          <button
            type="button"
            onClick={handleQuote}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[hsl(var(--accent))]/70 bg-gradient-to-r from-[hsl(var(--secondary))] to-emerald-600 px-3 text-xs font-extrabold text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--secondary))] focus-visible:ring-offset-2"
          >
            <FileText className="h-4 w-4" />
            {t('common.requestQuote')}
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
