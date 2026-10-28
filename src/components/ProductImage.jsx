import React, { useEffect, useState } from 'react';
import { PackageOpen } from 'lucide-react';
import { getCategoryFallbackImage, getCategoryLocalImage } from '@/data/productImages';

const ProductImage = ({ src, categoryId, className = '', priority = false }) => {
  const fallback = getCategoryFallbackImage(categoryId);
  const localFallback = getCategoryLocalImage(categoryId);
  const [currentSrc, setCurrentSrc] = useState(src || fallback);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setCurrentSrc(src || fallback);
    setLoaded(false);
    setFailed(false);
  }, [fallback, src]);

  const handleError = () => {
    if (currentSrc !== fallback && fallback) {
      setCurrentSrc(fallback);
      setLoaded(false);
      return;
    }
    if (currentSrc !== localFallback && localFallback) {
      setCurrentSrc(localFallback);
      setLoaded(false);
      return;
    }

    setFailed(true);
    setLoaded(false);
  };

  return (
    <div className={`relative h-full w-full overflow-hidden bg-gradient-to-br from-slate-100 via-white to-emerald-50 ${className}`}>
      {!loaded && !failed && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-100 via-white to-slate-100 bg-[length:200%_100%]" aria-hidden="true" />
      )}

      {failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[hsl(var(--primary))]/10 via-white to-[hsl(var(--secondary))]/10 text-[hsl(var(--primary))]" aria-hidden="true">
          <PackageOpen className="h-11 w-11 opacity-70" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] opacity-70">Safa Al Bahar</span>
        </div>
      ) : (
        <img
          src={currentSrc}
          alt=""
          aria-hidden="true"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={handleError}
          className={`h-full w-full object-cover object-center transition-[opacity,transform] duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} group-hover:scale-[1.035]`}
        />
      )}
    </div>
  );
};

export default ProductImage;
