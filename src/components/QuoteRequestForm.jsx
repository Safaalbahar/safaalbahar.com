
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/customSupabaseClient';
import { useTranslation } from '@/hooks/useTranslation';

const QuoteRequestForm = ({ isOpen, onClose }) => {
  const { cart, clearCart } = useCart();
  const { toast } = useToast();
  const { t, isArabic } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    deliveryAddress: '',
    remarks: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const payload = {
        to: 'sales@safaalbahar.com',
        formType: 'Cart Quote Request',
        ...formData,
        products: cart.map(item => ({
          name: isArabic && item.nameAr ? item.nameAr : item.name,
          quantity: item.quantity,
          category: item.category
        }))
      };

      const { data, error } = await supabase.functions.invoke('send-quote-request', {
        body: JSON.stringify(payload)
      });

      if (error) throw error;

      toast({
        title: t('common.success'),
        description: isArabic ? "تم إرسال طلب عرض السعر الخاص بك إلى فريق المبيعات." : "Your quote request has been sent to our sales team.",
      });
      
      clearCart();
      onClose();
    } catch (error) {
      toast({
        variant: "destructive",
        title: t('common.error'),
        description: isArabic ? "فشل إرسال طلب السعر. يرجى المحاولة مرة أخرى." : "Failed to send quote request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            className="bg-card w-full max-w-2xl rounded-2xl shadow-2xl relative z-10 max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-card z-20 border-b border-border p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">{t('common.requestQuote')}</h2>
              <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t('forms.companyName')}</label>
                  <input required name="companyName" value={formData.companyName} onChange={handleChange} className="w-full bg-input text-foreground border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-2.5" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t('forms.contactPerson')}</label>
                  <input required name="contactPerson" value={formData.contactPerson} onChange={handleChange} className="w-full bg-input text-foreground border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-2.5" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t('forms.email')}</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-input text-foreground border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-2.5" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">{t('forms.phone')}</label>
                  <input required name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-input text-foreground border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-2.5" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">{t('forms.deliveryAddress')}</label>
                <textarea required name="deliveryAddress" value={formData.deliveryAddress} onChange={handleChange} className="w-full bg-input text-foreground border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-2.5 min-h-[80px]" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">{t('forms.remarks')}</label>
                <textarea name="remarks" value={formData.remarks} onChange={handleChange} className="w-full bg-input text-foreground border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-2.5 min-h-[80px]" />
              </div>

              <div className="bg-muted p-4 rounded-xl">
                <h3 className="font-bold text-foreground mb-2">{t('shop.quoteItems')} ({cart.length})</h3>
                <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.quantity}x {isArabic && item.nameAr ? item.nameAr : item.name}</span>
                      <span className="text-muted-foreground text-xs">{item.category}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border flex justify-end gap-3">
                <button type="button" onClick={onClose} className="px-6 py-2.5 rounded-lg font-medium text-foreground hover:bg-muted transition-colors">
                  {t('common.cancel')}
                </button>
                <button type="submit" disabled={isSubmitting} className="gradient-bg-primary text-white px-8 py-2.5 rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center gap-2">
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  {t('forms.submitRequest')}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuoteRequestForm;
