import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardList } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getQuotePath } from '@/config/routes';
import { useTranslation } from '@/hooks/useTranslation';

const QuoteRequestButton = ({ 
  text,
  className,
  productName = "",
  categoryId
}) => {
  const { t } = useTranslation();

  return (
    <Link
      to={getQuotePath(categoryId, productName)}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 bg-primary text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover-shine",
        className
      )}
    >
      <ClipboardList className="w-5 h-5" />
      <span className="relative z-10">{text || t('common.requestQuote')}</span>
    </Link>
  );
};

export default QuoteRequestButton;
