
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, ShoppingBag, Home, Package, Briefcase, Building2, Info, Mail, MapPin, HeartHandshake as Handshake } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useTranslation } from '@/hooks/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';
import { ROUTES } from '@/config/routes';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { getCartTotal, setIsCartOpen } = useCart();
  const { t, isArabic } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t('nav.home'), path: ROUTES.home, icon: Home },
    { name: t('nav.products'), path: ROUTES.products, icon: Package },
    { name: t('nav.shop'), path: ROUTES.shop, icon: ShoppingBag },
    { name: t('nav.services'), path: ROUTES.services, icon: Briefcase },
    { name: t('nav.industries'), path: ROUTES.industries, icon: Building2 },
    { name: t('nav.about'), path: ROUTES.about, icon: Info },
    { name: t('nav.contact'), path: ROUTES.contact, icon: Mail },
    { name: t('nav.branches'), path: ROUTES.branches, icon: MapPin },
    { name: t('nav.distributionPartner'), path: ROUTES.distributionPartner, icon: Handshake }
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-40 transition-all duration-300 ease-in-out ${
        isScrolled ? 'shadow-[var(--shadow-premium)]' : 'shadow-md'
      }`}
    >
      <div className="absolute inset-0 gradient-premium-brand opacity-95 backdrop-blur-md -z-10"></div>
      
      <div className="max-w-[1920px] mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-[80px]">
          
          <Link to={ROUTES.home} className="flex items-center gap-3 flex-shrink-0 group focus:outline-none h-full transition-transform duration-300 hover:scale-105">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden bg-white shadow-[var(--shadow-premium)] flex items-center justify-center p-1 transition-transform duration-300">
              <img 
                src="/assets/safa-logo.jpg" 
                alt="Safa Al Bahar Logo" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black tracking-wide leading-tight text-white group-hover:text-amber-400 transition-colors duration-300">
                {isArabic ? "صفا البحر" : "Safa Al Bahar"}
              </span>
              <span className="text-[9px] md:text-[10px] text-amber-400/90 font-bold tracking-widest uppercase hidden sm:block">
                {t('common.tradingCompany') || "Trading Company"}
              </span>
            </div>
          </Link>

          <nav className="hidden xl:flex flex-1 items-center justify-center px-4">
            <ul className="flex items-center gap-5">
              {navLinks.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={idx} className="relative group">
                    <Link
                      to={item.path}
                      className={`text-sm font-bold flex items-center gap-2 py-2 transition-colors duration-300 ease-in-out ${
                        isActive ? 'text-amber-400' : 'text-white/90 hover:text-amber-400'
                      }`}
                    >
                      <item.icon className="w-4 h-4 transition-colors duration-300 currentColor" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
            <LanguageSwitcher className="hidden sm:flex hover:bg-white/20 transition-all duration-300 border-white/20 text-white" />

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-white hover:text-amber-400 transition-colors duration-300 focus:outline-none"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-6 h-6" />
              {getCartTotal() > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center translate-x-1 -translate-y-1 shadow-sm">
                  {getCartTotal()}
                </span>
              )}
            </button>

            <a 
              href="https://wa.me/966559977206"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex bg-amber-400 text-slate-950 px-6 py-2.5 rounded-xl font-bold text-sm items-center gap-2 transition-all duration-300 hover:bg-amber-300 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(251,191,36,0.4)] min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t('common.chatNow') || "Chat Now"}</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden text-white hover:text-amber-400 p-2 rounded-md transition-colors duration-300 flex items-center justify-center focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden absolute w-full left-0 top-full shadow-[var(--shadow-premium)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#071f3d] opacity-98 backdrop-blur-md -z-10 border-t border-white/10"></div>
            <div className="px-4 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto relative z-10">
              <div className="flex justify-end mb-2 px-4 sm:hidden">
                <LanguageSwitcher className="border-white/20 text-white" />
              </div>
              {navLinks.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={idx}
                    to={item.path}
                    className={`text-base font-bold px-4 py-3.5 rounded-xl transition-all duration-300 min-h-[44px] flex items-center gap-3 ${
                      isActive 
                        ? 'bg-white/10 text-amber-400 border-l-4 border-amber-400' 
                        : 'text-white/90 hover:bg-white/5 hover:text-amber-400'
                    }`}
                    style={isArabic && isActive ? { borderRightWidth: '4px', borderLeftWidth: '0' } : {}}
                  >
                    <item.icon className="w-5 h-5 currentColor transition-colors duration-300" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <div className="mt-4 px-4 pb-4">
                <a 
                  href="https://wa.me/966559977206"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-400 text-slate-950 w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(251,191,36,0.3)] transition-all duration-300 hover:bg-amber-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t('common.whatsappInquiry') || "WhatsApp Inquiry"}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
