import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const FormSuccessMessage = ({ title = "Success!", message, actionText, onAction }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-green-50 border border-green-200 rounded-xl p-6 text-center shadow-sm"
    >
      <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
      <h3 className="text-lg font-bold text-green-900 mb-2">{title}</h3>
      <p className="text-green-700 text-sm mb-4">{message}</p>
      {actionText && onAction && (
        <button 
          onClick={onAction}
          className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm"
        >
          {actionText}
        </button>
      )}
    </motion.div>
  );
};

export default FormSuccessMessage;