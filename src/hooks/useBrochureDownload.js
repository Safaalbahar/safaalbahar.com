import { useState } from 'react';
import { supabase } from '@/lib/customSupabaseClient';
import { FormConstants } from '@/utils/FormConstants';

export const useBrochureDownload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitForm = async (formData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // 1. Insert into brochure_downloads
      const { data: downloadData, error: dbError } = await supabase
        .from('brochure_downloads')
        .insert([{
          full_name: formData.full_name,
          company_name: formData.company_name,
          email: formData.email,
          mobile_number: formData.mobile_number,
          business_type: formData.business_type,
          user_agent: navigator.userAgent
        }])
        .select()
        .single();

      if (dbError) throw new Error(dbError.message);

      // 2. Insert into brochure_analytics
      await supabase.from('brochure_analytics').insert([{
        event_type: 'brochure_form_submit',
        email: formData.email,
        business_type: formData.business_type,
        conversion_status: 'success'
      }]);

      // 3. Invoke Edge Function
      const { error: emailError } = await supabase.functions.invoke('send-brochure-email', {
        body: formData
      });
      if (emailError) throw emailError;

      // 4. Trigger PDF Download (mocked as an alert if file doesn't exist, but simulating real action)
      const link = document.createElement('a');
      link.href = FormConstants.COMPANY_PROFILE_URL;
      link.download = 'Safa-Al-Bahar-Company-Profile-2026.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSuccess(true);
      return { success: true };
    } catch (err) {
      console.error('Brochure download error:', err);
      setError(err.message || 'Failed to process request');
      
      // Log failure analytics
      await supabase.from('brochure_analytics').insert([{
        event_type: 'brochure_form_submit',
        email: formData.email,
        business_type: formData.business_type,
        conversion_status: 'failed'
      }]);

      return { success: false, error: err.message };
    } finally {
      setIsLoading(false);
    }
  };

  return { submitForm, isLoading, error, success };
};
