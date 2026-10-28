
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
    image: 'https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/b47c745b86f7057dd9a9903537c5b4e8.jpg',
    alt: 'McCain Our Original Choice Crinkle Fries 2.5kg package'
  },
  {
    id: 2,
    name: 'Sadia Tender Chicken Breasts',
    packSize: '2kg Family Pack',
    badge: 'FROZEN',
    categoryId: 'frozen-chicken',
    image: 'https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/e71ec3c09df3275a536afaeaf323177c.jpg',
    alt: 'Sadia Tender Chicken Breasts 2kg Family Pack'
  },
  {
    id: 3,
    name: 'Green Peas Al Bustan',
    packSize: '20x400gm',
    badge: 'FROZEN',
    categoryId: 'frozen-vegetables',
    image: 'https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/8687f6d5c309f10c24b71895e691e4e7.jpg',
    alt: 'Safa Al Bahar Green Peas Al Bustan'
  },
  {
    id: 4,
    name: 'Sweet Corn Golden Fresh Americana',
    packSize: '8kg (20x400gm)',
    badge: 'FROZEN',
    categoryId: 'frozen-vegetables',
    image: 'https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/c5fdd9f93af7c02a3780297aa76f994d.jpg',
    alt: 'Safa Al Bahar Sweet Corn Golden Fresh Americana'
  },
  {
    id: 5,
    name: 'Mango Pulp Farm Fresh',
    packSize: '16x1kg',
    badge: 'FROZEN',
    categoryId: 'frozen-fruits',
    image: 'https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/a5ef722c16aadf062fd1583c30bb7d28.jpg',
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
