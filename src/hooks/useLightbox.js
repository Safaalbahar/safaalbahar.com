import { useContext } from 'react';
import { LightboxContext } from '@/contexts/LightboxContext';

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};