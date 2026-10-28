
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, MinusCircle, Loader2 } from 'lucide-react';
import { useChat } from '@/contexts/ChatBotProvider';
import ChatMessage from './ChatMessage';

const ChatBotWidget = () => {
  const { isOpen, toggleWidget, closeWidget, messages, sendMessage, isTyping } = useChat();
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const [isMinimized, setIsMinimized] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized, isTyping]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleToggle = () => {
    if (isMinimized) {
      setIsMinimized(false);
    } else {
      toggleWidget();
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleToggle}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 bg-[hsl(var(--primary))] text-[hsl(var(--accent-gold))] rounded-full shadow-2xl flex items-center justify-center z-50 border-2 border-[hsl(var(--accent-gold))] cursor-pointer hover-lift"
            aria-label="Open Chat"
          >
            <MessageSquare size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: isMinimized ? 'calc(100% - 60px)' : 0, 
              scale: 1 
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 right-0 md:bottom-6 md:right-6 w-full md:w-[380px] h-[100dvh] md:h-[600px] max-h-[100dvh] bg-gray-50 md:rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-[hsl(var(--primary))] text-white p-4 flex items-center justify-between shadow-md flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white p-1">
                  <img src="/assets/safa-logo.jpg" alt="Logo" className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight">Safa Al Bahar Assistant</h3>
                  <p className="text-[10px] text-[hsl(var(--accent-gold))] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors hidden md:block"
                  aria-label="Minimize"
                >
                  <MinusCircle size={18} />
                </button>
                <button 
                  onClick={closeWidget}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-[#f8f9fa] custom-scrollbar">
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}
              
              {isTyping && (
                <div className="flex items-center text-gray-400 gap-2 mb-4 p-2 w-fit bg-white rounded-2xl rounded-bl-sm border border-gray-100 shadow-sm ml-10">
                  <Loader2 className="w-4 h-4 animate-spin text-[hsl(var(--primary))]" />
                  <span className="text-xs">Agent is typing...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 md:p-4 bg-white border-t border-gray-200 flex-shrink-0 pb-safe">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-gray-100 text-gray-900 border-none rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-gold))] text-sm min-h-[44px]"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-[hsl(var(--primary))] text-white p-3 rounded-xl hover:bg-[hsl(var(--accent-blue))] disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center shadow-md"
                >
                  <Send size={18} className={inputValue.trim() ? "translate-x-0.5 -translate-y-0.5" : ""} />
                </button>
              </form>
              <div className="text-center mt-2">
                <p className="text-[9px] text-gray-400">Powered by AI Knowledge Base</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBotWidget;
