
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/hooks/use-toast';
import { Send, Loader2 } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const PartnershipEnquiryForm = () => {
  const { toast } = useToast();
  const { t, isArabic } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    country: '',
    brandName: '',
    website: '',
    productCategories: '',
    annualExportCapacity: '',
    partnershipType: '',
    contactPerson: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('distribution_inquiries')
        .insert([{
          company_name: formData.companyName,
          country: formData.country,
          brand_name: formData.brandName,
          website: formData.website,
          product_categories: formData.productCategories,
          annual_export_capacity: formData.annualExportCapacity,
          partnership_type: formData.partnershipType,
          contact_person: formData.contactPerson,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }]);

      if (error) throw error;

      const { error: emailError } = await supabase.functions.invoke('send-form-email', {
        body: {
          to: 'sales@safaalbahar.com',
          formType: 'Distribution Partnership Enquiry',
          pageSource: 'DistributionPartnerPage',
          senderName: formData.contactPerson,
          senderEmail: formData.email,
          senderPhone: formData.phone,
          message: formData.message || `${formData.companyName} — ${formData.partnershipType}`,
          formData
        }
      });
      if (emailError) throw emailError;

      toast({
        title: t('common.success'),
        description: isArabic ? "تم استلام استفسارك! سيتصل بك فريقنا قريباً." : "Inquiry Submitted Successfully!",
        variant: "default",
      });

      setFormData({
        companyName: '', country: '', brandName: '', website: '', productCategories: '',
        annualExportCapacity: '', partnershipType: '', contactPerson: '', email: '', phone: '', message: ''
      });
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      toast({
        title: t('common.error'),
        description: isArabic ? "حدث خطأ. يرجى المحاولة مرة أخرى." : "Submission Failed",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="partnership-form" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[hsl(var(--primary))] mb-4">{t('distribution.becomePartner')}</h2>
            <p className="text-gray-600">{t('contact.requestDesc')}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">{t('forms.companyName')}</label>
                <input required type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">{t('forms.country')}</label>
                <input required type="text" name="country" value={formData.country} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">{t('forms.brandName')}</label>
                <input required type="text" name="brandName" value={formData.brandName} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">{t('forms.website')}</label>
                <input type="url" name="website" value={formData.website} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">{t('forms.productCat')}</label>
                <input required type="text" name="productCategories" value={formData.productCategories} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">{t('forms.annualCap')}</label>
                <select required name="annualExportCapacity" value={formData.annualExportCapacity} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]">
                  <option value="" disabled>{t('forms.selectCap')}</option>
                  <option value="Less than 10 FCL">Less than 10 FCL/Year</option>
                  <option value="10-50 FCL">10 - 50 FCL/Year</option>
                  <option value="50-100 FCL">50 - 100 FCL/Year</option>
                  <option value="100+ FCL">100+ FCL/Year</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700">{t('forms.partnershipType')}</label>
                <select required name="partnershipType" value={formData.partnershipType} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]">
                  <option value="" disabled>{t('forms.selectPartnership')}</option>
                  <option value="Exclusive Distribution">Exclusive Distribution</option>
                  <option value="Regional Distribution">Regional Distribution</option>
                  <option value="Import Partnership">Import Partnership</option>
                  <option value="Brand Launch">Brand Launch</option>
                  <option value="Private Label">Private Label</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">{t('forms.contactPerson')}</label>
                <input required type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">{t('forms.email')}</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700">{t('forms.phone')}</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700">{t('forms.addMessage')}</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] resize-none"></textarea>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full gradient-bg-primary hover:opacity-90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover-lift shadow-lg mt-6"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {t('forms.submitting')}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {t('forms.submitEnquiry')}
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipEnquiryForm;
