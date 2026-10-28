import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const TrustIndicator = ({ text = "1000+ Happy Clients", className }) => {
  return (
    <div className={cn("trust-indicator", className)}>
      <Star className="w-4 h-4 fill-current" />
      <span>{text}</span>
    </div>
  );
};

export default TrustIndicator;