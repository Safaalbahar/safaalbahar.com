
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useTranslation } from '@/hooks/useTranslation';
import ProductImage from '@/components/ProductImage';

const ProductQuickPreview = ({ product, isOpen, onClose, onQuoteRequest }) => {
  const { addToCart } = useCart();
  const { t, isArabic } = useTranslation();

  if (!product) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Stock': return 'text-green-600 bg-green-100';
      case 'Limited Stock': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-red-600 bg-red-100';
    }
  };
  
  const getStatusText = (status) => {
    switch(status) {
      case 'In Stock': return t('common.inStock');
      case 'Limited Stock': return t('common.limitedStock');
      default: return t('common.outOfStock');
    }
  };

  const displayName = isArabic && product.nameAr ? product.nameAr : product.name;
  const displayDescription = isArabic && product.descriptionAr ? product.descriptionAr : product.description;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-card w-full max-w-3xl rounded-2xl shadow-2xl relative z-10 overflow-hidden flex flex-col md:flex-row"
          >
            <button
              onClick={onClose}
              className={`absolute top-4 ${isArabic ? 'left-4' : 'right-4'} z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors`}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full md:w-1/2 bg-muted relative aspect-[4/3] md:aspect-auto h-64 md:h-auto">
              <ProductImage src={product.image} categoryId={product.categoryId} priority />
            </div>

            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {product.category}
                </span>
                <span className={`text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1 ${getStatusColor(product.status)}`}>
                  {product.status === 'In Stock' ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                  {getStatusText(product.status)}
                </span>
              </div>
              
              <h2 className="text-2xl font-extrabold text-foreground mb-3">{displayName}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                {displayDescription}
                <br/><br/>
                {isArabic 
                  ? 'مثالي لشركات البيع بالجملة وخدمات التموين والمطاعم. نضمن معايير جودة عالية ولوجستيات سلسلة تبريد صارمة للتوصيل في جميع أنحاء المملكة العربية السعودية.'
                  : 'Perfect for wholesale, catering, and HORECA businesses. We ensure high-quality standards and strict cold chain logistics for delivery across Saudi Arabia.'
                }
              </p>

              <div className="flex gap-3 mt-auto">
                <button
                  disabled={product.status === 'Out of Stock'}
                  onClick={() => {
                    addToCart(product);
                    onClose();
                  }}
                  className="flex-1 gradient-bg-primary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 transition-opacity"
                >
                  <ShoppingBag className="w-4 h-4" />
                  {t('common.addToCart')}
                </button>
                <button
                  onClick={() => {
                    onQuoteRequest(product);
                    onClose();
                  }}
                  className="flex-1 bg-secondary/10 hover:bg-secondary/20 text-primary py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors border border-primary/20"
                >
                  <FileText className="w-4 h-4" />
                  {t('common.requestQuote')}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductQuickPreview;
