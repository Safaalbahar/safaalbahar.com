import React from 'react';
import { AlertCircle, Mail, RefreshCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import { FormConstants } from '@/utils/FormConstants';

const FormErrorMessage = ({ error, onRetry }) => {
  const mailtoLink = `mailto:${FormConstants.SALES_EMAIL}?subject=Form Submission Error &body=I experienced an error submitting the form on your website.`;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-red-50 border border-red-200 rounded-xl p-6 text-center shadow-sm"
    >
      <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
      <h3 className="text-lg font-bold text-red-900 mb-2">Submission Failed</h3>
      <p className="text-red-700 text-sm mb-4">{error || "Something went wrong while sending your request."}</p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        {onRetry && (
          <button 
            onClick={onRetry}
            className="flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors text-sm w-full sm:w-auto justify-center"
          >
            <RefreshCcw className="w-4 h-4" />
            Try Again
          </button>
        )}
        <a 
          href={mailtoLink}
          className="flex items-center gap-2 bg-white border border-red-200 text-red-700 px-5 py-2 rounded-lg font-medium hover:bg-red-50 transition-colors text-sm w-full sm:w-auto justify-center"
        >
          <Mail className="w-4 h-4" />
          Email Us Directly
        </a>
      </div>
    </motion.div>
  );
};

export default FormErrorMessage;