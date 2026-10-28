
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('safa_cart');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('safa_wishlist');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    localStorage.setItem('safa_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('safa_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { ...product, quantity }];
    });
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added.`,
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prev => prev.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item));
  };

  const clearCart = () => setCart([]);

  const getCartTotal = () => cart.reduce((total, item) => total + item.quantity, 0);

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        toast({ title: "Removed from Wishlist", description: `${product.name} removed.` });
        return prev.filter(item => item.id !== product.id);
      }
      toast({ title: "Added to Wishlist", description: `${product.name} added.` });
      return [...prev, product];
    });
  };

  const isInWishlist = (productId) => wishlist.some(item => item.id === productId);

  return (
    <CartContext.Provider value={{
      cart,
      wishlist,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      toggleWishlist,
      isInWishlist,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
};
