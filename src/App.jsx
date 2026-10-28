
import React, { useEffect } from 'react';
import { Navigate, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { LightboxProvider } from '@/contexts/LightboxContext';
import { QuoteModalProvider } from '@/contexts/QuoteModalContext';
import { CartProvider } from '@/contexts/CartContext';
import { Toaster } from '@/components/ui/toaster';
import ErrorBoundary from '@/components/ErrorBoundary';
import ChatBotIntegration from '@/components/ChatBotIntegration';
import { useTranslation } from '@/hooks/useTranslation';
import { LEGACY_REDIRECTS, ROUTES, getProductCategoryPath } from '@/config/routes';

// Main Pages
import Home from '@/pages/Home';
import ProductsPage from '@/pages/Products';
import ShopPage from '@/pages/ShopPage';
import ServicesPage from '@/pages/ServicesPage';
import IndustriesServed from '@/pages/IndustriesServed';
import AboutUs from '@/pages/AboutUs';
import ContactUs from '@/pages/ContactUs';
import BranchesPage from '@/pages/BranchesPage';
import DistributionPartnerPage from '@/pages/DistributionPartnerPage';

// Product Group Pages
import FrozenMeatPage from '@/pages/FrozenMeatPage';
import FrozenChickenPage from '@/pages/FrozenChickenPage';
import FrozenMuttonPage from '@/pages/FrozenMuttonPage';
import FrozenSeafoodPage from '@/pages/FrozenSeafoodPage';
import FrozenVegetablesPage from '@/pages/FrozenVegetablesPage';
import FrozenFruitsPage from '@/pages/FrozenFruitsPage';
import FrenchFriesPage from '@/pages/FrenchFriesPage';
import RiceGrainsPage from '@/pages/RiceGrainsPage';
import SaucesCondimentsPage from '@/pages/SaucesCondimentsPage';
import ChilledProductsPage from '@/pages/ChilledProductsPage';
import DryFoodItemsPage from '@/pages/DryFoodItemsPage';

// Layout Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteRequestModal from '@/components/QuoteRequestModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ShoppingCart from '@/components/ShoppingCart';

// A wrapper to handle RTL direction dynamically based on translation context
const DirectionManager = ({ children }) => {
  const { isArabic } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = isArabic ? 'ar' : 'en';
  }, [isArabic]);

  return <>{children}</>;
};

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <ErrorBoundary>
      <LanguageProvider>
        <DirectionManager>
          <LightboxProvider>
            <CartProvider>
              <QuoteModalProvider>
                <ChatBotIntegration>
                  <div className="app-container flex flex-col min-h-screen w-full">
                    <Header />
                    
                    <main className="flex-1 w-full flex flex-col pt-[80px]">
                      <AnimatePresence mode="wait">
                        <Routes location={location} key={location.pathname}>
                          <Route path={ROUTES.home} element={<Home />} />
                          <Route path={ROUTES.products} element={<ProductsPage />} />
                          <Route path={ROUTES.shop} element={<ShopPage />} />
                          <Route path={ROUTES.shopCategory} element={<ShopPage />} />
                          <Route path={ROUTES.services} element={<ServicesPage />} />
                          <Route path={ROUTES.industries} element={<IndustriesServed />} />
                          <Route path={ROUTES.about} element={<AboutUs />} />
                          <Route path={ROUTES.contact} element={<ContactUs />} />
                          <Route path={ROUTES.requestQuote} element={<ContactUs />} />
                          <Route path={ROUTES.requestQuoteCategory} element={<ContactUs />} />
                          <Route path={ROUTES.branches} element={<BranchesPage />} />
                          <Route path={ROUTES.distributionPartner} element={<DistributionPartnerPage />} />
                          
                          {/* Product Group Routes */}
                          <Route path={getProductCategoryPath('frozen-meat')} element={<FrozenMeatPage />} />
                          <Route path={getProductCategoryPath('frozen-chicken')} element={<FrozenChickenPage />} />
                          <Route path={getProductCategoryPath('frozen-mutton')} element={<FrozenMuttonPage />} />
                          <Route path={getProductCategoryPath('frozen-seafood')} element={<FrozenSeafoodPage />} />
                          <Route path={getProductCategoryPath('frozen-vegetables')} element={<FrozenVegetablesPage />} />
                          <Route path={getProductCategoryPath('frozen-fruits')} element={<FrozenFruitsPage />} />
                          <Route path={getProductCategoryPath('french-fries')} element={<FrenchFriesPage />} />
                          <Route path={getProductCategoryPath('rice-grains')} element={<RiceGrainsPage />} />
                          <Route path={getProductCategoryPath('sauces-condiments')} element={<SaucesCondimentsPage />} />
                          <Route path={getProductCategoryPath('chilled-products')} element={<ChilledProductsPage />} />
                          <Route path={getProductCategoryPath('dry-food-items')} element={<DryFoodItemsPage />} />
                          {LEGACY_REDIRECTS.map(({ from, to }) => (
                            <Route key={from} path={from} element={<Navigate to={to} replace />} />
                          ))}
                          <Route path={ROUTES.notFound} element={<Navigate to={ROUTES.home} replace />} />
                        </Routes>
                      </AnimatePresence>
                    </main>
                    
                    <Footer />
                    
                    <QuoteRequestModal />
                    <ShoppingCart />
                    <Toaster />
                  </div>
                </ChatBotIntegration>
                {/* Rendered at the absolute root level outside all layout containers to prevent z-index and overflow clipping issues */}
                <FloatingWhatsApp />
              </QuoteModalProvider>
            </CartProvider>
          </LightboxProvider>
        </DirectionManager>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
