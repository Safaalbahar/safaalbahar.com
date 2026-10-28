import React from 'react';
import { motion } from 'framer-motion';
import { Eye, FileText, Globe2, Heart, Package, ShieldCheck, ShoppingBag } from 'lucide-react';
import ProductImage from '@/components/ProductImage';
import { useCart } from '@/contexts/CartContext';
import { useQuoteModal } from '@/contexts/QuoteModalContext';
import { useTranslation } from '@/hooks/useTranslation';

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
};

const ShopProductCard = ({ product, onPreview }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const { openQuoteModal } = useQuoteModal();
  const { isArabic, t } = useTranslation();
  const isWished = isInWishlist(product.id);
  const displayName = isArabic && product.nameAr ? product.nameAr : product.name;
  const displayDescription = isArabic && product.descriptionAr ? product.descriptionAr : product.description;

  const statusClass = product.status === 'In Stock'
    ? 'bg-emerald-500'
    : product.status === 'Limited Stock'
      ? 'bg-amber-500'
      : 'bg-red-500';

  const handleQuote = () => openQuoteModal({
    productName: displayName,
    categoryId: product.categoryId
  });

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative flex h-full min-h-[570px] w-full flex-col overflow-hidden rounded-2xl border border-[hsl(var(--accent))]/35 bg-white shadow-[0_12px_32px_rgba(15,43,77,0.09)] transition-[box-shadow,border-color] duration-300 hover:border-[hsl(var(--accent))]/70 hover:shadow-[0_22px_50px_rgba(15,43,77,0.17)]"
    >
      <div className="absolute right-3 top-3 z-30 flex flex-col gap-2 rtl:left-3 rtl:right-auto">
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/60 shadow-md backdrop-blur-md transition-colors ${isWished ? 'bg-red-50 text-red-500' : 'bg-white/90 text-slate-600 hover:text-red-500'}`}
          aria-label="Toggle Wishlist"
        >
          <Heart className={`h-4 w-4 ${isWished ? 'fill-current' : ''}`} />
        </button>
        <button
          type="button"
          onClick={() => onPreview(product)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/90 text-slate-700 opacity-100 shadow-md backdrop-blur-md transition-all hover:text-[hsl(var(--primary))] md:translate-x-3 md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100 rtl:md:-translate-x-3 rtl:md:group-hover:translate-x-0"
          aria-label="Quick Preview"
        >
          <Eye className="h-4 w-4" />
        </button>
      </div>

      <button
        type="button"
        onClick={() => onPreview(product)}
        className="relative h-60 w-full shrink-0 overflow-hidden rounded-t-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[hsl(var(--primary))]"
        aria-label={`Preview ${displayName}`}
      >
        <ProductImage src={product.image} categoryId={product.categoryId} />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/60 to-transparent" aria-hidden="true" />
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-[hsl(var(--primary))]/90 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white shadow-lg backdrop-blur-md rtl:left-auto rtl:right-3">
          <ShieldCheck className="h-3.5 w-3.5 text-[hsl(var(--accent))]" />
          {product.brand}
        </span>
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-extrabold text-slate-800 shadow-md rtl:left-auto rtl:right-3">
          <span className={`h-2 w-2 rounded-full ${statusClass}`} />
          {product.status || 'Available'}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className={`line-clamp-2 min-h-[3.25rem] text-lg font-extrabold leading-snug text-slate-900 transition-colors group-hover:text-[hsl(var(--primary))] ${isArabic ? 'font-[Cairo]' : 'font-[Inter]'}`}>
            {displayName}
          </h3>
          <span className="mt-1 shrink-0 rounded-md bg-[hsl(var(--accent))]/20 px-2 py-1 text-[10px] font-extrabold uppercase tracking-wide text-[hsl(var(--primary))]">
            {product.category.split(' ')[0]}
          </span>
        </div>
        <p className="mb-4 line-clamp-2 min-h-10 text-sm leading-relaxed text-slate-600">{displayDescription}</p>

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
            disabled={product.status === 'Out of Stock'}
            onClick={() => addToCart(product)}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[hsl(var(--primary))] px-3 text-xs font-extrabold text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-45"
          >
            <ShoppingBag className="h-4 w-4" />
            {t('common.shopNow')}
          </button>
          <button
            type="button"
            onClick={handleQuote}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[hsl(var(--accent))]/70 bg-gradient-to-r from-[hsl(var(--secondary))] to-emerald-600 px-3 text-xs font-extrabold text-white shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            <FileText className="h-4 w-4" />
            {t('common.requestQuote')}
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default ShopProductCard;
