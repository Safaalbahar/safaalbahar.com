const asset = (path) => `/assets/products/${path}`;

export const CATEGORY_HIGHRES_IMAGES = Object.freeze({
  'frozen-meat': 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1200&q=85',
  'frozen-chicken': 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=1200&q=85',
  'frozen-mutton': 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
  'frozen-seafood': 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85',
  'frozen-vegetables': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85',
  'frozen-fruits': 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1200&q=85',
  'french-fries': 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=1200&q=85',
  'rice-grains': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=85',
  'sauces-condiments': 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=1200&q=85',
  'chilled-products': 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=85',
  'dry-food-items': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85'
});

export const CATEGORY_FALLBACK_IMAGES = Object.freeze({
  'frozen-meat': asset('categories/frozen-meat.jpg'),
  'frozen-chicken': asset('categories/frozen-chicken.jpg'),
  'frozen-mutton': asset('categories/frozen-mutton.jpg'),
  'frozen-seafood': asset('categories/frozen-seafood.jpg'),
  'frozen-vegetables': asset('categories/frozen-vegetables.jpg'),
  'frozen-fruits': asset('categories/frozen-fruits.jpg'),
  'french-fries': asset('categories/french-fries.jpg'),
  'rice-grains': asset('categories/rice-grains.jpg'),
  'sauces-condiments': asset('categories/sauces-condiments.jpg'),
  'chilled-products': asset('categories/chilled-products.jpg'),
  'dry-food-items': asset('categories/dry-food-items.jpg')
});

export const SHOP_PRODUCT_IMAGES = Object.freeze({
  p1: asset('shop/p1.png'),
  p2: asset('shop/p2.png'),
  p3: asset('shop/p3.png'),
  p4: asset('shop/p4.png'),
  p5: asset('shop/p5.png'),
  p6: asset('shop/p6.jpg'),
  p7: asset('shop/p7.jpg'),
  p8: asset('shop/p8.png'),
  p9: asset('shop/p9.jpg'),
  p10: asset('shop/p10.jpg'),
  p11: asset('shop/p11.jpg'),
  p12: asset('shop/p12.jpg'),
  p13: asset('shop/p13.jpg'),
  p14: asset('shop/p14.jpg'),
  p15: asset('shop/p15.jpg'),
  p16: asset('shop/p16.jpg'),
  p17: asset('shop/p17.jpg')
});

export const FEATURED_PRODUCT_IMAGES = Object.freeze({
  fishFillet: asset('featured/fish-fillet.png'),
  frenchFries: asset('featured/french-fries.png'),
  beefSteak: asset('featured/beef-steak.png'),
  groundMeat: asset('featured/ground-meat.png'),
  salmonFillet: asset('featured/salmon-fillet.png'),
  grilledBeef: asset('featured/grilled-beef.png'),
  cookedBeef: asset('featured/cooked-beef.png'),
  frozenVegetables: asset('featured/frozen-vegetables.png')
});

const CATEGORY_IMAGE_SETS = Object.freeze({
  'frozen-meat': [
    SHOP_PRODUCT_IMAGES.p1,
    FEATURED_PRODUCT_IMAGES.beefSteak,
    FEATURED_PRODUCT_IMAGES.groundMeat,
    FEATURED_PRODUCT_IMAGES.grilledBeef,
    FEATURED_PRODUCT_IMAGES.cookedBeef,
    SHOP_PRODUCT_IMAGES.p17,
    SHOP_PRODUCT_IMAGES.p2,
    CATEGORY_FALLBACK_IMAGES['frozen-meat']
  ],
  'frozen-chicken': [
    SHOP_PRODUCT_IMAGES.p3,
    SHOP_PRODUCT_IMAGES.p11,
    CATEGORY_FALLBACK_IMAGES['frozen-chicken']
  ],
  'frozen-mutton': [
    SHOP_PRODUCT_IMAGES.p2,
    SHOP_PRODUCT_IMAGES.p17,
    CATEGORY_FALLBACK_IMAGES['frozen-mutton']
  ],
  'frozen-seafood': [
    SHOP_PRODUCT_IMAGES.p4,
    SHOP_PRODUCT_IMAGES.p5,
    SHOP_PRODUCT_IMAGES.p8,
    SHOP_PRODUCT_IMAGES.p9,
    FEATURED_PRODUCT_IMAGES.fishFillet,
    FEATURED_PRODUCT_IMAGES.salmonFillet,
    CATEGORY_FALLBACK_IMAGES['frozen-seafood']
  ],
  'frozen-vegetables': [
    SHOP_PRODUCT_IMAGES.p6,
    SHOP_PRODUCT_IMAGES.p7,
    FEATURED_PRODUCT_IMAGES.frozenVegetables,
    CATEGORY_FALLBACK_IMAGES['frozen-vegetables']
  ],
  'frozen-fruits': [CATEGORY_FALLBACK_IMAGES['frozen-fruits']],
  'french-fries': [
    SHOP_PRODUCT_IMAGES.p13,
    SHOP_PRODUCT_IMAGES.p14,
    SHOP_PRODUCT_IMAGES.p15,
    FEATURED_PRODUCT_IMAGES.frenchFries,
    CATEGORY_FALLBACK_IMAGES['french-fries']
  ],
  'rice-grains': [
    SHOP_PRODUCT_IMAGES.p10,
    SHOP_PRODUCT_IMAGES.p12,
    SHOP_PRODUCT_IMAGES.p16,
    CATEGORY_FALLBACK_IMAGES['rice-grains']
  ],
  'sauces-condiments': [CATEGORY_FALLBACK_IMAGES['sauces-condiments']],
  'chilled-products': [
    SHOP_PRODUCT_IMAGES.p1,
    SHOP_PRODUCT_IMAGES.p2,
    SHOP_PRODUCT_IMAGES.p3,
    SHOP_PRODUCT_IMAGES.p11,
    SHOP_PRODUCT_IMAGES.p17,
    CATEGORY_FALLBACK_IMAGES['chilled-products']
  ],
  'dry-food-items': [
    SHOP_PRODUCT_IMAGES.p6,
    SHOP_PRODUCT_IMAGES.p7,
    SHOP_PRODUCT_IMAGES.p10,
    SHOP_PRODUCT_IMAGES.p12,
    SHOP_PRODUCT_IMAGES.p13,
    SHOP_PRODUCT_IMAGES.p14,
    SHOP_PRODUCT_IMAGES.p15,
    SHOP_PRODUCT_IMAGES.p16,
    CATEGORY_FALLBACK_IMAGES['dry-food-items']
  ]
});

export const getCategoryFallbackImage = (categoryId) =>
  CATEGORY_HIGHRES_IMAGES[categoryId] || CATEGORY_FALLBACK_IMAGES[categoryId] || CATEGORY_FALLBACK_IMAGES['dry-food-items'];

export const getCategoryLocalImage = (categoryId) =>
  CATEGORY_FALLBACK_IMAGES[categoryId] || CATEGORY_FALLBACK_IMAGES['dry-food-items'];

export const getProductImage = (categoryId, index = 0) => {
  const images = CATEGORY_IMAGE_SETS[categoryId] || [getCategoryFallbackImage(categoryId)];
  return images[index % images.length];
};
