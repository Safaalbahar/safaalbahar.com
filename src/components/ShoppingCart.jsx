
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useTranslation } from '@/hooks/useTranslation';
import QuoteRequestForm from './QuoteRequestForm';

const ShoppingCart = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const { t, isArabic } = useTranslation();

  return (
    <>
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: isArabic ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: isArabic ? '-100%' : '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed top-0 ${isArabic ? 'left-0' : 'right-0'} h-full w-full sm:w-[400px] bg-card z-[70] shadow-2xl flex flex-col`}
            >
              <div className="p-4 border-b border-border flex items-center justify-between bg-card">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold text-foreground">{t('shop.yourCart')}</h2>
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-bold">
                    {getCartTotal()} {t('shop.items')}
                  </span>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-4">
                    <ShoppingBag className="w-16 h-16 opacity-20" />
                    <p>{t('shop.cartEmpty')}</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="text-primary hover:underline font-medium"
                    >
                      {t('shop.continueShopping')}
                    </button>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex gap-4 p-3 bg-muted/50 rounded-xl border border-border">
                      <div className="w-20 h-20 bg-white rounded-lg overflow-hidden shrink-0 border border-border">
                        <img src={item.image} alt={isArabic && item.nameAr ? item.nameAr : item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-bold text-sm text-foreground line-clamp-2">{isArabic && item.nameAr ? item.nameAr : item.name}</h3>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-muted-foreground hover:text-destructive p-1"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{isArabic && item.categoryAr ? item.categoryAr : item.category}</p>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center bg-card rounded-md border border-border hover:bg-muted"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-medium w-4 text-center text-foreground">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center bg-card rounded-md border border-border hover:bg-muted"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-4 border-t border-border bg-card/50 backdrop-blur-lg">
                  <div className="flex justify-between mb-4 text-foreground font-medium">
                    <span>{t('shop.totalQuantity')}</span>
                    <span>{getCartTotal()} {t('shop.items')}</span>
                  </div>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      setIsQuoteModalOpen(true);
                    }}
                    className="w-full gradient-bg-primary text-white py-3.5 rounded-xl font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    {t('common.submitQuote')} {isArabic ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <QuoteRequestForm isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
};

export default ShoppingCart;
