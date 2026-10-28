
import React from 'react';
import SeafoodProductCard from './SeafoodProductCard';
import ProductGrid from './ProductGrid';

const seafoodProducts = [
  {
    id: 1,
    name: 'Frozen King Crab Legs',
    description: 'Premium quality frozen king crab legs, rich flavor and perfect for restaurants and seafood menus.',
    image: 'https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/ea50007ebd082736ab353af55683b064.png',
    alt: 'Cooked king crab legs on white plate with crab meat, red shells, and silver seafood forks'
  },
  {
    id: 2,
    name: 'Frozen Lobster Whole',
    description: 'Fresh frozen whole lobster, ideal for fine dining, hotels and seafood suppliers.',
    image: 'https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/acb04fb9a53c0439bb2728e42931ef4e.png',
    alt: 'Frozen Lobster Whole'
  },
  {
    id: 3,
    name: 'Frozen Squid Rings',
    description: 'Clean cut squid rings, perfect for frying, calamari dishes and seafood platters.',
    image: 'https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/65fad4b3b87b6b83fb1b915e9a9f3254.png',
    alt: 'Frozen Squid Rings'
  },
  {
    id: 4,
    name: 'Frozen Squid Tubes',
    description: 'Whole squid tubes cleaned and frozen, suitable for grilling, stuffing and seafood recipes.',
    image: 'https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/42175b7275bc135107d6c463e9742015.png',
    alt: 'Fresh white squid tubes rolled on wooden cutting board with lemon slices, garlic, and fresh herbs'
  },
  {
    id: 5,
    name: 'Frozen Shrimp',
    description: 'High quality frozen shrimp, suitable for restaurants, catering and food service.',
    image: 'https://horizons-cdn.hostinger.com/d2677b40-5d8b-4ef8-a357-74d10e76c4f8/ebb32c6f70c8bf1b94cad5d5c79276ca.png',
    alt: 'Cooked shrimp with garlic and green herbs on plate showing pink and white succulent shrimp'
  }
];

const FrozenSeafoodSection = () => {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2a4a] mb-4">
            Frozen Seafood
          </h2>
        </div>

        <ProductGrid>
          {seafoodProducts.map((product) => (
            <SeafoodProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </div>
    </section>
  );
};

export default FrozenSeafoodSection;
