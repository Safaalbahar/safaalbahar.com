
import React from 'react';
import SeafoodProductCard from './SeafoodProductCard';
import ProductGrid from './ProductGrid';

const seafoodProducts = [
  {
    id: 1,
    name: 'Frozen King Crab Legs',
    description: 'Premium quality frozen king crab legs, rich flavor and perfect for restaurants and seafood menus.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    alt: 'Cooked king crab legs on white plate with crab meat, red shells, and silver seafood forks'
  },
  {
    id: 2,
    name: 'Frozen Lobster Whole',
    description: 'Fresh frozen whole lobster, ideal for fine dining, hotels and seafood suppliers.',
    image: 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80',
    alt: 'Frozen Lobster Whole'
  },
  {
    id: 3,
    name: 'Frozen Squid Rings',
    description: 'Clean cut squid rings, perfect for frying, calamari dishes and seafood platters.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    alt: 'Frozen Squid Rings'
  },
  {
    id: 4,
    name: 'Frozen Squid Tubes',
    description: 'Whole squid tubes cleaned and frozen, suitable for grilling, stuffing and seafood recipes.',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
    alt: 'Fresh white squid tubes rolled on wooden cutting board with lemon slices, garlic, and fresh herbs'
  },
  {
    id: 5,
    name: 'Frozen Shrimp',
    description: 'High quality frozen shrimp, suitable for restaurants, catering and food service.',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80',
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
