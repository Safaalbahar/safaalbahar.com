import { useState, useCallback } from 'react';
import { FormConstants } from '@/utils/FormConstants';

export const useFormValidation = (initialState, validationSchema) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateField = useCallback((name, value) => {
    const rules = validationSchema[name];
    if (!rules) return '';

    for (const rule of rules) {
      if (rule === 'required' && !FormConstants.VALIDATION_RULES.required(value)) {
        return 'This field is required';
      }
      if (rule === 'email' && value && !FormConstants.VALIDATION_RULES.email(value)) {
        return 'Please enter a valid email address';
      }
      if (rule === 'phone' && value && !FormConstants.VALIDATION_RULES.phone(value)) {
        return 'Please enter a valid phone number';
      }
      if (typeof rule === 'function') {
        const customError = rule(value);
        if (customError) return customError;
      }
    }
    return '';
  }, [validationSchema]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    Object.keys(validationSchema).forEach(key => {
      const error = validateField(key, values[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [values, validationSchema, validateField]);

  const clearErrors = () => setErrors({});
  const resetForm = () => {
    setValues(initialState);
    setErrors({});
  };

  return {
    values,
    errors,
    setValues,
    handleChange,
    validateForm,
    clearErrors,
    resetForm
  };
};