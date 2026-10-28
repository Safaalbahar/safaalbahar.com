export const ROUTES = Object.freeze({
  home: '/',
  products: '/products',
  productCategory: '/products/:categorySlug',
  shop: '/shop',
  shopCategory: '/shop/:categorySlug',
  services: '/services',
  industries: '/industries',
  about: '/about',
  contact: '/contact',
  requestQuote: '/contact/request-quote',
  requestQuoteCategory: '/contact/request-quote/:categorySlug',
  branches: '/branches',
  distributionPartner: '/distribution-partner',
  notFound: '*'
});

export const PRODUCT_CATEGORIES = Object.freeze([
  { id: 'frozen-meat', slug: 'frozen-meat', label: 'Frozen Meat', labelKey: 'categories.frozenMeat' },
  { id: 'frozen-chicken', slug: 'frozen-chicken', label: 'Frozen Chicken', labelKey: 'categories.frozenChicken' },
  { id: 'frozen-mutton', slug: 'frozen-mutton', label: 'Frozen Mutton', labelKey: 'categories.frozenMutton' },
  { id: 'frozen-seafood', slug: 'frozen-seafood', label: 'Frozen Seafood', labelKey: 'categories.frozenSeafood' },
  { id: 'frozen-vegetables', slug: 'frozen-vegetables', label: 'Frozen Vegetables', labelKey: 'categories.frozenVegetables' },
  { id: 'frozen-fruits', slug: 'frozen-fruits', label: 'Frozen Fruits', labelKey: 'categories.frozenFruits' },
  { id: 'french-fries', slug: 'french-fries', label: 'French Fries', labelKey: 'categories.frenchFries' },
  { id: 'rice-grains', slug: 'rice-grains', label: 'Rice & Grains', labelKey: 'categories.riceGrains' },
  { id: 'sauces-condiments', slug: 'sauces-condiments', label: 'Sauces & Condiments', labelKey: 'categories.saucesCondiments' },
  { id: 'chilled-products', slug: 'chilled-products', label: 'Chilled Products', labelKey: 'categories.chilledProducts' },
  { id: 'dry-food-items', slug: 'dry-food-items', label: 'Dry Food Items', labelKey: 'categories.dryFoodItems' }
]);

const categoryAliases = Object.freeze({
  seafood: 'frozen-seafood',
  'frozen foods': 'french-fries',
  'meat & poultry': 'frozen-meat',
  'chilled meat & poultry': 'chilled-products',
  'dry goods & vegetables': 'dry-food-items'
});

export const getCategory = (category) => {
  const value = String(category || '').trim().toLowerCase();
  const normalized = categoryAliases[value] || value;
  return PRODUCT_CATEGORIES.find(({ id, slug }) => id === normalized || slug === normalized);
};

export const getProductCategoryPath = (category) => {
  const match = getCategory(category);
  return match ? `${ROUTES.products}/${match.slug}` : ROUTES.products;
};

export const getShopCategoryPath = (category) => {
  const match = getCategory(category);
  return match ? `${ROUTES.shop}/${match.slug}` : ROUTES.shop;
};

export const getQuotePath = (category, productName = '') => {
  const match = getCategory(category);
  const basePath = match
    ? `${ROUTES.requestQuote}/${match.slug}`
    : ROUTES.requestQuote;

  return productName
    ? `${basePath}?product=${encodeURIComponent(productName)}`
    : basePath;
};

export const LEGACY_REDIRECTS = Object.freeze([
  { from: '/home', to: ROUTES.home },
  { from: '/aboutus', to: ROUTES.about },
  { from: '/contactus', to: ROUTES.contact },
  { from: '/ourservices', to: ROUTES.services },
  { from: '/industriesserved', to: ROUTES.industries },
  { from: '/distributionpartner', to: ROUTES.distributionPartner },
  { from: '/menu', to: ROUTES.products },
  { from: '/qualitycompliance', to: ROUTES.services },
  { from: '/logisticscoverage', to: ROUTES.services },
  { from: '/comingsoonproducts', to: ROUTES.products }
]);
