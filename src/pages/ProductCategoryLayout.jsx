
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import ProductHeroBanner from '@/components/ProductHeroBanner';
import ProductCard from '@/components/ProductCard';
import ProductSearchFilter from '@/components/ProductSearchFilter';
import RelatedProductsSection from '@/components/RelatedProductsSection';
import { Button } from '@/components/ui/button';
import { productsData } from '@/data/productGroupData';
import QuoteRequestButton from '@/components/QuoteRequestButton';
import { ROUTES, getProductCategoryPath } from '@/config/routes';
import { getCategoryFallbackImage } from '@/data/productImages';

const ProductCategoryLayout = ({ title, categoryId, description, image }) => {
  const path = getProductCategoryPath(categoryId);
  const [searchTerm, setSearchTerm] = useState('');
  const [brandFilter, setBrandFilter] = useState('all');
  const [originFilter, setOriginFilter] = useState('all');

  const categoryProducts = useMemo(() => {
    return productsData.filter(p => p.category === categoryId);
  }, [categoryId]);

  const brands = useMemo(() => [...new Set(categoryProducts.map(p => p.brand))], [categoryProducts]);
  const origins = useMemo(() => [...new Set(categoryProducts.map(p => p.origin))], [categoryProducts]);

  const filteredProducts = useMemo(() => {
    return categoryProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = brandFilter === 'all' || product.brand === brandFilter;
      const matchesOrigin = originFilter === 'all' || product.origin === originFilter;
      return matchesSearch && matchesBrand && matchesOrigin;
    });
  }, [categoryProducts, searchTerm, brandFilter, originFilter]);

  return (
    <div className="min-h-screen bg-background pb-20">
      <Helmet>
        <title>{title} | Safa Al Bahar Products</title>
        <meta name="description" content={`Explore our premium ${title.toLowerCase()} for HORECA and food service industries.`} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <BreadcrumbNav 
          items={[
            { label: 'Products', path: ROUTES.products },
            { label: title, path }
          ]} 
        />
        
        <ProductHeroBanner 
          title={title} 
          subtitle="Premium quality food supplies tailored for culinary professionals."
          image={image || getCategoryFallbackImage(categoryId)} 
        />

        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About {title}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <ProductSearchFilter 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          brandFilter={brandFilter}
          setBrandFilter={setBrandFilter}
          originFilter={originFilter}
          setOriginFilter={setOriginFilter}
          brands={brands}
          origins={origins}
        />

        <div className="mb-12 flex justify-between items-end">
          <p className="text-muted-foreground font-medium">
            Showing <span className="text-foreground font-bold">{filteredProducts.length}</span> products
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-7 mb-16 items-stretch"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="h-full"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="py-20 text-center bg-muted/30 rounded-2xl border border-dashed border-border mb-16">
            <h3 className="text-xl font-bold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your filters or search terms.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setBrandFilter('all');
                setOriginFilter('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        <div className="bg-[hsl(var(--primary))] text-primary-foreground rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-xl mb-16">
          <div className="md:max-w-xl mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to place an order?</h3>
            <p className="text-primary-foreground/80 text-lg">Request a custom quote for {title.toLowerCase()} tailored to your business needs and volume requirements.</p>
          </div>
          <QuoteRequestButton
            categoryId={categoryId}
            className="w-full md:w-auto bg-white text-[hsl(var(--primary))] hover:bg-gray-100 font-bold px-8 shadow-lg"
          />
        </div>

        <RelatedProductsSection currentCategoryPath={path} />
      </div>
    </div>
  );
};

export default ProductCategoryLayout;
