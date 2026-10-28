
import { getProductImage } from '@/data/productImages';

export const productsData = [
  // Frozen Meat
  ...Array.from({ length: 8 }).map((_, i) => ({
    id: `fm-${i}`,
    name: `Premium Frozen Beef Cut ${i + 1}`,
    brand: i % 2 === 0 ? 'Safa Prime' : 'Global Meats',
    packSize: i % 2 === 0 ? '10kg Carton' : '5kg Carton',
    origin: 'Brazil',
    description: 'High-quality frozen beef cuts, perfect for restaurants and catering services.',
    image: getProductImage('frozen-meat', i),
    category: 'frozen-meat'
  })),
  // Frozen Chicken
  ...Array.from({ length: 8 }).map((_, i) => ({
    id: `fc-${i}`,
    name: `Whole Frozen Chicken ${i + 1}`,
    brand: i % 2 === 0 ? 'Poultry Plus' : 'Farm Fresh',
    packSize: '10 x 1000g',
    origin: 'Saudi Arabia',
    description: 'Grade A whole frozen chicken, optimally processed for HORECA use.',
    image: getProductImage('frozen-chicken', i),
    category: 'frozen-chicken'
  })),
  // Frozen Mutton
  ...Array.from({ length: 8 }).map((_, i) => ({
    id: `fmu-${i}`,
    name: `Frozen Mutton Leg ${i + 1}`,
    brand: 'Desert Farms',
    packSize: '15kg Carton',
    origin: 'Australia',
    description: 'Tender and flavorful frozen mutton legs for premium dining.',
    image: getProductImage('frozen-mutton', i),
    category: 'frozen-mutton'
  })),
  // Frozen Seafood
  ...Array.from({ length: 8 }).map((_, i) => ({
    id: `fs-${i}`,
    name: `Ocean Catch Shrimp ${i + 1}`,
    brand: 'Sea Harvest',
    packSize: '5 x 1kg',
    origin: 'India',
    description: 'Freshly frozen premium shrimps, peeled and deveined.',
    image: getProductImage('frozen-seafood', i),
    category: 'frozen-seafood'
  })),
  // Frozen Vegetables
  ...Array.from({ length: 8 }).map((_, i) => ({
    id: `fv-${i}`,
    name: `Mixed Vegetables ${i + 1}`,
    brand: 'Green Valley',
    packSize: '4 x 2.5kg',
    origin: 'Egypt',
    description: 'Flash-frozen mixed vegetables locking in nutrients and freshness.',
    image: getProductImage('frozen-vegetables', i),
    category: 'frozen-vegetables'
  })),
  // Frozen Fruits
  ...Array.from({ length: 8 }).map((_, i) => ({
    id: `ff-${i}`,
    name: `Frozen Berry Mix ${i + 1}`,
    brand: 'Nature Sweet',
    packSize: '10 x 1kg',
    origin: 'Poland',
    description: 'Perfect for smoothies and desserts, picked at peak ripeness.',
    image: getProductImage('frozen-fruits', i),
    category: 'frozen-fruits'
  })),
  // French Fries
  ...Array.from({ length: 8 }).map((_, i) => ({
    id: `ffr-${i}`,
    name: `Crispy Fries 9mm ${i + 1}`,
    brand: 'Golden Potato',
    packSize: '4 x 2.5kg',
    origin: 'Belgium',
    description: 'Extra crispy classic cut french fries for food service.',
    image: getProductImage('french-fries', i),
    category: 'french-fries'
  })),
  // Rice & Grains
  ...Array.from({ length: 8 }).map((_, i) => ({
    id: `rg-${i}`,
    name: `Basmati Rice Premium ${i + 1}`,
    brand: 'Royal Grain',
    packSize: '40kg Sack',
    origin: 'India',
    description: 'Long grain aromatic basmati rice for authentic culinary experiences.',
    image: getProductImage('rice-grains', i),
    category: 'rice-grains'
  })),
  // Sauces & Condiments
  ...Array.from({ length: 8 }).map((_, i) => ({
    id: `sc-${i}`,
    name: `Chef's Mayonnaise ${i + 1}`,
    brand: 'Flavor Plus',
    packSize: '5L Bucket',
    origin: 'UAE',
    description: 'Rich and creamy mayonnaise designed for commercial kitchens.',
    image: getProductImage('sauces-condiments', i),
    category: 'sauces-condiments'
  })),
  // Chilled Products
  ...Array.from({ length: 8 }).map((_, i) => ({
    id: `cp-${i}`,
    name: `Fresh Mozzarella ${i + 1}`,
    brand: 'Dairy King',
    packSize: '2.5kg Block',
    origin: 'Italy',
    description: 'Premium chilled mozzarella cheese for authentic pizzas.',
    image: getProductImage('chilled-products', i),
    category: 'chilled-products'
  })),
  // Dry Food Items
  ...Array.from({ length: 8 }).map((_, i) => ({
    id: `df-${i}`,
    name: `Lentils / Pulses ${i + 1}`,
    brand: 'AgriCorp',
    packSize: '25kg Sack',
    origin: 'Turkey',
    description: 'High-quality sorted lentils for soups and side dishes.',
    image: getProductImage('dry-food-items', i),
    category: 'dry-food-items'
  }))
];
