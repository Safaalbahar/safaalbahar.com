
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Loader2, Send } from 'lucide-react';
import { useFormValidation } from '@/hooks/useFormValidation';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/components/ui/use-toast';
import WhatsAppButton from '@/components/WhatsAppButton';
import TrustIndicator from '@/components/TrustIndicator';
import { useTranslation } from '@/hooks/useTranslation';
import { useLocation, useParams } from 'react-router-dom';
import { getCategory } from '@/config/routes';

const validationSchema = {
  company_name: ['required'],
  contact_person: ['required'],
  email: ['required', 'email'],
  phone: ['required', 'phone']
};

const ContactUs = () => {
  const { toast } = useToast();
  const { t, isArabic } = useTranslation();
  const location = useLocation();
  const { categorySlug } = useParams();
  
  const { values, errors, setValues, handleChange, validateForm, resetForm } = useFormValidation({
    company_name: '',
    contact_person: '',
    email: '',
    phone: '',
    industry_type: '',
    delivery_location: '',
    products_interested: '',
    special_requirements: ''
  }, validationSchema);

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    const category = getCategory(categorySlug);
    const product = new URLSearchParams(location.search).get('product');
    const requestedProduct = product || category?.label || '';

    if (requestedProduct) {
      setValues(current => current.products_interested
        ? current
        : { ...current, products_interested: requestedProduct });
    }
  }, [categorySlug, location.search, setValues]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      const dbPayload = {
        company_name: values.company_name,
        contact_person: values.contact_person,
        email: values.email,
        phone: values.phone,
        products_interested: `${values.industry_type} | ${values.delivery_location} | ${values.products_interested}`,
        special_requirements: values.special_requirements,
        status: 'contact_page'
      };
      
      const { error: dbError } = await supabase.from('quote_requests').insert([dbPayload]);
      if (dbError) throw dbError;

      const emailPayload = {
        to: 'sales@safaalbahar.com',
        formType: 'Contact Inquiry',
        pageSource: 'ContactUs',
        senderName: values.company_name,
        senderEmail: values.email,
        senderPhone: values.phone,
        message: `Industry: ${values.industry_type}\nLocation: ${values.delivery_location}\nProducts: ${values.products_interested}\nReqs: ${values.special_requirements}`,
        formData: values
      };

      const { error: emailError } = await supabase.functions.invoke('send-form-email', { body: emailPayload });
      if (emailError) throw emailError;
      
      toast({
        title: t('common.success') || 'Success',
        description: isArabic ? "تم إرسال استفسارك بنجاح! سيتصل بك فريقنا قريباً." : "Inquiry Sent Successfully! Our team will contact you shortly.",
      });
      resetForm();
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: t('common.error') || 'Error',
        description: isArabic ? "حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى." : "There was an error sending your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background w-full flex flex-col flex-1">
      <Helmet>
        <title>{t('contact.title') || 'Contact Us'}</title>
        <meta name="description" content={t('contact.subtitle') || 'Get in touch'} />
      </Helmet>

      <section className="pt-32 pb-20 gradient-bg-primary animate-gradient text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto px-4 relative z-10"
        >
          <TrustIndicator className="mb-6 bg-white/10 text-white shadow-glow" />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">{t('contact.title') || 'Contact Us'}</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto drop-shadow-md">
            {t('contact.subtitle') || 'We are here to help'}
          </p>
        </motion.div>
      </section>

      <section className="py-16 md:py-20 relative flex-1 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] gradient-bg-primary rounded-full blur-[150px] opacity-10 pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">{t('contact.talkBusiness') || 'Lets Talk'}</h2>
              <div className="glass-card p-5 md:p-6 rounded-2xl hover-lift float-animation shadow-md flex items-start gap-4">
                <div className="gradient-bg-secondary p-3 rounded-full shrink-0 shadow-glow"><Phone className="text-white w-5 h-5 md:w-6 md:h-6" /></div>
                <div>
                  <h3 className="font-bold text-foreground text-sm md:text-base">{t('contact.phone') || 'Phone'}</h3>
                  <p className="text-muted-foreground mb-3 text-sm md:text-base rtl-flip-none" dir="ltr">+966 55 997 7206</p>
                  <WhatsAppButton className="text-xs md:text-sm px-4 py-2 shine-effect glow-on-hover min-h-[44px]" />
                </div>
              </div>
              <div className="glass-card p-5 md:p-6 rounded-2xl hover-lift float-animation shadow-md flex items-start gap-4" style={{ animationDelay: '0.2s' }}>
                <div className="gradient-bg-secondary p-3 rounded-full shrink-0 shadow-glow"><Mail className="text-white w-5 h-5 md:w-6 md:h-6" /></div>
                <div>
                  <h3 className="font-bold text-foreground text-sm md:text-base">{t('contact.email') || 'Email'}</h3>
                  <a href="mailto:sales@safaalbahar.com" className="block text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors text-sm md:text-base min-h-[44px] flex items-center">sales@safaalbahar.com</a>
                </div>
              </div>
              <div className="glass-card p-5 md:p-6 rounded-2xl hover-lift float-animation shadow-md flex items-start gap-4" style={{ animationDelay: '0.4s' }}>
                <div className="gradient-bg-secondary p-3 rounded-full shrink-0 shadow-glow"><MapPin className="text-white w-5 h-5 md:w-6 md:h-6" /></div>
                <div>
                  <h3 className="font-bold text-foreground text-sm md:text-base">{t('contact.headOffice') || 'Head Office'}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {isArabic ? "حي الثروات - الخمرة، جدة 22524، المملكة العربية السعودية" : "Al Sarwath - Al Kumra, As Sarawat, Jeddah 22524, Saudi Arabia"}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 glass-card p-6 md:p-10 rounded-3xl premium-shadow relative z-10"
            >
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">{t('contact.requestServices') || 'Request Info'}</h2>
              <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">{t('contact.requestDesc') || 'Fill the form below'}</p>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1 md:mb-2">{t('forms.companyName') || 'Company Name'}</label>
                    <input name="company_name" value={values.company_name} onChange={handleChange} className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/20 text-slate-900 transition-all text-base font-medium outline-none" />
                    {errors.company_name && <p className="text-red-500 font-medium text-xs mt-1">{errors.company_name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1 md:mb-2">{t('forms.contactPerson') || 'Contact Person'}</label>
                    <input name="contact_person" value={values.contact_person} onChange={handleChange} className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/20 text-slate-900 transition-all text-base font-medium outline-none" />
                    {errors.contact_person && <p className="text-red-500 font-medium text-xs mt-1">{errors.contact_person}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1 md:mb-2">{t('forms.email') || 'Email'}</label>
                    <input type="email" name="email" value={values.email} onChange={handleChange} className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/20 text-slate-900 transition-all text-base font-medium outline-none" />
                    {errors.email && <p className="text-red-500 font-medium text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1 md:mb-2">{t('forms.phone') || 'Phone'}</label>
                    <input type="tel" name="phone" value={values.phone} onChange={handleChange} className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/20 text-slate-900 transition-all text-base font-medium outline-none" />
                    {errors.phone && <p className="text-red-500 font-medium text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1 md:mb-2">{t('forms.industryType') || 'Industry'}</label>
                    <select 
                      name="industry_type" value={values.industry_type} onChange={handleChange} 
                      className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/20 text-slate-900 transition-all text-base font-medium outline-none"
                    >
                      <option value="">{t('forms.selectIndustry') || 'Select'}</option>
                      <option value="HORECA">HORECA</option>
                      <option value="Retail">Retail</option>
                      <option value="Wholesale">Wholesale</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1 md:mb-2">{t('forms.deliveryLocation') || 'Location'}</label>
                    <input name="delivery_location" value={values.delivery_location} onChange={handleChange} className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/20 text-slate-900 transition-all text-base font-medium outline-none" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1 md:mb-2">{t('forms.productsReq') || 'Requirements'}</label>
                  <input name="products_interested" value={values.products_interested} onChange={handleChange} placeholder="e.g. Frozen Beef Tenderloin, Chicken Cuts, French Fries" className="w-full px-4 py-3 mb-4 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/20 text-slate-900 transition-all text-base font-medium outline-none" />
                  <textarea name="special_requirements" value={values.special_requirements} onChange={handleChange} rows="4" placeholder="Any additional notes or delivery schedules..." className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#0B3D91] focus:ring-2 focus:ring-[#0B3D91]/20 text-slate-900 resize-none transition-all text-base font-medium outline-none" />
                </div>

                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  type="submit" disabled={isSubmitting} 
                  className="w-full min-h-[56px] gradient-bg-primary glossy-gradient shine-effect glow-on-hover hover-lift text-white rounded-xl font-bold text-base md:text-lg flex items-center justify-center gap-2 disabled:opacity-70 shadow-glow"
                >
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin relative z-10" /> : <><Send className="w-5 h-5 relative z-10" /> <span className="relative z-10">{t('common.submitQuote') || 'Submit'}</span></>}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
