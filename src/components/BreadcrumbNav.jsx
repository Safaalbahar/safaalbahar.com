
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { ROUTES } from '@/config/routes';

const BreadcrumbNav = ({ items }) => {
  const { isArabic } = useTranslation();

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground py-4" aria-label="Breadcrumb">
      <Link to={ROUTES.home} className="hover:text-[hsl(var(--primary))] transition-colors flex items-center gap-1">
        <Home className="w-4 h-4" />
        <span className="sr-only">Home</span>
      </Link>
      
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <React.Fragment key={item.path || index}>
            <ChevronRight className={`w-4 h-4 text-muted-foreground/50 ${isArabic ? 'rotate-180' : ''}`} />
            {isLast ? (
              <span className="font-semibold text-foreground pointer-events-none" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link to={item.path} className="hover:text-[hsl(var(--primary))] transition-colors">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default BreadcrumbNav;
