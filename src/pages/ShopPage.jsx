
import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, PackageX } from 'lucide-react';
import { shopProducts } from '@/data/shopProducts';
import ShopProductCard from '@/components/ShopProductCard';
import ProductQuickPreview from '@/components/ProductQuickPreview';
import { useTranslation } from '@/hooks/useTranslation';
import { PRODUCT_CATEGORIES, ROUTES, getCategory, getQuotePath, getShopCategoryPath } from '@/config/routes';

const ShopPage = () => {
  const { t, isArabic } = useTranslation();
  const navigate = useNavigate();
  const { categorySlug } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name-asc');
  
  const [previewProduct, setPreviewProduct] = useState(null);
  const selectedCategory = getCategory(categorySlug);
  const categories = PRODUCT_CATEGORIES.filter(category =>
    shopProducts.some(product => product.categoryId === category.id)
  );

  useEffect(() => {
    if (categorySlug && !selectedCategory) {
      navigate(ROUTES.shop, { replace: true });
    }
  }, [categorySlug, navigate, selectedCategory]);

  const filteredProducts = useMemo(() => {
    let products = [...shopProducts];
    
    if (selectedCategory) {
      products = products.filter(p => p.categoryId === selectedCategory.id);
    }
    
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      products = products.filter(p => 
        p.name.toLowerCase().includes(lowerTerm) || 
        (p.nameAr && p.nameAr.toLowerCase().includes(lowerTerm))
      );
    }
    
    if (sortBy === 'name-asc') {
      products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      products.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'category') {
      products.sort((a, b) => a.category.localeCompare(b.category));
    }
    
    return products;
  }, [searchTerm, selectedCategory, sortBy, t]);

  const handleQuoteRequest = (product) => {
    navigate(getQuotePath(product.categoryId, isArabic && product.nameAr ? product.nameAr : product.name));
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background w-full flex flex-col min-h-screen"
    >
      <Helmet>
        <title>{t('shop.title') || 'Shop Premium Products'} | Safa Al Bahar</title>
        <meta name="description" content="Browse our catalog of premium chilled meat, frozen seafood, and dry goods." />
      </Helmet>

      {/* Hero Header */}
      <section className="pt-24 pb-12 bg-[hsl(var(--primary))] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=2000&q=85')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/70 to-transparent z-0" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto px-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 drop-shadow-md tracking-tight">
            {t('shop.title') || 'Premium Products'}
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-medium">
            {t('shop.subtitle') || 'Explore our exclusive collection for HORECA and retail.'}
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <input 
              type="text"
              placeholder={t('common.searchProducts') || 'Search for products...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/70 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-all shadow-lg ${isArabic ? 'pr-14' : 'pl-14'}`}
            />
            <Search className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-white/70 ${isArabic ? 'right-5' : 'left-5'}`} />
          </div>
        </motion.div>
      </section>

      {/* Filters Bar */}
      <section className="py-6 border-b border-border bg-card/80 sticky top-[80px] z-30 backdrop-blur-xl shadow-sm">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          
          {/* Categories */}
          <div className="flex items-center gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar no-scrollbar">
            <Filter className={`w-5 h-5 text-muted-foreground shrink-0 ${isArabic ? 'ml-1' : 'mr-1'}`} />
            <button
              onClick={() => navigate(ROUTES.shop)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                !selectedCategory
                  ? 'bg-[hsl(var(--primary))] text-white shadow-md scale-105'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
              }`}
            >
              {t('common.allProducts')}
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => navigate(getShopCategoryPath(cat.id))}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  selectedCategory?.id === cat.id
                    ? 'bg-[hsl(var(--primary))] text-white shadow-md scale-105' 
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                {t(cat.labelKey)}
              </button>
            ))}
          </div>

          {/* Sorting */}
          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <SlidersHorizontal className="w-5 h-5 text-muted-foreground hidden md:block rtl-flip" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full md:w-48 bg-muted text-foreground border-transparent rounded-lg px-4 py-2.5 text-sm font-bold focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent appearance-none cursor-pointer outline-none transition-shadow"
            >
              <option value="name-asc">{t('shop.sortAtoZ')}</option>
              <option value="name-desc">{t('shop.sortZtoA')}</option>
              <option value="category">{t('shop.sortCategory')}</option>
            </select>
          </div>
        </div>
      </section>

      {/* Product Grid Area */}
      <section className="py-12 bg-background flex-1">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              {selectedCategory ? t(selectedCategory.labelKey) : t('common.allProducts')}
            </h2>
            <span className="text-sm font-bold text-muted-foreground bg-muted px-3 py-1 rounded-full">
              {filteredProducts.length} {t('shop.products') || 'Items'}
            </span>
          </div>

          <AnimatePresence mode="wait">
            {filteredProducts.length > 0 ? (
              <motion.div 
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-7 items-stretch"
              >
                {filteredProducts.map((product) => (
                  <ShopProductCard 
                    key={product.id} 
                    product={product} 
                    onPreview={setPreviewProduct}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-24 bg-card rounded-2xl border border-dashed border-border"
              >
                <PackageX className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-2xl font-bold text-foreground mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your filters or search terms.</p>
                <button 
                  onClick={() => { setSearchTerm(''); navigate(ROUTES.shop); }}
                  className="bg-[hsl(var(--primary))] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  {t('shop.clearFilters') || 'Clear All Filters'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Modals */}
      <ProductQuickPreview 
        product={previewProduct} 
        isOpen={!!previewProduct} 
        onClose={() => setPreviewProduct(null)} 
        onQuoteRequest={handleQuoteRequest}
      />
    </motion.div>
  );
};

export default ShopPage;
