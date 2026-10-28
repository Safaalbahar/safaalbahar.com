
import React from 'react';
import ProductCategoryLayout from './ProductCategoryLayout';

const ChilledProductsPage = () => {
  return (
    <ProductCategoryLayout 
      title="Chilled Products"
      categoryId="chilled-products"
      image="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1920&q=85"
      description="Our chilled products line includes premium dairy, artisanal cheeses, and specialty chilled items. Maintained at strict temperatures throughout the cold chain to ensure safety, freshness, and optimal performance in your recipes."
    />
  );
};

export default ChilledProductsPage;
