import React from 'react';
import { Truck } from 'lucide-react';
import { cn } from '@/lib/utils';

const DeliveryBadge = ({ text = "Fast Delivery", className }) => {
  return (
    <div className={cn("delivery-badge", className)}>
      <Truck className="w-3.5 h-3.5" />
      <span>{text}</span>
    </div>
  );
};

export default DeliveryBadge;