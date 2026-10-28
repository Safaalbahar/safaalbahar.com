import React, { useState } from 'react';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/components/ui/use-toast';
import FormSuccessMessage from './FormSuccessMessage';
import FormErrorMessage from './FormErrorMessage';

const FormSubmissionHandler = ({ 
  formType, 
  pageSource, 
  children, 
  onSuccessCallback 
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (formData, customPayload = {}) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Build payload for Edge Function - explicitly route to sales
      const payload = {
        to: 'sales@safaalbahar.com',
        formType,
        pageSource: pageSource || window.location.pathname,
        timestamp: new Date().toISOString(),
        senderName: formData.name || formData.full_name || formData.company_name || formData.contact_person || 'N/A',
        senderEmail: formData.email || formData.business_email || 'N/A',
        senderPhone: formData.phone || formData.mobile_number || 'N/A',
        message: formData.message || formData.requirements || formData.products_volume || formData.special_requirements || '',
        formData: formData,
        ...customPayload
      };

      // 1. Send Email Notification
      const { data: emailData, error: emailError } = await supabase.functions.invoke('send-form-email', {
        body: payload
      });

      if (emailError) throw emailError;

      setSubmitStatus('success');
      toast({
        title: "Success",
        description: "Your request has been successfully sent to our sales team.",
      });

      if (onSuccessCallback) {
        onSuccessCallback(emailData);
      }
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
      return true;

    } catch (err) {
      console.error('Form submission error:', err);
      setErrorMessage(err.message || 'An unexpected error occurred.');
      setSubmitStatus('error');
      
      toast({
        title: "Submission Failed",
        description: "There was a problem sending your request.",
        variant: "destructive"
      });
      
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetState = () => {
    setSubmitStatus('idle');
    setErrorMessage('');
  };

  if (submitStatus === 'success') {
    return (
      <FormSuccessMessage 
        title="Request Submitted" 
        message="Thank you! We have received your submission and will get back to you shortly." 
        actionText="Submit Another"
        onAction={resetState}
      />
    );
  }

  if (submitStatus === 'error') {
    return (
      <FormErrorMessage 
        error={errorMessage} 
        onRetry={resetState} 
      />
    );
  }

  return (
    <div className="relative">
      {children({ isSubmitting, submit: handleSubmit })}
    </div>
  );
};

export default FormSubmissionHandler;
