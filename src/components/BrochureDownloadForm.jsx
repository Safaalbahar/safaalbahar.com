import React from 'react';
import FormSubmissionHandler from './FormSubmissionHandler';
import { useFormValidation } from '@/hooks/useFormValidation';
import BrochureDownloadButton from './BrochureDownloadButton';
import BrochureSecondaryButton from './BrochureSecondaryButton';
import { FormConstants } from '@/utils/FormConstants';

const validationSchema = {
  full_name: ['required'],
  company_name: ['required'],
  email: ['required', 'email'],
  business_type: ['required']
};

const BrochureDownloadForm = () => {
  const { values, errors, handleChange, validateForm } = useFormValidation({
    full_name: '',
    company_name: '',
    email: '',
    mobile_number: '',
    business_type: ''
  }, validationSchema);

  const inputClasses = "w-full h-[44px] bg-white border border-[#d1d5db] rounded-lg px-3 text-[14px] text-gray-900 focus:outline-none focus:border-[#0B2C4D] focus:ring-1 focus:ring-[#0B2C4D]/30 transition-all shadow-sm";
  const labelClasses = "block font-bold text-[13px] text-[#1a2a4a] mb-2";

  return (
    <div className="bg-[#f3f4f6] border border-[#e5e7eb] rounded-xl p-6 shadow-sm">
      <FormSubmissionHandler formType="Brochure Download" pageSource="Home Page Brochure Section">
        {({ isSubmitting, submit }) => {
          
          const handleSubmit = async () => {
            if (validateForm()) {
              const success = await submit(values);
              if (success) {
                // Trigger file download upon successful validation and tracking
                const link = document.createElement('a');
                link.href = FormConstants.COMPANY_PROFILE_URL;
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }
            }
          };

          return (
            <div className="space-y-4">
              <div>
                <label className={labelClasses}>Full Name *</label>
                <input type="text" name="full_name" value={values.full_name} onChange={handleChange} className={inputClasses} placeholder="John Doe" />
                {errors.full_name && <p className="text-red-500 text-xs mt-1">{errors.full_name}</p>}
              </div>

              <div>
                <label className={labelClasses}>Company Name *</label>
                <input type="text" name="company_name" value={values.company_name} onChange={handleChange} className={inputClasses} placeholder="Company LLC" />
                {errors.company_name && <p className="text-red-500 text-xs mt-1">{errors.company_name}</p>}
              </div>

              <div>
                <label className={labelClasses}>Email Address *</label>
                <input type="email" name="email" value={values.email} onChange={handleChange} className={inputClasses} placeholder="john@example.com" />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className={labelClasses}>Mobile Number (Optional)</label>
                <input type="tel" name="mobile_number" value={values.mobile_number} onChange={handleChange} className={inputClasses} placeholder="+966 50 000 0000" />
              </div>

              <div>
                <label className={labelClasses}>Business Type *</label>
                <select name="business_type" value={values.business_type} onChange={handleChange} className={inputClasses}>
                  <option value="">Select Business Type...</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Catering">Catering</option>
                  <option value="Retail">Retail</option>
                  <option value="Distributor">Distributor</option>
                  <option value="Other">Other</option>
                </select>
                {errors.business_type && <p className="text-red-500 text-xs mt-1">{errors.business_type}</p>}
              </div>

              <div className="pt-2">
                <BrochureDownloadButton isLoading={isSubmitting} onClick={handleSubmit} />
                <BrochureSecondaryButton />
              </div>
            </div>
          );
        }}
      </FormSubmissionHandler>
    </div>
  );
};

export default BrochureDownloadForm;
