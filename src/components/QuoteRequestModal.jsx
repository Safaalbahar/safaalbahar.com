import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';
import { useQuoteModal } from '@/contexts/QuoteModalContext';
import { useFormValidation } from '@/hooks/useFormValidation';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/components/ui/use-toast';

const validationSchema = {
  company_name: ['required'],
  contact_person: ['required'],
  email: ['required', 'email'],
  phone: ['required', 'phone']
};

const QuoteRequestModal = () => {
  const { isOpen, closeQuoteModal, modalData } = useQuoteModal();
  const { toast } = useToast();
  
  const { values, errors, handleChange, validateForm, resetForm, setValues } = useFormValidation({
    company_name: '',
    contact_person: '',
    email: '',
    phone: '',
    products_interested: '',
    quantity_volume: '',
    special_requirements: ''
  }, validationSchema);

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (modalData?.productName && values.products_interested !== modalData.productName) {
        setValues(prev => ({ ...prev, products_interested: modalData.productName }));
      }
    } else {
      if (values.company_name !== '' || values.email !== '') {
        resetForm();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, modalData?.productName]); 

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      // 1. Save to Database
      const { error: dbError } = await supabase
        .from('quote_requests')
        .insert([values]);
        
      if (dbError) throw dbError;

      // 2. Route email directly to sales@safaalbahar.com
      const payload = {
        to: 'sales@safaalbahar.com',
        formType: 'Quote Request',
        pageSource: 'QuoteRequestModal',
        senderName: values.company_name,
        senderEmail: values.email,
        senderPhone: values.phone,
        message: `Products: ${values.products_interested}\nVolume: ${values.quantity_volume}\nNotes: ${values.special_requirements}`,
        formData: values
      };

      const { error: emailError } = await supabase.functions.invoke('send-form-email', {
        body: payload
      });
      if (emailError) throw emailError;
      
      toast({
        title: "Quote Request Sent!",
        description: "Our customer service team will contact you shortly.",
      });
      closeQuoteModal();
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was an error sending your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeQuoteModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-full max-w-2xl bg-card rounded-2xl shadow-2xl z-[101] max-h-[90vh] flex flex-col overflow-hidden border border-border"
          >
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-border bg-primary text-primary-foreground">
              <h2 className="text-lg md:text-xl font-bold">Request a B2B/B2C Quote</h2>
              <button onClick={closeQuoteModal} className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 md:p-6 overflow-y-auto custom-scrollbar">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 text-foreground">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-1">Company Name *</label>
                    <input type="text" name="company_name" value={values.company_name} onChange={handleChange} className="w-full px-4 py-3 md:py-2.5 rounded-lg border border-input focus:ring-2 focus:ring-ring outline-none bg-background text-base" />
                    {errors.company_name && <p className="text-destructive text-xs mt-1">{errors.company_name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Contact Person *</label>
                    <input type="text" name="contact_person" value={values.contact_person} onChange={handleChange} className="w-full px-4 py-3 md:py-2.5 rounded-lg border border-input focus:ring-2 focus:ring-ring outline-none bg-background text-base" />
                    {errors.contact_person && <p className="text-destructive text-xs mt-1">{errors.contact_person}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Business Email *</label>
                    <input type="email" name="email" value={values.email} onChange={handleChange} className="w-full px-4 py-3 md:py-2.5 rounded-lg border border-input focus:ring-2 focus:ring-ring outline-none bg-background text-base" />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Phone Number *</label>
                    <input type="tel" name="phone" value={values.phone} onChange={handleChange} className="w-full px-4 py-3 md:py-2.5 rounded-lg border border-input focus:ring-2 focus:ring-ring outline-none bg-background text-base" />
                    {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-1">Products Interested In</label>
                    <input type="text" name="products_interested" value={values.products_interested} onChange={handleChange} placeholder="e.g. Frozen Meat, French Fries" className="w-full px-4 py-3 md:py-2.5 rounded-lg border border-input focus:ring-2 focus:ring-ring outline-none bg-background text-base" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-1">Estimated Quantity/Volume</label>
                    <input type="text" name="quantity_volume" value={values.quantity_volume} onChange={handleChange} placeholder="e.g. 500kg per month" className="w-full px-4 py-3 md:py-2.5 rounded-lg border border-input focus:ring-2 focus:ring-ring outline-none bg-background text-base" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-1">Special Requirements</label>
                    <textarea name="special_requirements" value={values.special_requirements} onChange={handleChange} rows="3" placeholder="Locations, delivery days, etc." className="w-full px-4 py-3 md:py-2.5 rounded-lg border border-input focus:ring-2 focus:ring-ring outline-none resize-none bg-background text-base" />
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border flex flex-col-reverse md:flex-row justify-end gap-3 mt-2">
                  <button type="button" onClick={closeQuoteModal} className="px-6 py-3 min-h-[44px] rounded-lg font-medium text-muted-foreground hover:bg-muted transition-colors text-base">
                    Cancel
                  </button>
                  <button type="submit" disabled={isSubmitting} className="px-6 py-3 min-h-[44px] rounded-lg font-medium bg-primary text-primary-foreground hover:opacity-90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-base shadow-md">
                    {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuoteRequestModal;
