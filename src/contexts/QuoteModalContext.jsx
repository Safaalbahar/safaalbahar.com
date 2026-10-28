import React, { createContext, useState, useContext, useCallback, useMemo } from 'react';

const QuoteModalContext = createContext();

export const useQuoteModal = () => useContext(QuoteModalContext);

export const QuoteModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openQuoteModal = useCallback((data = {}) => {
    setModalData(data);
    setIsOpen(true);
  }, []);

  const closeQuoteModal = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => setModalData({}), 300); // clear data after animation
  }, []);

  const value = useMemo(() => ({
    isOpen,
    openQuoteModal,
    closeQuoteModal,
    modalData
  }), [isOpen, openQuoteModal, closeQuoteModal, modalData]);

  return (
    <QuoteModalContext.Provider value={value}>
      {children}
    </QuoteModalContext.Provider>
  );
};