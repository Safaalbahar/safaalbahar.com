
import React from 'react';
import { ChatBotProvider } from '@/contexts/ChatBotProvider';
import ChatBotWidget from './ChatBotWidget';

const ChatBotIntegration = ({ children }) => {
  return (
    <ChatBotProvider>
      {children}
      <ChatBotWidget />
    </ChatBotProvider>
  );
};

export default ChatBotIntegration;
