
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import TrustIndicator from '@/components/TrustIndicator';
import QuoteRequestButton from '@/components/QuoteRequestButton';
import PremiumProductCard from '@/components/PremiumProductCard';
import ProductCard from '@/components/ProductCard';
import ProductGrid from '@/components/ProductGrid';
import { FEATURED_PRODUCT_IMAGES, SHOP_PRODUCT_IMAGES } from '@/data/productImages';

const ProductsPage = () => {
  const premiumProducts = [
    { name: "Fish Fillet", category: "Seafood", categoryId: "frozen-seafood", description: "Premium quality boneless fish fillets, perfectly portioned for immediate cooking and fine dining presentations.", image: FEATURED_PRODUCT_IMAGES.fishFillet },
    { name: "French Fries", category: "Frozen Foods", categoryId: "french-fries", description: "Extra crispy and golden french fries, ideal for fast food, catering, and restaurant sides.", image: FEATURED_PRODUCT_IMAGES.frenchFries },
    { name: "Beef Steak (Premium Cut)", category: "Meat & Poultry", categoryId: "frozen-meat", description: "High-grade premium beef steak cuts, carefully selected for maximum tenderness and flavor.", image: FEATURED_PRODUCT_IMAGES.beefSteak },
    { name: "Ground Meat", category: "Meat & Poultry", categoryId: "frozen-meat", description: "Freshly ground meat with the perfect fat-to-lean ratio for versatile culinary applications.", image: FEATURED_PRODUCT_IMAGES.groundMeat },
    { name: "Salmon Fillet", category: "Seafood", categoryId: "frozen-seafood", description: "Fresh, rich salmon fillets rich in Omega-3, perfect for grilling, baking, or pan-searing.", image: FEATURED_PRODUCT_IMAGES.salmonFillet },
  ];

  const categories = [
    {
      title: "Chilled Meat & Poultry",
      categoryId: "chilled-products",
      items: [
        { 
          name: "Premium Angus Beef", 
          description: "High-grade beef cuts for fine dining.", 
          image: SHOP_PRODUCT_IMAGES.p1,
          deliveryText: "Bulk Supply" 
        },
        { 
          name: "Chilled Mutton Cuts", 
          description: "Quality chilled mutton for wholesale and catering.", 
          image: SHOP_PRODUCT_IMAGES.p2,
          deliveryText: "Custom Monthly" 
        },
        { 
          name: "Fresh Poultry Cuts", 
          description: "Perfectly portioned cuts for restaurant use.", 
          image: SHOP_PRODUCT_IMAGES.p3,
          deliveryText: "HORECA Ready" 
        },
        { 
          name: "Beef Steak (Grilled)", 
          description: "Expertly pre-grilled beef steak with authentic char marks.", 
          image: FEATURED_PRODUCT_IMAGES.grilledBeef,
          deliveryText: "Ready To Heat" 
        },
        { 
          name: "Cooked Beef Slices", 
          description: "Pre-cooked, thinly sliced premium beef.", 
          image: FEATURED_PRODUCT_IMAGES.cookedBeef,
          deliveryText: "Deli Fresh" 
        },
      ]
    },
    {
      title: "Frozen Seafood",
      categoryId: "frozen-seafood",
      items: [
        { 
          name: "Frozen Squid", 
          description: "Premium frozen squid for seafood restaurants.", 
          image: SHOP_PRODUCT_IMAGES.p4,
          deliveryText: "Cold Chain" 
        },
        { 
          name: "Premium Fish", 
          description: "Clean, boneless fish fillets for catering.", 
          image: SHOP_PRODUCT_IMAGES.p5,
          deliveryText: "Bulk Supply" 
        },
        { 
          name: "Frozen Vegetables", 
          description: "Premium quality frozen vegetables rich in nutrients.", 
          image: FEATURED_PRODUCT_IMAGES.frozenVegetables,
          deliveryText: "HORECA Ready" 
        },
      ]
    },
    {
      title: "Dry Goods & Vegetables",
      categoryId: "dry-food-items",
      items: [
        { 
          name: "Okra Zero", 
          description: "Premium quality Okra Zero, harvested at peak freshness.", 
          image: SHOP_PRODUCT_IMAGES.p6,
          deliveryText: "Monthly Supply" 
        },
        { 
          name: "Minced Molokhia", 
          description: "Freshly minced molokhia, ready for traditional recipes.", 
          image: SHOP_PRODUCT_IMAGES.p7,
          deliveryText: "Bulk Supply" 
        },
      ]
    }
  ];

  return (
    <div className="bg-background w-full">
      <Helmet>
        <title>Frozen Food Solutions | Safa Al Bahar Products</title>
        <meta name="description" content="Explore our comprehensive frozen food solutions including meat, chicken, seafood, vegetables, and French fries. Bulk food supplier Saudi Arabia." />
      </Helmet>

      {/* Banner Section */}
      <section className="pt-24 pb-8 bg-background px-4 sm:px-6 w-full max-w-[1920px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative bg-muted"
        >
          <div className="relative h-[280px] sm:h-[360px] md:h-[440px] w-full flex items-center justify-center overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=85")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/80" />
            <div className="relative z-10 max-w-3xl px-6 text-center text-white">
              <span className="inline-block px-3 py-1 rounded-full bg-[hsl(var(--accent))]/20 border border-[hsl(var(--accent))]/40 text-[hsl(var(--accent))] text-xs font-bold uppercase tracking-wider mb-3">
                Commercial Foodservice
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tight">
                Premium Wholesale Catalog
              </h2>
              <p className="text-sm sm:text-base text-slate-200 font-normal max-w-xl mx-auto">
                Temperature-controlled distribution across the Kingdom of Saudi Arabia.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Intro Content Section */}
      <section className="pb-12 pt-4 text-center px-4 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <TrustIndicator className="mb-6 mx-auto bg-primary/5 border-primary/10 text-primary" />
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 text-foreground">
            Complete Frozen Food Solutions
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
            We are a leading frozen food supplier in Saudi Arabia, offering customized monthly customer consumption supply and reliable delivery across the Kingdom.
          </p>
          <QuoteRequestButton className="text-base md:text-lg px-6 py-3 md:px-8 md:py-4 gradient-bg-accent glossy-gradient shine-effect glow-on-hover text-white hover-lift w-full md:w-auto" />
        </motion.div>
      </section>

      {/* Premium Featured Products Section */}
      <section className="py-16 md:py-20 bg-muted/30 border-y border-border overflow-hidden">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-3 md:mb-4">Premium Selection</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our exclusive range of top-tier products, carefully sourced to meet the highest standards of culinary excellence.
            </p>
          </motion.div>
          
          <ProductGrid>
            {premiumProducts.map((product, idx) => (
              <PremiumProductCard key={idx} {...product} />
            ))}
          </ProductGrid>
        </div>
      </section>

      {/* Products Catalog */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6">
          {categories.map((category, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-20 last:mb-0"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-4 mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">{category.title}</h2>
                <div className="text-xs md:text-sm font-bold tracking-wider uppercase text-white mt-4 md:mt-0 gradient-bg-primary px-4 md:px-5 py-2 md:py-2.5 rounded-lg shadow-md w-fit">
                  Bulk Wholesale & HORECA
                </div>
              </div>
              
              <ProductGrid>
                {category.items.map((product, pIdx) => (
                  <ProductCard
                    key={pIdx}
                    product={{
                      ...product,
                      category: category.categoryId,
                      brand: 'Safa Selection',
                      origin: 'Global Supply',
                      packSize: product.deliveryText || 'Food Service Pack'
                    }}
                  />
                ))}
              </ProductGrid>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Trust Bottom */}
      <section className="py-16 md:py-24 gradient-bg-primary text-white border-t-[6px] border-[hsl(var(--accent-gold))] text-center relative overflow-hidden animate-gradient">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-64 md:w-96 h-64 md:h-96 rounded-full bg-[hsl(var(--accent-blue))] blur-3xl float-animation" />
          <div className="absolute bottom-0 right-0 w-48 md:w-80 h-48 md:h-80 rounded-full bg-white blur-3xl float-animation" style={{ animationDelay: '2s' }} />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto px-4 relative z-10"
        >
          <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4 md:mb-6 drop-shadow-md">Reliable Delivery Across Saudi Arabia</h3>
          <p className="text-base md:text-xl text-white/90 mb-8 md:mb-10 font-medium leading-relaxed drop-shadow-sm">
            With 1000+ happy clients, our specialized customer service team ensures your bulk orders arrive perfectly frozen through our strict cold chain logistics.
          </p>
          <QuoteRequestButton 
            text="Contact Sales Team" 
            className="gradient-bg-accent glossy-gradient shine-effect glow-on-hover text-white px-8 md:px-10 py-4 md:py-5 text-base md:text-xl hover-lift shadow-glow font-bold rounded-2xl w-full md:w-auto"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default ProductsPage;
