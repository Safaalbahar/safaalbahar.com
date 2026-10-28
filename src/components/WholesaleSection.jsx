import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import FormSubmissionHandler from './FormSubmissionHandler';
import { useFormValidation } from '@/hooks/useFormValidation';

const lambImages = [
  "https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/add61951408c628274555207f8600ea4.jpg",
  "https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/7e9aaa2e4c24742b58620f7adc65ec8e.jpg",
  "https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/030a850768be84053b39a0f2c39829ae.jpg",
  "https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/95d5f7cf780c4f8133b906b63ae5c0b6.jpg",
  "https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/ca9d42eaa6b442dcef825e75370e15e8.jpg",
  "https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/8d4cb5945ca1720e49e1e63b6ce1a7ed.jpg",
  "https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/c477ad2bd796bcf8c3f09037bf9e753f.jpg",
  "https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/86d405b9b181d2a430e42d70171ce920.jpg",
  "https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/4df478a872be71c3562e6172a2ed7a64.jpg",
  "https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/5adc976b9508fa3eee56acee435261a7.jpg"
];

const validationSchema = {
  company_name: ['required'],
  contact_person: ['required'],
  business_email: ['required', 'email'],
  products_volume: ['required']
};

const WholesaleSection = () => {
  const { values, errors, handleChange, validateForm } = useFormValidation({
    company_name: '',
    contact_person: '',
    business_email: '',
    products_volume: ''
  }, validationSchema);

  return (
    <section className="bg-gray-50 py-10 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        <div className="flex flex-col md:flex-row gap-8 lg:gap-10">
          
          <div className="w-full md:w-[60%]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-2">Premium Lamb Selection</h2>
              <p className="text-gray-600 text-lg">Explore our high-quality wholesale lamb cuts and products.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {lambImages.map((src, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="relative aspect-square rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <img 
                    src={src} 
                    alt={`Premium Lamb Product ${idx + 1}`} 
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-[40%]">
            <div className="sticky top-24 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-8 lg:p-10 border border-gray-100">
              <h3 className="text-[24px] lg:text-[28px] font-bold text-[#1a2a4a] mb-6 leading-tight">
                B2B Bulk Supply & Export — Request Pricing
              </h3>

              <FormSubmissionHandler formType="Wholesale Inquiry" pageSource="Wholesale Section">
                {({ isSubmitting, submit }) => {
                  const handleSubmit = async (e) => {
                    e.preventDefault();
                    if (validateForm()) {
                      await submit(values);
                    }
                  };

                  return (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="company_name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <input
                          id="company_name" name="company_name" type="text"
                          value={values.company_name} onChange={handleChange}
                          className="w-full bg-white border border-gray-300 text-gray-900 rounded-md px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-[#0d9488] transition-all"
                          placeholder="Enter company name"
                        />
                        {errors.company_name && <p className="text-red-500 text-xs mt-1">{errors.company_name}</p>}
                      </div>

                      <div>
                        <label htmlFor="contact_person" className="block text-sm font-semibold text-gray-700 mb-2">
                          Contact Person *
                        </label>
                        <input
                          id="contact_person" name="contact_person" type="text"
                          value={values.contact_person} onChange={handleChange}
                          className="w-full bg-white border border-gray-300 text-gray-900 rounded-md px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-[#0d9488] transition-all"
                          placeholder="Enter contact name"
                        />
                        {errors.contact_person && <p className="text-red-500 text-xs mt-1">{errors.contact_person}</p>}
                      </div>

                      <div>
                        <label htmlFor="business_email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Business Email *
                        </label>
                        <input
                          id="business_email" name="business_email" type="email"
                          value={values.business_email} onChange={handleChange}
                          className="w-full bg-white border border-gray-300 text-gray-900 rounded-md px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-[#0d9488] transition-all"
                          placeholder="email@company.com"
                        />
                        {errors.business_email && <p className="text-red-500 text-xs mt-1">{errors.business_email}</p>}
                      </div>

                      <div>
                        <label htmlFor="products_volume" className="block text-sm font-semibold text-gray-700 mb-2">
                          Required Products & Volume *
                        </label>
                        <textarea
                          id="products_volume" name="products_volume" rows={5}
                          value={values.products_volume} onChange={handleChange}
                          className="w-full bg-white border border-gray-300 text-gray-900 rounded-md px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-[#0d9488] transition-all resize-none min-h-[120px]"
                          placeholder="E.g., 500kg Lamb Chops monthly..."
                        />
                        {errors.products_volume && <p className="text-red-500 text-xs mt-1">{errors.products_volume}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#1a2a4a] hover:bg-[#2a4270] text-white font-semibold rounded-md py-3.5 px-8 mt-6 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
                        ) : 'Submit Inquiry'}
                      </button>
                    </form>
                  );
                }}
              </FormSubmissionHandler>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WholesaleSection;