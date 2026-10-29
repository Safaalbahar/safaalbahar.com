
import React from 'react';
import FeaturedProductCard from './FeaturedProductCard';
import ProductGrid from './ProductGrid';

const featuredProducts = [
  {
    id: 1,
    name: 'McCain Crinkle Fries',
    packSize: '2.5kg',
    badge: 'FROZEN',
    categoryId: 'french-fries',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
    alt: 'McCain Our Original Choice Crinkle Fries 2.5kg package'
  },
  {
    id: 2,
    name: 'Sadia Tender Chicken Breasts',
    packSize: '2kg Family Pack',
    badge: 'FROZEN',
    categoryId: 'frozen-chicken',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=80',
    alt: 'Sadia Tender Chicken Breasts 2kg Family Pack'
  },
  {
    id: 3,
    name: 'Green Peas Al Bustan',
    packSize: '20x400gm',
    badge: 'FROZEN',
    categoryId: 'frozen-vegetables',
    image: 'https://images.unsplash.com/photo-1592394533824-9440e5d68530?auto=format&fit=crop&w=800&q=80',
    alt: 'Safa Al Bahar Green Peas Al Bustan'
  },
  {
    id: 4,
    name: 'Sweet Corn Golden Fresh Americana',
    packSize: '8kg (20x400gm)',
    badge: 'FROZEN',
    categoryId: 'frozen-vegetables',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80',
    alt: 'Safa Al Bahar Sweet Corn Golden Fresh Americana'
  },
  {
    id: 5,
    name: 'Mango Pulp Farm Fresh',
    packSize: '16x1kg',
    badge: 'FROZEN',
    categoryId: 'frozen-fruits',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80',
    alt: 'Safa Al Bahar Mango Pulp Farm Fresh Totapuri'
  }
];

const FeaturedProductsSection = () => {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2a4a] mb-4">
            Featured Frozen & Food Service Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Premium selections from SAFA AL BAHAR TRADING COMPANY
          </p>
        </div>

        <ProductGrid>
          {featuredProducts.map((product) => (
            <FeaturedProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
