
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';
import { useChat } from '@/contexts/ChatBotProvider';

const ChatMessage = ({ message }) => {
  const isBot = message.role === 'bot';
  const { handleOptionClick } = useChat();

  const formatTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex w-full mb-4 ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`flex max-w-[85%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
        
        <div className={`flex-shrink-0 mt-auto mb-1 ${isBot ? 'mr-2' : 'ml-2'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isBot ? 'bg-[hsl(var(--primary))] text-white' : 'bg-[hsl(var(--accent-gold))] text-[hsl(var(--primary))]'}`}>
            {isBot ? <Bot size={16} /> : <User size={16} />}
          </div>
        </div>

        <div className="flex flex-col">
          <div 
            className={`p-3 rounded-2xl text-sm whitespace-pre-wrap shadow-sm ${
              isBot 
                ? 'bg-white text-[hsl(var(--foreground))] border border-gray-100 rounded-bl-sm' 
                : 'bg-[hsl(var(--primary))] text-white rounded-br-sm'
            }`}
          >
            {message.text}
          </div>
          
          <div className={`text-[10px] text-gray-400 mt-1 ${isBot ? 'text-left ml-1' : 'text-right mr-1'}`}>
            {formatTime(message.timestamp)}
          </div>

          {isBot && message.options && message.options.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {message.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(option)}
                  className="text-xs bg-gray-50 border border-[hsl(var(--accent-gold))] text-[hsl(var(--primary))] px-3 py-1.5 rounded-full hover:bg-[hsl(var(--accent-gold))] hover:text-white transition-colors duration-200"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
