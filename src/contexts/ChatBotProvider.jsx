
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { getResponse, getDailyQuote } from '@/lib/chatKnowledgeBase';

const ChatBotContext = createContext();

export const useChat = () => useContext(ChatBotContext);

export const ChatBotProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [dailyQuote, setDailyQuote] = useState('');

  useEffect(() => {
    setDailyQuote(getDailyQuote());
    setMessages([
      {
        id: 'welcome',
        role: 'bot',
        text: `Welcome to Safa Al Bahar! \n\nQuote of the day: "${getDailyQuote()}"\n\nHow can I help you today?`,
        timestamp: new Date().toISOString(),
        options: ["Products & Services", "Delivery Info", "Contact Sales"]
      }
    ]);
  }, []);

  const toggleWidget = useCallback(() => setIsOpen(prev => !prev), []);
  const openWidget = useCallback(() => setIsOpen(true), []);
  const closeWidget = useCallback(() => setIsOpen(false), []);
  const clearHistory = useCallback(() => setMessages([]), []);

  const sendMessage = useCallback((text) => {
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      role: 'user',
      text,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(text);
      const botMsg = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: response.text,
        options: response.options,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Simulate network delay
  }, []);

  const handleOptionClick = useCallback((optionText) => {
    if (optionText === "Chat on WhatsApp") {
      window.open("https://wa.me/966559977206", "_blank");
      return;
    }
    sendMessage(optionText);
  }, [sendMessage]);

  return (
    <ChatBotContext.Provider value={{
      isOpen,
      toggleWidget,
      openWidget,
      closeWidget,
      messages,
      sendMessage,
      isTyping,
      clearHistory,
      dailyQuote,
      handleOptionClick
    }}>
      {children}
    </ChatBotContext.Provider>
  );
};
